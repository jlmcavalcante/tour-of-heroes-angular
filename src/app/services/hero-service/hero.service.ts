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

  // Injeção de dependências entre serviços
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // Criando um observable utilizando o "of"
    const heroes = of(HEROES);

    // Mensagem que será exibida no template quando o método for ativado
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }
}
