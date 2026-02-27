// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal, inject } from '@angular/core';
import { Component, OnInit, signal, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { CadastroFormControls } from 'src/app/core/types/forms';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { FormBaseComponent } from 'src/app/shared/form-base/form-base.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [BannerComponent, FormBaseComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilComponent implements OnInit {
  private cadastroService = inject(CadastroService);
  private tokenService = inject(TokenService);
  private formularioService = inject(FormularioService);
  private userService = inject(UserService);
  private router = inject(Router);
  // private cdr = inject(ChangeDetectorRef);

  titulo = 'Olá, ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  cadastro = signal<PessoaUsuaria | null>(null);
  form!: FormGroup<CadastroFormControls> | null;
  token = '';
  nome = signal<string>('');

  ngOnInit() {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe((cadastro) => {
      this.cadastro.set(cadastro);
      this.nome.set(cadastro.nome);
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro()?.nome,
      nascimento: this.cadastro()?.nascimento,
      cpf: this.cadastro()?.cpf,
      cidade: this.cadastro()?.cidade,
      email: this.cadastro()?.email,
      senha: this.cadastro()?.senha,
      genero: this.cadastro()?.genero,
      telefone: this.cadastro()?.telefone,
      estado: this.cadastro()?.estado,
    });
  }

  atualizar() {
    const valorForm = this.form?.getRawValue();
    if (!valorForm) return;

    const dadosAtualizados: Partial<PessoaUsuaria> = {
      nome: valorForm.nome ?? undefined,
      nascimento: valorForm.nascimento ?? undefined,
      cpf: valorForm.cpf ?? undefined,
      telefone: valorForm.telefone ?? undefined,
      email: valorForm.email ?? undefined,
      senha: valorForm.senha ?? undefined,
      genero: valorForm.genero ?? undefined,
      cidade: valorForm.cidade ?? undefined,
      estado: valorForm.estado ?? undefined,
    };

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
