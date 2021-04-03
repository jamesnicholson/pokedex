import {FC, useContext, useState} from 'react';
import styled from 'styled-components';
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon'
import { getLeadingCommentRanges } from 'typescript';

interface IMobileFavoritesProps {

}
interface IPixelProps {
  theme?:{
      pixels:{
          pokeball:string;
          heart:string;
      }
  }
}
const MobileFavoritesWrapper = styled.div`
    display: block;
    position: relative;
    top: -8px;
    right: 20px;
`;
const Pokeball = styled.div`
  box-shadow:${(pixelProps: IPixelProps) => pixelProps.theme?.pixels.pokeball};
  width:5px;
  height:5px;
`;

const Heart = styled.div`
  box-shadow:${(pixelProps: IPixelProps) => pixelProps.theme?.pixels.heart};
  width:5px;
  height:5px;
`;
const HeartWrapper = styled.div`
  position: relative;
  top: 65px;
`
const CountWrapper = styled.div`
  position: relative;
  left: 35px;
  top: 0px;
`
const MobileFavorites: FC<IMobileFavoritesProps> = () => {
  const {state, dispatch} = useContext(AppContext);
  const {favorites} = state;
  return  <MobileFavoritesWrapper>
               <Pokeball />
               {favorites.length  === 0 ? "" : <HeartWrapper>
                                                  <Heart />
                                                  <CountWrapper>({favorites.length})</CountWrapper>
                                                </HeartWrapper> }
          </MobileFavoritesWrapper> 
}
export default MobileFavorites;
