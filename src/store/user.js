import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"


class User{
    constructor(id){
        this.id = id
    }
}

export default{
    state:{
        user: null
    },
    mutations: {
        setUser(state, payload){
            state.user =  payload
        } 
    },
    actions: {
        
        async registerUser({commit}, {email,password}){

            commit('clearError')
            commit('setLoading', true)

            try{
                await createUserWithEmailAndPassword(getAuth(), email, password)
                const user = getAuth().currentUser
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            }catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        async loginUser({commit}, {email,password}){
            commit('clearError')
            commit('setLoading', true)

            try{
                await signInWithEmailAndPassword(getAuth(), email, password)
                const user = getAuth().currentUser
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            }catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        autoLoginUser({commit}, payload){
            commit('setUser', new User(payload.uid))
        },
        logoutUser({commit}){
            signOut(getAuth())
            commit('setUser', null)
        }
    },
    getters: {
        user(state){
            return state.user
        },
        isUserLoggedIn(state){
            return state.user !== null
        }
    }
}