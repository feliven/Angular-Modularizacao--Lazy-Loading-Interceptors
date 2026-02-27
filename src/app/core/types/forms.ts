import { FormControl } from '@angular/forms';

import { UnidadeFederativa } from './type';

export interface CadastroFormControls {
  nome: FormControl<string | null>;
  nascimento: FormControl<string | null>;
  cpf: FormControl<string | null>;
  cidade: FormControl<string | null>;
  email: FormControl<string | null>;
  senha: FormControl<string | null>;
  genero: FormControl<string | null>;
  telefone: FormControl<string | null>;
  estado: FormControl<UnidadeFederativa | null>;
  confirmarEmail: FormControl<string | null>;
  confirmarSenha: FormControl<string | null>;
  aceitarTermos: FormControl<boolean | null>;
}
