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
export const TabWrapper = styled.div`
  background: #00bcd433;
  text-align: center;
  margin: 5px;
  width: auto;
  min-height: 500px;
  max-height: 600px;
  overflow: scroll;
`;
export const TabNameWrapper = styled.div`
  width:100%;
  display: ${(props: styleTabContainerProps) => props.currentTab === "allPokemon" ? "show" : "none"};
`;
export const TabFavoriteWrapper = styled.div`
  width:100%;
  display: ${(props: styleTabContainerProps) => props.currentTab === "myFavorites" ? "show" : "none"};
`;
export const TabButtonWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
`;
export const TabButton = styled.div`
  font-size: 0.8em;
  width: 100%;
  text-align: center;
  padding: 5px;
`;

const Tabs: FC<ITabsProps> = () => {

  const [toggleList, setToggleList] = useState("allPokemon");
  const {state} = useContext(AppContext);
  const handler = (tab: string) => {
      setToggleList(tab);
    }
  
  return  <TabWrapper>
            <TabButtonWrapper>
              <TabButton onClick={()=>handler("allPokemon")}>All</TabButton>
              <TabButton onClick={()=>handler("myFavorites")}>My Pokédex{state.favorites.length  === 0 ? "" : ` (${state.favorites.length})` }</TabButton>
            </TabButtonWrapper>
            <TabNameWrapper currentTab={toggleList}> <NameList /> </TabNameWrapper>
            <TabFavoriteWrapper currentTab={toggleList}> <FavoriteList /> </TabFavoriteWrapper>
          </TabWrapper>
}
export default Tabs