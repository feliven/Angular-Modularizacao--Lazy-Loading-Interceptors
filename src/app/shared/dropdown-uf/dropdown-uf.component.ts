import { ChangeDetectionStrategy, Component, OnInit, input, signal, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UnidadeFederativa } from 'src/app/core/types/type';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownUfComponent implements OnInit {
  private unidadeFederativaService = inject(UnidadeFederativaService);

  readonly label = input<string>('');
  readonly iconePrefixo = input<string>('');
  readonly control = input.required<FormControl>();
  readonly placeholder = input<string>('');

  unidadesFederativas = signal<UnidadeFederativa[]>([]);

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas.set(dados); // Updating a signal automatically notifies Angular
    });
    this.filteredOptions$ = this.control().valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value)),
    );
    // this.cdr.markForCheck();
  }

  filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas().filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado ?? ''),
    );
    return result;
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
