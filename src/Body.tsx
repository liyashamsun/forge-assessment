import React from 'react';
import ForgeUI, { Table, Head, Cell, Row, Fragment, Form, TextField, Text, Radio, RadioGroup, useState } from '@forge/ui';

interface inputData{
    txtInput: string;
    chckBoxValue: string;
    radioValue: string
}

interface mainTxt{
    word: string;
    occurance: number;
}

export default function Body(){
    const [formWords, setFormWords] = useState<inputData[]>();

    const onSubmit = async (formData) => {
        setFormWords(formData);
        let result: mainTxt[] = countWordFx(formData.txtInput);
    } 
    
    const countWordFx = (str: string) => {
    
        let strWords = str.split(" ");
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
    return(
        <Fragment>
            <Form onSubmit={onSubmit}>
                <TextField label='Your input field' name='txtInput' 
                    placeholder='Enter Text Here' isRequired></TextField>
                <RadioGroup name="sortResult" label="Sort results by">
                <Radio defaultChecked label="Word" value="word" />
                <Radio label="Count" value="count" />
                </RadioGroup>    
                <RadioGroup name="sortOrder" label="Sort order by">
                <Radio defaultChecked label="Ascending" value="asc" />
                <Radio label="Descending" value="desc" />
                </RadioGroup> 
            </Form>
            <Table>
                <Head>
                <Cell>
                    <Text>Word</Text>
                </Cell>
                <Cell>
                    <Text>Occurance</Text>
                </Cell>
                </Head>
            </Table>
            {formWords && <Text>{JSON.stringify(formWords)}</Text>}
        </Fragment>

}
