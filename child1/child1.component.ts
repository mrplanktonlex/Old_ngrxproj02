import { Component, OnInit } from '@angular/core';

//Store is a generic type and requires atleast one arg.
//Store<T> and u need to specify Store<AppState> to create an instance in the constructor

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../counter';
import {Observable} from 'rxjs/Observable';

/*
Y So many "counter" s (initially everything was a counter, then i changed it to countr and cntr wherever
applicable; so that i could understand whats happening)

1. these counters have to be same
  AppState + store: Store<AppState> + StoreModule.provideStore({ countr: counterReducer })

StoreModule.provideStore({ countr: counterReducer }) seems to mean,
  state: its corresponding reducer function

2. child1 html and Child1Component do NOT need "counter". these can be renamed as cntr

*/
interface AppState {
  countr: number; //this is the state signature. it is same for previous state and next state.
  //countr is not written as countr?:name, hence it is MANDATORY for the class to IMPLEMENT it.
}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})


export class Child1Component implements OnInit {
    cntr: Observable<number>; //it has to be an observable
// we are making it an observable, so that we can subscribe to it using store.select('countr')

  	constructor(private store: Store<AppState>){
      console.log (store);
  		this.cntr = store.select('countr');
      console.log(this.cntr);
  	}

  	increment(){
  		this.store.dispatch({ type: INCREMENT });
      //here we are dispatching an action.
      //an action should have "type"; and CAN have (optional) a payload
  	}

  	decrement(){
  		this.store.dispatch({ type: DECREMENT });
  	}

  	reset(){
  		this.store.dispatch({ type: RESET });
  	}

  ngOnInit() {
  }

}
