import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  input,
  inject,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

import { FormularioService } from 'src/app/core/services/formulario.service';
import { CadastroFormControls } from 'src/app/core/types/forms';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidations } from '../form-validations';
import { ContainerComponent } from '../container/container.component';
import { DropdownUfComponent } from '../dropdown-uf/dropdown-uf.component';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ContainerComponent,
    DropdownUfComponent,
  ],
  providers: [provideNativeDateAdapter()],
})
export class FormBaseComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private formularioService = inject(FormularioService);

  cadastroForm!: FormGroup<CadastroFormControls>;
  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required,
  );

  readonly perfilComponent = input<boolean>(false);
  readonly titulo = input<string>('Crie sua conta');
  readonly textoBotao = input<string>('CADASTRAR');
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() sair: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group<CadastroFormControls>({
      nome: new FormControl<string | null>(null, Validators.required),
      nascimento: new FormControl<string | null>(null, [Validators.required]),
      cpf: new FormControl<string | null>(null, [Validators.required]),
      cidade: new FormControl<string | null>(null, Validators.required),
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      genero: new FormControl<string | null>('outro'),
      telefone: new FormControl<string | null>(null, Validators.required),
      estado: this.estadoControl,
      confirmarEmail: new FormControl<string | null>(null, [
        Validators.required,
        Validators.email,
        FormValidations.equalTo('email'),
      ]),
      confirmarSenha: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(3),
        FormValidations.equalTo('senha'),
      ]),
      aceitarTermos: new FormControl<boolean | null>(false, [
        Validators.requiredTrue,
      ]),
    });

    if (this.perfilComponent()) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators([Validators.requiredTrue]);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  deslogar() {
    this.sair.emit();
  }
}
