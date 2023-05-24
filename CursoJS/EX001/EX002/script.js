function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')  
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement  ('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            // CRIANÇA
            img.setAttribute('src','meninobebe.png')
        }else if (idade < 21){
            // JOVEM
            img.setAttribute('src', 'jovem-h.png')
        }else if (idade < 50){
            //ADULTO
            img.setAttribute('src','adulto.png')
        }else{
            //IDOSO
            img.setAttribute('src', 'senhor.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            // CRIANÇA
            img.setAttribute('src','meninabebe.png')
        }else if (idade < 21){
            // JOVEM
            img.setAttribute('src','jovem-m.png')
        }else if (idade < 50){
            //ADULTA
            img.setAttribute('src','adulta.png')
        }else{
            //IDOSA
            img.setAttribute('src','idosa.png')
        }
    }
    res.innerHTML = `Você se identifica como ${genero} e tem ${idade} anos.`
    res.appendChild(img) 
    }
}