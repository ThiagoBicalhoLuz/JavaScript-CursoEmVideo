var agora = new Date()
var hora = agora.getHours()
if ( hora < 4) {
    console.log(`Boa madrugada, são exatamente ${hora} horas.`)
} else if ( hora < 12) {
    console.log(`Bom dia, são exatamente ${hora} horas.`)
} else if (hora < 24) {
    console.log(`Boa tarde, são exatamente ${hora} horas.`)
} else {
    console.log(`Boa noite, são exatamente ${hora} horas.`)
}