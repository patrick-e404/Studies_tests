var agora = new Date()
var hora = agora.getHours()
console.log (`Salve Salve meu parça, já são ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia ae meu campeãoo!')
} else if(hora <= 18){
    console.log('Boa tardeee, seguimos na luta')
} else{
    console.log('Boa noite conteraneo')
}