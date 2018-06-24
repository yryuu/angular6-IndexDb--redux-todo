import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class MainEffects {

  constructor(private actions$: Actions) {}
}
