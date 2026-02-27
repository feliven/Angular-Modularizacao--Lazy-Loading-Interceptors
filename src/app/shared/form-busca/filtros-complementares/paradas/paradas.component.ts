// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParadasComponent implements OnInit {
  private formBuscaService = inject(FormBuscaService);

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

  constructor() {
    this.conexoesControl =
      this.formBuscaService.obterControle<number>('conexoes');
  }
  ngOnInit() {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (value === null) {
        this.opcoesSelecionada = null;
        // this.cdr.markForCheck();
      }
    });
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionada = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      return;
    }
    this.opcoesSelecionada = opcao;
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
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
