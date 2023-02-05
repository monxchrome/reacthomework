const dogActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const dogActions = {
    ADD:(item) => ({type:dogActionTypes.ADD, payload: item}),
    DELETE_BY_ID:(id) => ({type:dogActionTypes.DELETE_BY_ID, payload: id})
}

const initd = () => [];

const dogRed = (state, action) => {
    switch (action.type) {
        case dogActionTypes.ADD:
            const slice = state.slice(-1)
            const id = slice.length?slice[0].id+1:0
            return [...state, {id, ...action.payload}]

        case dogActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state]
    }
}

export {
    dogActions,
    initd,
    dogRed
}