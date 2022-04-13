import { getDatabase, ref, set, push, child, get, update} from "firebase/database"
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL   } from "firebase/storage"


class Ad{
    constructor(title,description,ownerId,imageSrc='',promo = false, id = null){
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}

export default {
    state:{
        ads: []
    },
    mutations: {
        createAd(state, payload){
            state.ads.push(payload)
        },
        loadAds(state,payload){
            state.ads = payload
        },
        updateAd(state,{title,description,id}){
            const ad = state.ads.find(i =>{
                return i.id === id
            })

            ad.title = title
            ad.description = description
        }
    },
    actions: {
        async createAd({commit, getters},payload){
            commit('clearError')
            commit('setLoading', true)

            const image = payload.image

            try{

                const postListRef = ref(getDatabase(), 'ads')
                const newPostRef = push(postListRef)
                const imageExt = image.name.slice(image.name.lastIndexOf('.'))

                await uploadBytes(refStorage(getStorage(), `ads/${newPostRef.key}${imageExt}`), image)
                const imageSrc = await getDownloadURL(refStorage(getStorage(), `ads/${newPostRef.key}${imageExt}`))

                const newAd = new Ad(
                    payload.title, 
                    payload.description, 
                    getters.user.id,
                    imageSrc, 
                    payload.promo,
                )

                commit('setLoading', false)
                commit('createAd', {
                    ...newAd,
                    id: newPostRef.key,
                })
                await set(newPostRef, newAd)
            }catch(error){
                commit('setError',error.message)
                commit('setLoading', false)
                throw error
            }
        },

        async fetchAds({commit}){
            commit('clearError')
            commit('setLoading', true)

            const resultAds = []

            try {
                const dbRef = ref(getDatabase())
                await get(child(dbRef, `ads`)).then((snapshot) => {
                if (snapshot.exists()) {
                    Object.keys(snapshot.val()).forEach(key => {
                        const ad = snapshot.val()[key]
                        resultAds.push(
                            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
                        )
                    })
                } else {
                    console.log("No data available");
                }
                }).catch((error) => {
                    console.error(error);
                });
                commit('loadAds', resultAds)
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },

        async updateAd({commit},{title,description,id}){
            commit('clearError')
            commit('setLoading', true)

            try {
                const dbRef = ref(getDatabase(), 'ads')
                await update(child(dbRef, id), {title,description})
                commit('updateAd', {
                    title,description,id
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        ads(state){
            return state.ads
        },
        promoAds(state){
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state){
            return state.ads
        },
        adById(state){
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}