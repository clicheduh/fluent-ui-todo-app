const initState = {
	todos: []
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_TODO') {
		var newTodos = state.todos.filter((todo) => {
			return action.idToDelete !== todo.id;
		});
		return {
			...state,
			todos: newTodos
		};
	}

	return state;
};

export default rootReducer;
