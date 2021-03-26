import Pokemon from './models/pokemon'
import {ActionType} from './enums'
export interface IAction {
  type: ActionType;
  payload: any;
}
export default interface IState {
  favoritePokemon: Array<Pokemon> | null;
  loading: boolean
}

export interface APIResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<APIResponseItem>;
}

export interface APIResponseItem {
  name: string;
  url: string;
}