import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/type';
import { CardDepoimentoComponent } from 'src/app/shared/card-depoimento/card-depoimento.component';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
  imports: [CardDepoimentoComponent],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DepoimentosComponent {
  depoimentos = signal<Depoimento[]>([]);
  constructor(private service: DepoimentoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos.set(res);
    });
  }
}
