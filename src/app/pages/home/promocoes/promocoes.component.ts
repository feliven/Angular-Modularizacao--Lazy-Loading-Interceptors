import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';
import { CardBuscaComponent } from 'src/app/shared/card-busca/card-busca.component';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
  imports: [CardBuscaComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(
    private service: PromocaoService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes = res;
      this.cdr.markForCheck();
    });
  }
}
