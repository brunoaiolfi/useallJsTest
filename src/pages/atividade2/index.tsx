import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ListContainer,
  ResultsContainer,
} from "./styles";

export function Atividade2() {
  const [list, setList] = useState<number[]>([]);
  const [position, setPosition] = useState<number>();

  const [numberToSearch, setNumberToSearch] = useState<number>();
  const [numberToAdd, setNumberToAdd] = useState<number>();

  function handleAdd() {
    if (numberToAdd && !list.includes(numberToAdd)) {
      const number = Number(numberToAdd);

      setList((prev) => [...prev, number]);
    }
  }

  function handleSearch() {
    if (numberToSearch) {
      const tempPosition = list.findIndex((el) => el === numberToSearch);
      setPosition(tempPosition == -1 ? undefined : tempPosition);
    }
  }

  return (
    <DashboardContainer>
      <ResultsContainer>
        <Text>Posição: {position?.toString() ?? "--"}</Text>
        <ListContainer>
          <Text>Lista: {list.map((el) => <Text key={el}>{el};&nbsp;</Text>)}</Text>
        </ListContainer>
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
          <ButtonComponent onPress={() => handleAdd()} title="Adicionar" />
        </InputWrapper>

        <InputWrapper>
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setNumberToSearch(Number(el));
            }}
            placeholder="Buscar número na lista"
          />
          <ButtonComponent onPress={() => handleSearch()} title="Buscar" />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
