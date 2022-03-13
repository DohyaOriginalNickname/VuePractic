export default {
    state:{
        ads: [
            {
                title: 'First ad', 
                description: 'Hello i am description', 
                promo: true, 
                imageSrc:'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', 
                id: '1' 
            },
            {
                title: 'Second ad', 
                description: 'Hello i am description', 
                promo: true, 
                imageSrc:'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
                id: '2' 
            },
            {
                title: 'thirty ad', 
                description: 'Hello i am description', 
                promo: true, 
                imageSrc:'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
                id: '3' 
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state){
            return state.ads
        },
        promoAds(state){
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state){
            return state.ads
        }
    }
}