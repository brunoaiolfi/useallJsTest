import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ResultWrapper,
  Result,
  ResultsContainer,
} from "./styles";

export function Atividade2() {
  const [list, setList] = useState<number[]>([]);
  const [position, setPosition] = useState<number>();

  const [numberToSearch, setNumberToSearch] = useState<number>();
  const [numberToAdd, setNumberToAdd] = useState<number>();

  function handleAddNumberToList() {
    if (numberToAdd && !list.includes(numberToAdd)) {
      const number = Number(numberToAdd);

      setList((prev) => [...prev, number]);
    }
  }

  function handleSearchNumberIntoList() {
    if (numberToSearch) {
      const tempPosition = list.findIndex((el) => el === numberToSearch);
      setPosition(tempPosition == -1 ? undefined : tempPosition);
    }
  }

  return (
    <DashboardContainer>
      <ResultsContainer>
        <Result>Posição: {position?.toString() ?? "--"}</Result>
        <ResultWrapper>
          <Result>Lista: {list.map((el) => <Text key={el}>{el};&nbsp;</Text>)}</Result>
        </ResultWrapper>
      </ResultsContainer>

      <InputContainer>
        <InputWrapper>
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setNumberToAdd(Number(el));
            }}
            placeholder="Adicionar número na lista"
          />
          <ButtonComponent onPress={() => handleAddNumberToList()} title="Adicionar" />
        </InputWrapper>

        <InputWrapper>
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setNumberToSearch(Number(el));
            }}
            placeholder="Buscar número na lista"
          />
          <ButtonComponent onPress={() => handleSearchNumberIntoList()} title="Buscar" />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
