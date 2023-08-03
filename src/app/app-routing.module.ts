import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';



const routes: Routes = [
  // Caminho + Página que será exibida
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
