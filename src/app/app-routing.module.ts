import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';



const routes: Routes = [
  // URL + Página que será exibida
  {path: 'heroes', component: HeroesComponent},

]

@NgModule({
  // Iniciar minha aplicação disponibilizando o routes
  imports: [RouterModule.forRoot(routes)],

  // Todo módulo importado (no app.module) precisa entregar (exportar) algo*
  exports: [RouterModule]
})
export class AppRoutingModule { }
