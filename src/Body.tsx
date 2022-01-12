import ForgeUI, { render, Fragment, Form, TextField, Button, Radio, RadioGroup, Text, Table, Head, Cell, Row, Strong, useState } from '@forge/ui';
import { countWordFx } from './CountStr';

export default function Body() {
  const [formState, setFormState] = useState(undefined);
  const [inputValue, setInputValue] = useState(undefined);

  const onSubmit = async (formData) => {
    setInputValue(formData);
    //count word occurance
    const strExist = countWordFx(formData);
    //set value into table
    setFormState(strExist);
  }
  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <TextField label='Your input field' name='txtInput'
          placeholder='Enter Text Here' isRequired></TextField>
        <RadioGroup name="sortResult" label="Sort results by">
          <Radio defaultChecked label="Word" value="Word" />
          <Radio label="Count" value="Count" />
        </RadioGroup>
        <RadioGroup name="sortOrder" label="Sort order by">
          <Radio defaultChecked label="Ascending" value="Ascending" />
          <Radio label="Descending" value="Descending" />
        </RadioGroup>
      </Form>
      {inputValue &&
        <Text>
        <Strong>Your input field :</Strong> {inputValue.txtInput} {'\n'}
        <Strong>Sort Result by :</Strong> {inputValue.sortResult} {'\n'}
        <Strong>Sort order by :</Strong> {inputValue.sortOrder}
        </Text>
      }
      {formState &&
        <Table>
          <Head>
            <Cell>
              <Text>Word</Text>
            </Cell>
            <Cell>
              <Text>Count</Text>
            </Cell>
          </Head>
          {formState.map(data => (
            <Row>
              <Cell>
                <Text>{data.word}</Text>
              </Cell>
              <Cell>
                <Text>{data.occurance}</Text>
              </Cell>
            </Row>
          ))}
        </Table>
        }
    </Fragment>
  );
}
