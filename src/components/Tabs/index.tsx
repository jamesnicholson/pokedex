import { FC, useState, useContext} from 'react'
import styled from 'styled-components'
import FavoriteList from '../FavoriteList'
import NameList from '../NameList'
import AppContext from '../../store/context'
interface ITabsProps {
}
interface IStyleTabContainerProps {
  active: boolean;
}
interface IStyleTabButtonsProps {
  active: boolean;
  id:string;
}

const TabWrapper = styled.div`
  background: #000;
  text-align: center;
  margin: 5px;
  width: auto;
  min-height: 500px;
  max-height: 600px;
  overflow: scroll;
  box-shadow: 0px 10px 0px 0px #000;
`;
const TabNameWrapper = styled.div`
  width:100%;
  display: ${(props: IStyleTabContainerProps) => props.active  ? "show" : "none"};
`;
const TabFavoriteWrapper = styled.div`
  width:100%;
  display: ${(props: IStyleTabContainerProps) => props.active  ? "show" : "none"};
`;
const TabButtonWrapper = styled.div`
  width:100%;
  display: flex;
`;
const TabButton = styled.div`
  background: ${(props: IStyleTabButtonsProps) => props.active  ? "#000" : "#fff"};
  color: ${(props: IStyleTabButtonsProps) => props.active  ? "#fff" : "#000"};
  font-size: 0.8em;
  width: 100%;
  text-align: center;
  padding:25px 15px;
  cursor: pointer;
`;

const Tabs: FC<ITabsProps> = () => {
  const {state} = useContext(AppContext);
  const [active, setActive] = useState(0);
  const handleClick = (e: any) => {
    const index = parseInt(e.target.id);
    if (index !== active) {
      setActive(index);
    }
  }
  return  <TabWrapper>
            <TabButtonWrapper>
              <TabButton onClick={handleClick} active={active === 0} id={"0"}>All</TabButton>
              <TabButton onClick={handleClick} active={active === 1} id={"1"}>My Pokédex{state.favorites.length  === 0 ? "" : ` (${state.favorites.length})` }</TabButton>
            </TabButtonWrapper>
            <TabNameWrapper active={active === 0}> <NameList /> </TabNameWrapper>
            <TabFavoriteWrapper active={active === 1}> <FavoriteList /> </TabFavoriteWrapper>
          </TabWrapper>
}
export default Tabs