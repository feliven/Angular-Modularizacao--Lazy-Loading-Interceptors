import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Companhia } from 'src/app/core/types/type';
import { CompanhiaService } from 'src/app/core/services/companhia.service';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { LabelComponent } from '../label/label.component';

import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss'],
  imports: [LabelComponent, MatCheckboxModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanhiasComponent implements OnInit {
  private companhiaService = inject(CompanhiaService);
  private formBuscaService = inject(FormBuscaService);

  companhias: Companhia[] = [];
  selecionadas: Companhia[] = [];

  companhiasControl: FormControl<number[] | null>;

  constructor() {
    this.companhiasControl = this.formBuscaService.obterControle<
      number[] | null
    >('companhias');
    // this.cdr.markForCheck();
  }
  ngOnInit(): void {
    this.companhiaService.listar().subscribe((res) => {
      this.companhias = res;
      // this.cdr.markForCheck();
    });
    this.companhiasControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.selecionadas = [];
        // this.cdr.markForCheck();
      }
    });
  }

  alternarCompanhia(companhia: Companhia, checked: boolean): void {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter((comp) => comp != companhia);
      // this.cdr.markForCheck();
    } else {
      this.selecionadas.push(companhia);
    }
    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map((comp) => Number(comp.id)),
    });
  }
  companhiaSelecionada(companhia: Companhia): boolean {
    return this.selecionadas.includes(companhia);
  }
}
