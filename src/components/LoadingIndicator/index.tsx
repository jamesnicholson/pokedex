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
interface IAnimateProps {
    theme?:{
        animate:any
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
    top: 200px;
    right: 30px;
    box-shadow:${(pixelProps: IPixelProps) => pixelProps.theme?.pixels.pokeball};
    width:5px;
    height:5px;
    transform-origin: 50% 50%;
    animation: ${(animateProps: IAnimateProps) => {return animateProps.theme?.animate}} 2.72s ease infinite;
`;
const LoadingIndicator: FC<ILoadingIndicatorProps> = () => {
    return  <LoadingIndicatorWrapper>
                <PokeBall />
            </LoadingIndicatorWrapper>
}
export default LoadingIndicator