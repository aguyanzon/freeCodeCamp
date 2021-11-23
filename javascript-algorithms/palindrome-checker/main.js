function palindrome(str) {
    let regexCharacter = /[!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    let regexSpace = /[\s]/g;
    let wordAnalyzed = str.replace(regexCharacter,"").replace(regexSpace,"").toLowerCase();
    let wordCompared = [];
    for(let i=0; i < wordAnalyzed.length; i++){
        wordCompared.unshift(wordAnalyzed[i]);
    }
    wordCompared = wordCompared.toString().replace(regexCharacter, "");
    if(wordAnalyzed === wordCompared){
        return true;
    } else {
        return false;
      }
  }

console.log(palindrome("A man, a plan, a canal. Panama"));