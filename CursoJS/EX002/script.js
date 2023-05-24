var btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    var image = document.getElementById('myimage')
    image.style.display = 'block'
})
document.getElementById('btn').addEventListener("click", function(){
    document.getElementById("mensagem").textContent = "Tu é corajoso, eu não teria clicado";
});