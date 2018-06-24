import { Action } from '@ngrx/store';

export enum MainActionTypes {
  LoadMains = '[Main] Load Mains'
}

export class Main implements Action {
  readonly type = MainActionTypes.LoadMains;
}

export type MainActions = LoadMains;
