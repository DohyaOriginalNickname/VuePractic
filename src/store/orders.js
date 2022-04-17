import { getDatabase, ref, push, get, child, update} from "firebase/database"


class Order{
    constructor(name,phone,adId,done = false, id = null){
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
}

export default {
    state:{
        orders: []
    },
    mutations:{
        loadOrders(state,payload){
            state.orders = payload
        }
    },
    actions:{
        async createOrder({commit}, {name,phone,adId,ownerId}){
            const order = new Order(name,phone,adId)
            commit('clearError')

            try{
                await push(ref(getDatabase(), `/users/${ownerId}/orders`),order)
            }catch(error){
                commit('setError', error.message)
                throw error
            }
        },
        async fetchOrders({commit, getters}){
            commit('setLoading', true)
            commit('clearError')
            const resultOrders = []
            try {
                await get(child(ref(getDatabase()),  `/users/${getters.user.id}/orders`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        Object.keys(snapshot.val()).forEach(key => {
                            const order = snapshot.val()[key]
                            resultOrders.push(
                                new Order(order.name, order.phone, order.adId, order.done, key)
                            )
                        })
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                })
                commit('loadOrders', resultOrders)
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async markOrderDone({commit, getters},payload){
            commit('clearError')
            try {
                await update(child(ref(getDatabase(), `/users/${getters.user.id}/orders`),payload), {done:true})
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters:{
        doneOrders(state){
            return state.orders.filter(order => order.done)
        },
        unDoneOrders(state){
            return state.orders.filter(order => !order.done)
        },
        orders(state,getters){
            return getters.unDoneOrders.concat(getters.doneOrders)
        }
    }
}