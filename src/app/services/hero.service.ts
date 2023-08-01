import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../Interfaces/hero.model';

// Services utilizam o conceito de Injeção de dependência
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}
