import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { take } from 'rxjs';

import { DadosBusca, Destaques, Passagem } from 'src/app/core/types/type';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { ContainerComponent } from 'src/app/shared/container/container.component';
import { FormBuscaComponent } from 'src/app/shared/form-busca/form-busca.component';
import { FiltrosComplementaresComponent } from 'src/app/shared/form-busca/filtros-complementares/filtros-complementares.component';
import { PassagemDestaqueComponent } from 'src/app/shared/passagem-destaque/passagem-destaque.component';
import { CardComponent } from 'src/app/shared/card/card.component';
import { PassagemComponent } from 'src/app/shared/passagem/passagem.component';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
  imports: [
    BannerComponent,
    ContainerComponent,
    FormBuscaComponent,
    FiltrosComplementaresComponent,
    PassagemDestaqueComponent,
    CardComponent,
    PassagemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques?: Destaques;

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };
    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosBusca()
      : buscaPadrao;
    this.passagensService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe((res) => {
        this.passagens = res.resultado;
        this.cdr.markForCheck();
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
        this.obterDestaques();
      });
  }
  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      this.obterDestaques();
      this.cdr.markForCheck();
    });
  }
  obterDestaques() {
    this.destaques = this.passagensService.obterPassagensDestaques(
      this.passagens,
    );
    this.cdr.markForCheck();
  }
}
