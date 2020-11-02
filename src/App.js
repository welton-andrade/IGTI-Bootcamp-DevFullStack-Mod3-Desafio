import Title from '../src/components/Title';
import Form from '../src/components/Form';
import NumberInput from '../src/components/NumberInput';
import { useState } from 'react';

function App() {

  const [capital, setCapital] = useState(100);
  const [juros, setJuros] = useState(0);
  const [periodo, setPeriodo] = useState(1);

  const calculateJurosCompostos = (capital, taxa, periodo) => {
    //let montante = capital * (Math.pow((1 + taxa), periodo));
    for(let i=1; i<=periodo; i++) {
      let montante = capital * (Math.pow((1 + taxa), i));
      console.log("parcela no: " +i+ " montante: " + montante + " lucro em reais: " + (montante - capital) + 
        " lucro em porcentagem: " +(montante - capital)/100);
    }
  }

  return (
    <div className="App">
      <Title name="React - Juros Compostos"/>
      <Form>
        <NumberInput label="Capital inicial" min={100} max={100000} step={100}></NumberInput>

        <NumberInput label="Taxa de juros" min={-12} max={12} step={0.5}></NumberInput>

        <NumberInput label="Período" min={1} max={36} step={1}></NumberInput>
      </Form>
    </div>
  );
}

export default App;
