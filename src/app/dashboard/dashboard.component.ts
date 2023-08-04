import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service/hero.service';
import { Hero } from '../Interfaces/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroesFromService) => this.heroes = heroesFromService.slice(1, 5));
  }
}
