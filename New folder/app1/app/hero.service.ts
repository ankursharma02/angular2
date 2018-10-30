import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import{HEROES} from './Mock-hero';
import{MessageService} from './message.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {

  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
  }
  
  
}
