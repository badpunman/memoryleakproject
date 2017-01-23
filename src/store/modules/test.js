
export default {
    namespaced: true,
    state: {
        test: [
            {id: 1, value: "foo"},
            {id: 2, value: "bar"},
            {id: 3, value: "afko"},
            {id: 4, value: "16"},
            {id: 5, value: "2"},
            {id: 6, value: "17"},
        ]
    },
    mutations: {
        set(state, data) {
            state[data.id] = data.data;
        }
    },
    actions: {
        
    }
}