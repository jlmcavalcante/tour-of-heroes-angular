import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Interfaces/hero.model';
import { HeroService } from '../services/hero-service/hero.service';
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  // 1º fase do ciclo de vida - Injeção de dependências
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  // 2º fase do ciclo de vida - Chamar método para iniciar os valores dos atributos da classe
  ngOnInit(): void {
    this.setHeroes();
  }

  setHeroes(): void {
    // Consumindo Dados do Service
    this.heroService.getHeroes().subscribe(
      (h) => this.heroes = h,  // Next* -> Erro -> Complete
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // Utilizar template Strings ${}
    this.messageService.add(`HeroesComponent: Selected hero id= ${hero.id}`);
  }
}
