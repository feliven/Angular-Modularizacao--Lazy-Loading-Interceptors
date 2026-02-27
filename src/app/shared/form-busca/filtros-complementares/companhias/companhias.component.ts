import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
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
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompanhiasComponent implements OnInit {
  companhias: Companhia[] = [];
  selecionadas: Companhia[] = [];

  companhiasControl: FormControl<number[] | null>;

  constructor(
    private companhiaService: CompanhiaService,
    private formBuscaService: FormBuscaService,
    private cdr: ChangeDetectorRef,
  ) {
    this.companhiasControl = this.formBuscaService.obterControle<
      number[] | null
    >('companhias');
  }
  ngOnInit(): void {
    this.companhiaService.listar().subscribe((res) => {
      this.companhias = res;
      this.cdr.markForCheck();
    });
    this.companhiasControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.selecionadas = [];
        this.cdr.markForCheck();
      }
    });
  }

  alternarCompanhia(companhia: Companhia, checked: boolean): void {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter((comp) => comp != companhia);
    } else {
      this.selecionadas.push(companhia);
    }
    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map((comp) => Number(comp.id)),
    });
    this.cdr.markForCheck();
  }
  companhiaSelecionada(companhia: Companhia): boolean {
    return this.selecionadas.includes(companhia);
  }
}
