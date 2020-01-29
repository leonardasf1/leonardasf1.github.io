function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }

window.onload = () => {
  qAll('.button-call').forEach(i => i.onclick = function(){
    q('#popupContainer').style.display = 'flex';
  });
  q('#background_remove').addEventListener("click", () => {
    q('#popupContainer').style.display = 'none';
  });
/*
        $('#button-input').click(function(){
           var name = $('name').val();
           if(name <= 0) {
           	  alert('Введите Имя!');
           } else {
           	  $.post('/api.php', {'name' : name}, function(response){
           alert('Спасибо за заказ!');
           	  });
           }
        }); */
}