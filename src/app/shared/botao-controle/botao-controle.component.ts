import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
  imports: [MatButtonModule, NgClass],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BotaoControleComponent {
  readonly operacao = input<'incrementar' | 'decrementar'>('incrementar');
  readonly src = input<string>('');
  readonly alt = input<string>('');
}
