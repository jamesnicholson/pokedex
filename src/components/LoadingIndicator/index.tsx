import { FC } from 'react'
import styled from 'styled-components'
//import AppContext from '../../store/context'

interface ILoadingIndicatorProps {
} 
interface IPixelProps {
    theme?:{
        pixels:{
            pokeball:string
        }
    }
}
const Title = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.secondary};
`;
const LoadingIndicatorWrapper = styled.div`
    background: black;
    text-align: center;
    color: white;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 9;
`;
const PokeBall = styled.div`
    display: inline-block;
    position: relative;
    right: 30px;
    box-shadow:${(pixelProps: IPixelProps) => pixelProps.theme?.pixels.pokeball};
    width:5px;
    height:5px;
    
`;
const LoadingIndicator: FC<ILoadingIndicatorProps> = () => {
    //const {state} = useContext(AppContext);
    //const {pokemon} = state;
    return  <LoadingIndicatorWrapper>
                <Title>Loading</Title>
                <PokeBall />
            </LoadingIndicatorWrapper>
}
export default LoadingIndicator