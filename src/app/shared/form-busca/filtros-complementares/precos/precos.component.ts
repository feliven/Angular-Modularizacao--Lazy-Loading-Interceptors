import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss'],
  imports: [ReactiveFormsModule, CurrencyPipe, LabelComponent, MatSliderModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrecosComponent implements OnInit {
  passagemService = inject(PassagensService);
  private formBuscaService = inject(FormBuscaService);
  private cdr = inject(ChangeDetectorRef);

  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor() {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }

  ngOnInit(): void {
    this.precoMin.valueChanges.subscribe(() => this.cdr.markForCheck());
    this.precoMax.valueChanges.subscribe(() => this.cdr.markForCheck());
  }
}
