import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CadastroFormControls } from 'src/app/core/types/forms';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  cadastroForm: FormGroup<CadastroFormControls> | null = null;

  getCadastro(): FormGroup<CadastroFormControls> | null {
    return this.cadastroForm;
  }

  setCadastro(form: FormGroup<CadastroFormControls>) {
    this.cadastroForm = form;
  }
}
