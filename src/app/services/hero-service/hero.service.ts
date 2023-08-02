import { Injectable } from '@angular/core';
import { HEROES } from '../../mocks/mock-heroes';
import { Hero } from '../../Interfaces/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';

// Services utilizam o conceito de Injeção de dependência
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Injetando um servise dentro de um service
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);  // Criando um observable
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }
}
