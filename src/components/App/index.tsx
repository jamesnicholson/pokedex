import {useEffect, useContext, useState} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon'
import {setPokemon, setLoading, setFavorties, setFontLoaded} from '../../store/actions'
import Tabs from '../Tabs'
import SpeciesTypeFilters from '../SpeciesTypeFilters'
import PokeList from '../PokeList'
import SearchBar from '../SearchBar'
import LoadingIndicator from '../LoadingIndicator'
import MobileFavorites from '../MobileFavorites'
import WebFont from 'webfontloader';

interface IStyleShowMenuProps {
  showMenu: boolean;
}
const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;
const AppWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  color: ${props => props.theme.colors.main};
`;
const TitleWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: 900px) {
    max-width: 100%;
    justify-content: space-between;
    align-content: normal;
    flex-direction: revert;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 230px;
  @media (max-width: 900px) {
    display: ${(props: IStyleShowMenuProps) => props.showMenu  ? "show" : "none"};
    flex: auto;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  padding: 6px;
  color: ${props => props.theme.colors.main};
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const FilterSearchWrapper = styled.div`
  width:100%;
  color: ${props => props.theme.colors.main};
`;
 const MobileFavoritesWrapper = styled.div`
  width:80px;
  height:80px;
  padding: 10px;
  display:none;
  @media (max-width: 900px) {
    display:block;
  }
`;

const App = (): JSX.Element => {
  const [showMenu, setShowMenu]  = useState(false)
  const {state, dispatch} = useContext(AppContext);
  const {loading, fontLoaded} = state

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Press Start 2P', 'sans-serif']
      },
      fontactive: function() {
        dispatch(setFontLoaded(true))
      }
    });
  }, [WebFont])

  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => {
      dispatch(setPokemon(data))
      dispatch(setFavorties(data.filter((pokemon: Pokemon) => pokemon.isFavorite)))
    }).finally(() => dispatch(setLoading(false)));
  },[dispatch]);
  
  return  <>
            { loading || fontLoaded === false ? <LoadingIndicator /> : null}
            <HeaderWrapper>
              <TitleWrapper>
                  <Title>Hello Pokédex</Title>
                  <MobileFavoritesWrapper>
                    <MobileFavorites />
                  </MobileFavoritesWrapper>
              </TitleWrapper>
              <FilterSearchWrapper>
                <SearchBar />
                <SpeciesTypeFilters />
              </FilterSearchWrapper>
            </HeaderWrapper>
            <AppWrapper>
              <ListWrapper showMenu={false}>
                <Tabs />
              </ListWrapper>
              <PokeList showMenu={false} />
            </AppWrapper>
          </> 
}
export default App;
