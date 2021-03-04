export const deleteTodoAction = (id) => {
	return {
		type: 'DELETE_TODO',
		idToDelete: id
	};
};
