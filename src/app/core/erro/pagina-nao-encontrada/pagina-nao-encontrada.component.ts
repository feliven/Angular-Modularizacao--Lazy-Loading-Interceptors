import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'app-pagina-nao-encontrada',
  imports: [RouterModule, BannerComponent, ContainerComponent],
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrl: './pagina-nao-encontrada.component.scss',
})
export class PaginaNaoEncontradaComponent {}
