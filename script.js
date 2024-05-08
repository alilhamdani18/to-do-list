const input = document.getElementById('input-box');
const tambahTodo = document.getElementById('tambah');
const todo = document.getElementById('to-do');

tambahTodo.addEventListener('click', function () {
  let newTodo = "<li> <span onclick='toggle(this)'>" + input.value + '</span>' + "<span onclick='remove(this)' class = 'hapus'> x </span></li>";

  todo.insertAdjacentHTML('afterbegin', newTodo);
  input.value = '';
});

function toggle(el) {
  el.classList.toggle('done');
}
function remove(el) {
  el.parentElement.remove();
}
