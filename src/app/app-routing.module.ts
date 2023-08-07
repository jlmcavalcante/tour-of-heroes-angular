import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



const routes: Routes = [
  // Caminho + Página que será exibida
  // '' corresponde a rota raiz, quando nenhum caminho é adicionado
  /* pathMatch:
                determina como o Angular deve fazer a correspondência
                entre a URL do navegador e o caminho especificado na
                propriedade "path" de cada rota.

                Prefix: considera apenas o início da URL.
                full: a rota será correspondida apenas se a URL COMPLETA for igual ao valor definido em path.
  */
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  // :id = Marcador para indicar valor variável
  {path: 'heroes/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},

]

// Informar que essa clase se comporta como um módulo
@NgModule({
  // Iniciar minha aplicação disponibilizando as rotas criadas
  imports: [RouterModule.forRoot(routes)],

  // Fornecer o RouterModule ao módulo principal - que está importando este módulo de Rotas -.
  exports: [RouterModule]
})
export class AppRoutingModule { }
