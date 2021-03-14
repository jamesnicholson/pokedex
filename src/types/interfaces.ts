import Pokemon from './models/pokemon'

export interface IAction {
  type: string
  payload: any
}
export default interface IState {
    pokemon: Array<Pokemon> | null;
  }
