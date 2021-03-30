import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'

interface ILoadingIndicatorProps {
} 
export const Name = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const LoadingIndicatorWrapper = styled.div`
    background: #00bcd433;
    text-align: center;
    margin: 5px;
    width: auto;
    min-width: 130px;
`;

const LoadingIndicator: FC<ILoadingIndicatorProps> = () => {
    const {state} = useContext(AppContext);
    const {pokemon} = state;
    return  <LoadingIndicatorWrapper>
                Loading
            </LoadingIndicatorWrapper>
}
export default LoadingIndicator