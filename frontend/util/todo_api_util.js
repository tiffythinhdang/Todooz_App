export const fetchTodos = () => {
  return (
    $.ajax({
      url: "/api/todos",
      method: "GET"
    })
  )
}

export const createTodo = (todo) => {
  // debugger
  // let a = new Promise(function (res, rej) {
  //   return res()
  // })
  // debugger
  // return a
  return (
    $.post({
      url: "/api/todos",
      method: "POST",
      data: todo
      // success: (res) => console.log(res),
    })
  )

  // return new Promise (
  //   function (resolve, reject) {
  //     $.ajax({
  //       url: "/api/todos",
  //       method: "POST",
  //       data: todo,
  //       success: resolve
  //     })
  //   }
  // )
}

export const updateTodo = (todo) => {
  return (
    $.ajax({
      url: `/api/todos/${todo.id}`,
      method: "PATCH",
      data: {
        todo: todo
      }
    })
  )
}

export const deleteTodo = (todo) => {
  return (
    $.ajax({
      url: `/api/todos/${todo.id}`,
      method: "DELETE",
      data: {
        todo: todo
      }
    })
  )
}