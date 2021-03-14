import Pokemon from './models/pokemon'

export interface IAction {
  type: string
  payload: any
}
export default interface IState {
  pokemon: Array<Pokemon> | null;
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