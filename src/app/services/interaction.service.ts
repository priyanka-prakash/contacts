import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  /** naming convention : a subject property must append a word 'source' */
  private _teacherMessageSource = new Subject<string>();

  /** * expose subject as an observable | Delaring observable- append dollar sign */
  teacherMessage$ = this._teacherMessageSource.asObservable();  

  /** get message from teacher and pushes that message using observable*/
  sendMessage(message:string){
    this._teacherMessageSource.next(message);
  }









}
