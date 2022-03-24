import { getDatabase, ref, set, push, child, get} from "firebase/database"


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
        }
    },
    actions: {
        async createAd({commit, getters},payload){
            commit('clearError')
            commit('setLoading', true)

            try{
                const newAd = new Ad(
                    payload.title, 
                    payload.description, 
                    getters.user.id,
                    payload.imageSrc, 
                    payload.promo,
                )
                
                const db = getDatabase()
                const postListRef = ref(db, 'ads')
                const newPostRef = push(postListRef)
                await set(newPostRef, newAd)
                commit('setLoading', false)
                commit('createAd', {
                    ...newAd,
                    id: newPostRef.key
                })
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
                const dbRef = ref(getDatabase());
                get(child(dbRef, `ads`)).then((snapshot) => {
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