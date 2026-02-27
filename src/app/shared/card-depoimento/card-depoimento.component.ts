import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Depoimento } from 'src/app/core/types/type';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
  imports: [MatCardModule],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardDepoimentoComponent {
  readonly depoimento = input.required<Depoimento>();
}
