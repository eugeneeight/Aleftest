import {createStore} from "vuex";

const store =  createStore({
    state: {
        // user: {
        //     name: "",
        //     age: "",
        // },
        // userChild: [{
        //     id: Data.now(),
        //     name: '',
        //     age: '',
        // }]r
    },
    mutations: {
        saveData(state, action) {
            state.user = action
        },
        saveChild(state, user1) {
            state.userChild = user1
        }
    }
})

export default store
