import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Input } from "../../components/input";
import {
  DashboardContainer,
  InputContainer,
  InputWrapper,
  ResultWrapper,
  ResultsContainer,
  Result,
} from "./styles";

export function Atividade1() {
  const [numberToRead, setNumberToRead] = useState<number>();
  const [result, setResult] = useState<string>();

  function handleSearch(number: number) {
    const formattedNumber = number?.toString().padStart(4, "0")

    const milhar = Number(formattedNumber[0] ?? 0)
    const centena = Number(formattedNumber[1] ?? 0)
    const dezena = Number(formattedNumber[2] ?? 0)
    const unit = Number(formattedNumber[3] ?? 0)

    const isZero = [milhar, centena, dezena, unit].every((el) => el == 0)
    if (isZero) return setResult("Zero");

    var milharName: string = "";
    var centenaName: string = "";
    var dezenaName: string = "";
    var unitName: string = "";

    // Avalia a casa dos milhar
    const tempMilharName = translateUnit(milhar)
    if (tempMilharName) {
      if (milhar === 1) {
        milharName = "Mil "
      } else {
        milharName = tempMilharName + " mil "
      }
    }

    // Avalia a casa das centenas 
    const tempCentenaName = translateCentena(centena, dezena > 0 || unit > 0)
    if (tempCentenaName) {
      if (dezena > 0 || unit > 0) {
        centenaName = tempCentenaName + " e "
      } else {
        centenaName = tempCentenaName + " "
      }
    }

    // Avalia a casa das dezenas
    const tempDezenaName = translateDezena(dezena, unit)
    if (tempDezenaName) {
      if (dezena > 1 && unit > 0) {
        dezenaName = tempDezenaName + " e "
      } else {
        dezenaName = tempDezenaName + " "
      }
    }

    // Avalia a unidade
    unitName = dezena !== 1 ? translateUnit(unit) ?? "" : ""

    const numberName = milharName + centenaName + dezenaName + unitName;

    setResult(numberName)
  }

  function translateUnit(number: number) {
    switch (number) {
      case 1:
        return 'Um';
      case 2:
        return 'Dois';
      case 3:
        return 'Três';
      case 4:
        return 'Quatro';
      case 5:
        return 'Cinco';
      case 6:
        return 'Seis';
      case 7:
        return 'Sete';
      case 8:
        return 'Oito';
      case 9:
        return 'Nove';
      default:
        return undefined
    }
  }

  function translateCentena(number: number, hasDezenaOrUnit: boolean) {
    switch (number) {
      case 1:
        if (hasDezenaOrUnit) {
          return "Cento"
        }
        return 'Cem';
      case 2:
        return 'Duzentos';
      case 3:
        return 'Trezentos';
      case 4:
        return 'Quatrocentos';
      case 5:
        return 'Quinhentos';
      case 6:
        return 'Seiscentos';
      case 7:
        return 'Setecentos';
      case 8:
        return 'Oitocentos';
      case 9:
        return 'Novecentos';
      default:
        return undefined
    }
  }

  function translateDezena(dezena: number, unit: number) {
    switch (dezena) {
      case 1:
        switch (unit) {
          case 1:
            return "Onze"
          case 2:
            return "Doze"
          case 3:
            return "Treze"
          case 4:
            return "Quatorze"
          case 5:
            return "Quinze"
          case 6:
            return "Dezesseis"
          case 7:
            return "Dezessete"
          case 8:
            return "Dezoito"
          case 9:
            return "Dezenove"
        }
        return "Dez";
      case 2:
        return "Vinte";
      case 3:
        return "Trinta";
      case 4:
        return "Quarenta";
      case 5:
        return "Cincoenta";
      case 6:
        return "Sesenta";
      case 7:
        return "Setenta";
      case 8:
        return "Oitenta";
      case 9:
        return "Noventa";
      default:
        return undefined
    }
  }

  return (
    <DashboardContainer>

      <ResultsContainer>
        <ResultWrapper>
          <Result>Resultado: {result}</Result>
        </ResultWrapper>
      </ResultsContainer>

      <InputContainer>
        <InputWrapper>
          <Input
            keyboardType="number-pad"
            onChangeText={(el) => {
              setNumberToRead(Number(el));
            }}
            maxLength={4}
            placeholder="Número"
          />
          <ButtonComponent onPress={() => handleSearch(numberToRead ?? 0)} title="Mostrar resultado" />
        </InputWrapper>
      </InputContainer>
    </DashboardContainer>
  );
}
