function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png.jpg'
        document.body.style.background = '#F0DCB7'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'fototarde.png.jpg'
        document.body.style.background = '#734D55'
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.png.jpg'
        document.body.style.background = '#0C282B'
    }
}