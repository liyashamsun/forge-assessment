import React from 'react';
import ForgeUI, { render, Fragment, Form, TextField, Button, Radio, RadioGroup, useState } from '@forge/ui';
import { countWordFx } from './CountStr';

export default function Body(){
    const [formState, setFormState] = useState(undefined);

    const onSubmit = async (formData) => {
        alert('here');
        console.log(formData);
        countWordFx(formData);
        setFormState(formData);
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
        </Fragment>
    );
}
