import React, { useState } from "react";
import { Text } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ListContainer,
  ResultsContainer,
} from "../atividade2/styles";

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
        <Text>Fila: </Text>
        {fila.map((el, index) => (
          <Text key={el + index.toString()}>{el}</Text>
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
          <ButtonComponent onPress={() => handleAddName()} title="Calcular" />
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
