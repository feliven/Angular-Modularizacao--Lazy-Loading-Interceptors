import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss'],
  imports: [CurrencyPipe, DatePipe, MatCardModule],
})
export class PassagemComponent {
  readonly passagem = input.required<Passagem>();
  get textoIdaVolta() {
    const passagem = this.passagem();
    if (!passagem.dataVolta) {
      return 'Somente ida';
    }
    return 'Ida e volta';
  }
}
