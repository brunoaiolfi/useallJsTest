import { SvgProps } from "react-native-svg";

interface SingInSocialButtonProps {
    title: string;
    svg: React.FC<SvgProps>;
    onPress: () => void;
}

import {
    Button,
    ImageContainer,
    Title,
} from './styles'

export function SingInSocialButton({ title, svg: Svg, onPress }: SingInSocialButtonProps) {
    return (
        <Button activeOpacity={1} onPress={() => onPress()}>
            <ImageContainer>
                <Svg />
            </ImageContainer>
            <Title>
                {title}
            </Title>
        </Button>
    )
}