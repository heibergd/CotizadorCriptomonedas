import React from "react";
import styled from "@emotion/styled";
import useSelectMoneda from "../hooks/useSelectMoneda";
import { monedas } from '../data/monedas'

// Estilos para el input
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {

   

    const [ moneda, SelectorMonedas ] = useSelectMoneda('Elije tu Moneda', monedas)


    return (
      <form>
        <SelectorMonedas />
        
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    );
};

export default Formulario;
