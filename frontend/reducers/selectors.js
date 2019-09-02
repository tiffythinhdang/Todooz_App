export const allTodos = (state) => {
  const todosKeys = Object.keys(state.todos);
  const todosArr = todosKeys.map( key => state.todos[parseInt(key)] );
  return todosArr;
};