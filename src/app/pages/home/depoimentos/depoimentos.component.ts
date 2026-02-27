// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal, inject, OnInit } from '@angular/core';
import { Component, signal, inject, OnInit } from '@angular/core';
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
export class DepoimentosComponent implements OnInit {
  private service = inject(DepoimentoService);

  depoimentos = signal<Depoimento[]>([]);
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos.set(res);
      // this.cdr.markForCheck();
    });
  }
}
