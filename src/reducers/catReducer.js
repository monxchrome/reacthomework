const catActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const catActions = {
    ADD:(item) => ({type:catActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type:catActionTypes.DELETE_BY_ID, payload: id})
}

const init = () => []

const catRed = (state, action) => {
    switch (action.type) {
        case catActionTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length?slice[0].id+1:0;
            return [...state, {id, ...action.payload}];

        case catActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state]
    }
}

export {
    catActions,
    catRed,
    init
}