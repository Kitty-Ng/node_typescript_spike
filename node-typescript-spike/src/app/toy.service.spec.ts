import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Toy } from './toy';
import { TOYS } from './mock-toys';
import { MessageService } from './message.service';

@Injectable()
export class ToyService {

 constructor(private messageService: MessageService) { }

 getToys(): Observable<Hero[]> {
   // Todo: send the message _after_ fetching the toys
   this.messageService.add('ToyService: fetched toys');
   return of(TOYS);
 }
}