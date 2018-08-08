import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.state';

interface AppState{
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public contador: number;

  constructor(private store: Store<AppState>){
    this.store.subscribe( state => {
      if(typeof(state.contador) != 'undefined'){
        this.contador = state.contador;
      }
    })
  }

  incrementar(){
    const action = new IncrementarAction();
    this.store.dispatch( action );
  }

  decrementar(){
    const action = new DecrementarAction();
    this.store.dispatch( action );
  }

}
