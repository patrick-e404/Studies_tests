var button = document.getElementById('veri')
var res = document.getElementById('res')
button.addEventListener('click', function(){
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var n3 = parseInt(document.getElementById('n3').value);
  if (n1 > n2) {
    alert("Verifique os campos");
    return;
  }
  for (var i = n1; i <= n2; i += n3){
    console.log(i);
  }
})