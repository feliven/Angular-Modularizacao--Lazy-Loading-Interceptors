import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroRoutingModule } from './erro-routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ErroRoutingModule, PaginaNaoEncontradaComponent],
})
export class ErroModule {}
