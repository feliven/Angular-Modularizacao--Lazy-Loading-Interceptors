import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { ParadasComponent } from './paradas.component';

class FormBuscaServiceStub {
  formBusca = new FormGroup({
    conexoes: new FormControl<number | null>(null),
  });

  obterControle<T>(nome: string): FormControl<T | null> {
    return this.formBusca.get(nome) as FormControl<T | null>;
  }
}

describe('ParadasComponent', () => {
  let component: ParadasComponent;
  let fixture: ComponentFixture<ParadasComponent>;
  let formBuscaService: FormBuscaServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParadasComponent],
      providers: [
        { provide: FormBuscaService, useClass: FormBuscaServiceStub },
      ],
    });

    fixture = TestBed.createComponent(ParadasComponent);
    component = fixture.componentInstance;
    formBuscaService = TestBed.inject(
      FormBuscaService,
    ) as unknown as FormBuscaServiceStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve selecionar uma opção e atualizar o formulário com número de conexões', () => {
    const opcao = component.opcoes[1];

    component.alternarParada(opcao, true);

    expect(component.opcoesSelecionada).toBe(opcao);
    expect(component.paradaSelecionada(opcao)).toBe(true);
    expect(formBuscaService.formBusca.get('conexoes')?.value).toBe(1);
  });

  it('deve limpar seleção e conexões ao desmarcar opção', () => {
    const opcao = component.opcoes[2];

    component.alternarParada(opcao, true);
    component.alternarParada(opcao, false);

    expect(component.opcoesSelecionada).toBeNull();
    expect(component.paradaSelecionada(opcao)).toBe(false);
    expect(formBuscaService.formBusca.get('conexoes')?.value).toBeNull();
  });

  it('deve incluir automaticamente opções inferiores quando uma superior está selecionada', () => {
    component.alternarParada(component.opcoes[2], true);

    expect(component.incluirParada(component.opcoes[0])).toBe(true);
    expect(component.incluirParada(component.opcoes[1])).toBe(true);
    expect(component.incluirParada(component.opcoes[2])).toBe(false);
    expect(component.incluirParada(component.opcoes[3])).toBe(false);
  });

  it('deve resetar a seleção quando o controle conexões receber null', () => {
    component.alternarParada(component.opcoes[3], true);

    formBuscaService.obterControle<number>('conexoes').setValue(null);

    expect(component.opcoesSelecionada).toBeNull();
  });
});
