function formatar(mascara, documento){
    var i = documento.value.lenth;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    if(texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}