
$(document).ready(function() {
  $.getJSON('/memo/todos').then(addTodos);

  $('#todoInput').keypress(function(event){
    if (event.which === 13) {
      createTodo();
    }
  })

  $('.list').on('click', 'li', function () {
    updateTodo($(this))
  })

  $('.list').on('click', 'span', function (e) {
    e.stopPropagation(); 
    removeTodo($(this).parent());
  })
})

function addTodos(todos) {
  //add todos
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.content + '<span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function createTodo(){
  var content = $('#todoInput').val();
  $.post('memo/todos', { content : content})
    .then(function(newTodo){
      $('#todoInput').val('')
      addTodo(newTodo);
    })
    .catch(function (err) {
      console.log(err);
    })
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  var deleteUrl = '/memo/todos/' + clickedId;
  $(this).parent().remove();
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
    .then(function(data){
      todo.remove();
    })
}

function updateTodo(todo) {
  var updateUrl = '/memo/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = { completed: isDone }
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
    .then(function(updatedTodo){
      todo.toggleClass("done");
      todo.data('completed', isDone)
    })
}