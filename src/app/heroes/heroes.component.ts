import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Interfaces/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  // 1º fase do ciclo de vida - Injeção do heroService
  constructor(private heroService: HeroService) {}

  // 2º fase do ciclo de vida - Chamar método para iniciar os valores dos atributos da classe
  ngOnInit(): void {
    this.setHeroes();
  }

  setHeroes(): void {
    // Consumindo Dados do Service
    this.heroService.getHeroes().subscribe((heroesFromService) => this.heroes = heroesFromService);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
