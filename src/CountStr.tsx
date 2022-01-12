interface parameter {
  txtInput: string;
  sortResult: string;
  sortOrder: string;
}

interface mainTxt {
  word: string;
  occurance: number;
}


export function countWordFx(str: parameter) {
  //get value from textarea and split by space
  let strWords = str.txtInput.split(" ");

  let strExist: mainTxt[] = [];

  for (let i in strWords) {
    let newWord = strWords[i];
    let newWordArr: mainTxt = {
      word: newWord.toString(),
      occurance: 1
    };
    //check existed word in strExist
    if (strExist.length > 0) {
      if (strExist.some(exist => exist.word === newWord)) {
        let getIndex = strExist.findIndex(exist => exist.word === newWord);
        strExist[getIndex].occurance++;
      } else {
        strExist.push(newWordArr);
      }
    } else {
      strExist.push(newWordArr);
    }
  }

  //sort list by word
  if (str.sortResult == 'Word') {
    if (str.sortOrder == 'Ascending') {
      strExist = strExist.sort((a, b) => a.word.localeCompare(b.word));
    } else {
      strExist = strExist.sort((a, b) => b.word.localeCompare(a.word));
    }
  }else{
  //sort list by count
    if (str.sortOrder == 'Ascending') {
      strExist = strExist.sort((a, b) => a.occurance - b.occurance);
    } else {
      strExist = strExist.sort((a, b) => b.occurance- a.occurance);
    }
  }

  return (strExist);
}
