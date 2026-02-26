import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
  imports: [CommonModule, MatButtonModule],
})
export class BotaoControleComponent {
  readonly operacao = input<'incrementar' | 'decrementar'>('incrementar');
  readonly src = input<string>('');
  readonly alt = input<string>('');
}
