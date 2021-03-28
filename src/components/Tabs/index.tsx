import { FC, useContext, useState} from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import FavoriteList from '../FavoriteList'
import NameList from '../NameList'

interface ITabsProps {

}
interface styleTabContainerProps {
    currentTab: string;
}
  
export const Name = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const NameListWrapper = styled.div`
    background: #00bcd433;
    text-align: center;
    margin: 5px;
    width: auto;
    min-width: 130px;
`;
export const TabNameWrapper = styled.div`
  width:100%;
  display: ${(props: styleTabContainerProps) => props.currentTab === "all" ? "show" : "none"};
`;
export const TabFavoriteWrapper = styled.div`
  width:100%;
  display: ${(props: styleTabContainerProps) => props.currentTab === "my" ? "show" : "none"};
`;
export const TabButtonWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
`;
export const TabButton = styled.div`
  font-size:13px;
  width:100%;
  text-align:center;
`;

const Tabs: FC<ITabsProps> = () => {

    const [toggleList, setToggleList] = useState("all");
    const {state, dispatch} = useContext(AppContext);
    const {pokemon} = state;
    const handler = (tab: string) => {
        setToggleList(tab);
      }
    
    return  <NameListWrapper>

                <TabButtonWrapper>
                    <TabButton onClick={()=>handler("all")}>All pokemon</TabButton>
                    <TabButton onClick={()=>handler("my")}>My Pokemon{state.favorites.length  === 0 ? "" : ` (${state.favorites.length})` }</TabButton>
                </TabButtonWrapper>
                
                <TabNameWrapper currentTab={toggleList}> <NameList /> </TabNameWrapper>
                <TabFavoriteWrapper currentTab={toggleList}> <FavoriteList /> </TabFavoriteWrapper>
            </NameListWrapper>

}
export default Tabs