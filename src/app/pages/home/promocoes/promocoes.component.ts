import { Component, OnInit, signal, inject } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';
import { CardBuscaComponent } from 'src/app/shared/card-busca/card-busca.component';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
  imports: [CardBuscaComponent],
})
export class PromocoesComponent implements OnInit {
  private service = inject(PromocaoService);

  promocoes = signal<Promocao[]>([]);

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes.set(res);
    });
  }
}
