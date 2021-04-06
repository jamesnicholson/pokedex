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
                <PokeBall />
            </LoadingIndicatorWrapper>
}
export default LoadingIndicator