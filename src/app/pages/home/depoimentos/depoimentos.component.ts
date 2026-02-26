import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
} from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/type';
import { CardDepoimentoComponent } from 'src/app/shared/card-depoimento/card-depoimento.component';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
  imports: [CardDepoimentoComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepoimentosComponent {
  depoimentos = signal<Depoimento[]>([]);

  constructor(
    private service: DepoimentoService,
    // private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos.set(res);
      // this.cdr.markForCheck();
    });
  }
}
