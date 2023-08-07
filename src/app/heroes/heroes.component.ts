import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Interfaces/hero.model';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name']


  // 1º fase do ciclo de vida - Injeção de dependências
  constructor(private heroService: HeroService) {}

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
}
