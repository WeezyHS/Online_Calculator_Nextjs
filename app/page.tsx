"use client";

import { useState } from "react";

export default function Home()
{
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState < string | null > (null); //Resultado

  const [operation, setOperation] = useState < string | null > (null); //Estado das operações

  const handleOperationClick = (op: string) =>
  {
    setOperation(op); //Atualiza o estado da operação selecionada
  }
  const handleCalculate = () =>
    {
      if (!operation)
      { //Se um dos botões de operação não for clicado, exibe um alerta e retorna
        setResult(null);
        alert("Por favor, selecione um modo de operação primeiro!");
        return;
      }

      const num1 = number1 === "" ? 0 : parseFloat(number1);
      const num2 = number2 === "" ? 0 : parseFloat(number2);

      if (number1 === "" || number2 === "")
      { //Se um campo estiver vazio, exibe um alerta
        setResult(null);
        alert("Por favor, preencha os dois campos!");
        return;
      }

    let calculatedResult: string;
    if (operation === "+")
      {
        calculatedResult = "Result of the sum: " + (num1 + num2);
      }
    else if (operation === "-")
      {
        calculatedResult = "Result of the subtraction: " + (num1 - num2);
      }
    else if (operation === "x")
      {
        calculatedResult = "Result of the multiplication: " + (num1 * num2);
      }
    else if (operation === "/")
      {
        calculatedResult = "Result of the division: " + (num1 / num2);
      }
    else
      { //Lógica para outras operações
        calculatedResult = "";
      }

    setResult(calculatedResult);

    setNumber1(''); //Limpa os campos de números após o resultado sair
    setNumber2('');
    setOperation(null); //Reseta o estado da operação (!operation) para detectar se um botão de operação não foi selecionado
  };

  const handleDelete = () =>
    {
      setNumber1('');
      setNumber2('');
      setResult(null);
    }

  return(
    <div>
      <div className="container">
          <h1 className="Title">Online Calculator</h1>
          <div className="input_group">
            <label htmlFor="number1">First number: </label>
            <input type="number" id="number1" value={number1} onChange={(e) => setNumber1(e.target.value)} style={{width: "100px", border: "1px solid white"}} className="input"/><br/>
          </div>
        </div>
        <div className="input_group">
          <label htmlFor="number2">Second number: </label>
          <input type="number" id="number2" value={number2} onChange={(e) => setNumber2(e.target.value)} style={{width: "100px", border: "1px solid white"}} className="input"/>
      </div>
      <div className="button_group">
        <button className={`calculate_button ${operation === "Calculate" ? "active_operation" : ""}`} onClick={handleCalculate}>
          Calculate
        </button>
        <button className={`sum_button ${operation === "+" ? "active_operation" : ""}`} onClick={() => handleOperationClick("+")}>+</button>
        <button className={`sub_button ${operation === "-" ? "active_operation" : ""}`} onClick={() => handleOperationClick("-")}>-</button>
        <button className={`sum_button ${operation === "x" ? "active_operation" : ""}`} onClick={() => handleOperationClick("x")}>x</button>
        <button className={`sum_button ${operation === "/" ? "active_operation" : ""}`} onClick={() => handleOperationClick("/")}>/</button>

        <button className={`delete_button ${operation === "Delete" ? "active_operation" : ""}`} onClick={handleDelete}>Delete</button>
      </div>
      {result !== null && (
        <div className="result">
          {result}
        </div>
      )}
    </div>
  );
}