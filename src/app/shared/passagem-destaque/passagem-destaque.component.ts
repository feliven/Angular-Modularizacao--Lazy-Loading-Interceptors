import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-passagem-destaque',
  templateUrl: './passagem-destaque.component.html',
  styleUrls: ['./passagem-destaque.component.scss'],
  imports: [CurrencyPipe],
})
export class PassagemDestaqueComponent {
  readonly destacadaPor = input<string>('');
  readonly passagem = input<Passagem | undefined>();
  readonly variant = input<'primary' | 'secondary' | 'default'>('primary');
}
