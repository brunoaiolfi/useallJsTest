import { useState } from "react";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ResultWrapper,
  ResultsContainer,
  Result,
} from "../atividade4/styles";
import { ButtonComponent } from "../../components/ButtonComponent";

export function Atividade4() {
  const [imcState, setImcState] = useState<string>();
  const [imc, setIMC] = useState<number>();

  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();

  function calculateIMC() {
    if (weight && height) {
      const tempIMC = weight / (height * height);
      setIMC(tempIMC);

      if (tempIMC < 18.5) {
        return setImcState("Abaixo do peso");
      }
      if (tempIMC < 25) {
        return setImcState("Normal");
      }
      if (tempIMC < 30) {
        return setImcState("Acima do peso");
      }
      return setImcState("Obeso");
    }
  }

  return (
    <DashboardContainer>
      <ResultsContainer>
        <ResultWrapper>
          <Result>Estado: {imcState}</Result>
        </ResultWrapper>

        <ResultWrapper>
          <Result>IMC: {imc?.toFixed(2).toString() ?? ""}</Result>
        </ResultWrapper>
      </ResultsContainer>

      <InputContainer>
        <InputWrapper>
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setWeight(Number(el));
            }}
            placeholder="Peso"
          />
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setHeight(Number(el));
            }}
            placeholder="Altura"
          />
          <ButtonComponent onPress={() => calculateIMC()} title="Calcular" />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
