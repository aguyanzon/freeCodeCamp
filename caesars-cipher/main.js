function rot13(str){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let palabra = ""
    for(let i=0; i < str.length; i++){
        let result = "";
        if((alphabet.indexOf(str[i]) + 13) > 25){
            result += (alphabet.indexOf(str[i]) + 13 - 1) - 25; /*En caso de superar la vuelta del abecedario*/
            palabra += alphabet[result];
        }
        else if(alphabet.indexOf(str[i]) === -1){ /*En caso de que el caracter no sea una letra*/
            palabra += str[i];
        }
        else {
            result += (alphabet.indexOf(str[i]) + 13); /*Se le suma 13 posiciones a la posición actual*/
            palabra += alphabet[result];
        }
    }
    return palabra
}
