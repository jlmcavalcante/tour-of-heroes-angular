import { Component, OnInit } from "@angular/core";
import { HeroService } from "../services/hero-service/hero.service";
// Classe para trabalhar com rotas e gerenciamento de histórico de navegação
import { Location } from "@angular/common";
// Classe para obter informações sobre a rota ativa e seus parâmetros
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../Interfaces/hero.model";

// 02 - Decorator - Informa ao angular que esta classe tem a função de componente.
@Component({
  // app-nome (prefixo padrão - Angular json).
  selector: 'app-hero-detail',
  // Conexão com o template.
  templateUrl: './hero-detail.component.html',
  // Conexão com as folhas de estilo do componente.
  styleUrls: ['./hero-detail.component.scss']
})
// 01 - Classe que armazena a lógica do componente.
export class HeroDetailComponent implements OnInit{
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private  location: Location,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
      this.getHero()
  }

  getHero(): void {
    // Captura o id que está presente na URL (rota ativa) e transformando em Number
    // paramMap é um observable => acessa valores dos parâmetros individuais de forma reativa
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Recebendo os dados vindos do service
    this.heroService.getHero(id).subscribe(heroFromService => this.hero = heroFromService);

  }

  goBack(): void {
    // Navega para a página anterior no histórico de navegação.
    this.location.back();
  }
}

// *Todo component precisa estar registrado em algum módulo (app.module.ts - nesse caso).
