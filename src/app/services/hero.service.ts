import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../Interfaces/hero.model';
import { Observable, of } from 'rxjs';

// Services utilizam o conceito de Injeção de dependência
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);  // Criando um observable

    return heroes;
  }
}
