import { Component, input } from '@angular/core';
import { Promocao } from 'src/app/core/types/type';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
  imports: [MatCardModule, MatButtonModule],
})
export class CardBuscaComponent {
  readonly promocao = input.required<Promocao>();
}
