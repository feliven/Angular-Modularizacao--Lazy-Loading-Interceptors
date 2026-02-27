import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';
import { CardBuscaComponent } from 'src/app/shared/card-busca/card-busca.component';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
  imports: [CardBuscaComponent],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PromocoesComponent implements OnInit {
  promocoes = signal<Promocao[]>([]);
  constructor(private service: PromocaoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes.set(res);
    });
  }
}
