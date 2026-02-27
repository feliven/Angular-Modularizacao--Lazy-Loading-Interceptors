import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { LabelComponent } from '../label/label.component';

interface OpcoesDeParada {
  display: string;
  value: string;
}
@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.scss'],
  imports: [LabelComponent, MatCheckboxModule],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParadasComponent implements OnInit {
  opcoesSelecionada: OpcoesDeParada | null = null;
  opcoes: OpcoesDeParada[] = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];
  conexoesControl: FormControl<number | null>;

  constructor(
    private formBuscaService: FormBuscaService,
    private cdr: ChangeDetectorRef,
  ) {
    this.conexoesControl =
      this.formBuscaService.obterControle<number>('conexoes');
  }
  ngOnInit() {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (value === null) {
        this.opcoesSelecionada = null;
        this.cdr.markForCheck();
      }
    });
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionada = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      this.cdr.markForCheck();
      return;
    }
    this.opcoesSelecionada = opcao;
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
    this.cdr.markForCheck();
  }

  paradaSelecionada(opcao: OpcoesDeParada): boolean {
    return this.opcoesSelecionada === opcao;
  }

  incluirParada(opcao: OpcoesDeParada) {
    if (!this.opcoesSelecionada) {
      return false;
    }
    return this.opcoesSelecionada.value > opcao.value;
  }
}
