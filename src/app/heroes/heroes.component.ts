import { Component } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  // Atribui um Array de objetos (Importação)
  heroes = HEROES;

  selectedHero: Hero = {id: 0, name: ''};  // Alternativa => selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
