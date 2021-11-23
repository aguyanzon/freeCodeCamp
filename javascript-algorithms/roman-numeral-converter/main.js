function convertToRoman(num){

    let enteros = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanos = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let resultado = "";

    for(let i = 0; i < enteros.length; i++){
        if(num >= enteros[i]){
          if( 5 <= num && num <= 8) num -= 5;
          else if(1 <= num && num <= 3) num -= 1;
          else num -= enteros[i];
          resultado += romanos[i];
          i--;
        }
      }

    return resultado;
}

console.log(convertToRoman(36));

