import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 100%;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-bottom: 16px;
`;
export const ImageContainer = styled.View`
  height: 100%;
  width: 64px;

  justify-content: center;
  align-items: center;

  border: 0px solid ${({ theme }) => theme.colors.text};
  border-right-width: 0.5px;
`;


export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;

  width: 80%;
  text-align: center;

  color: ${({ theme }) => theme.colors.title};
`;
