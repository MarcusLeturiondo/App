var $cardColors= document.querySelectorAll('.card-colors');

for (var i = 0; i < $cardColors.length; i++) {
  $cardColors[i].addEventListener('click', function(){
      alert('voce clicou');
});
}
