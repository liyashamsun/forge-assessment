import React from "react";

interface txtInput{
    inputString : string;
}

interface mainTxt{
    word: string;
    occurance: number;
}


export function countWordFx(str: txtInput){
    let strWords = str.inputString.split(" ");
    let strExist: mainTxt[] = [];

    for(let i in strWords){
        let newWord = strWords[i];
        let newWordArr: mainTxt={
            word:newWord.toString(),
            occurance:1
        };
        if (strExist.length>0){
            if(strExist.some(exist => exist.word === newWord)){
                let getIndex = strExist.findIndex(exist => exist.word === newWord);
                strExist[getIndex].occurance++;
            }else{
                strExist.push(newWordArr);
            }
        }else{
            strExist.push(newWordArr);
        }
    }

    console.log("no error thanks");
    return(strExist);
}