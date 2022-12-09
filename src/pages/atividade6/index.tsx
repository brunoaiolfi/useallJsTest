import React, { useState } from "react";
import { Text } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ResultWrapper,
  ResultsContainer,
} from "../atividade2/styles";
import { Result } from "./styles";

export function Atividade6() {
  const [fila, setFila] = useState<string[]>([]);
  const [name, setName] = useState<string>();

  function handleAddName() {
    if (name) {
      setFila((prev) => [...prev, name]);
    }
  }

  function handleDeleteLast() {
    const filteredPilha = [...fila];
    filteredPilha.shift();
    setFila(filteredPilha);
  }

  return (
    <DashboardContainer>
      <ResultsContainer>
        <Result>Fila: </Result>
        {fila.map((el, index) => (
          <Result key={el + index.toString()}>{el}</Result>
        ))}
      </ResultsContainer>

      <InputContainer>
        <InputWrapper>
          <Input
            onChangeText={(el) => {
              setName(el);
            }}
            placeholder="Nome"
          />
          <ButtonComponent onPress={() => handleAddName()} title="Adicionar" />
        </InputWrapper>
        <InputWrapper>
          <ButtonComponent
            onPress={() => handleDeleteLast()}
            title="Deletar primeiro"
          />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
