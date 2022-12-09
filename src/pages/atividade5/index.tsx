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

export function Atividade5() {
  const [pilha, setPilha] = useState<string[]>([]);
  const [name, setName] = useState<string>();

  function handleAddName() {
    if (name) {
      setPilha((prev) => [...prev, name]);
    }
  }

  function handleDeleteLast() {
    const filteredPilha = [...pilha];
    filteredPilha.pop();
    setPilha(filteredPilha);
  }

  return (
    <DashboardContainer>
      <ResultsContainer>
        <Result>Pilha: </Result>
        {pilha.map((el, index) => (
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
            title="Deletar último"
          />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
