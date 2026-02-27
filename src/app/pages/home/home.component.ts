import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { ContainerComponent } from 'src/app/shared/container/container.component';
import { FormBuscaComponent } from 'src/app/shared/form-busca/form-busca.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    BannerComponent,
    ContainerComponent,
    FormBuscaComponent,
    PromocoesComponent,
    DepoimentosComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private servicoPromocao = inject(PromocaoService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((resposta) => {
      console.log(resposta);
      // this.cdr.markForCheck();
    });
  }
  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
