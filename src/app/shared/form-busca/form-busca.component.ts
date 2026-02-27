import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DadosBusca } from 'src/app/core/types/type';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { CardComponent } from '../card/card.component';
import { DropdownUfComponent } from '../dropdown-uf/dropdown-uf.component';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
  imports: [
    ReactiveFormsModule,
    CardComponent,
    DropdownUfComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormBuscaComponent {
  realizarBusca = output<DadosBusca>();
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscavalue = this.formBuscaService.obterDadosBusca();
      this.realizarBusca.emit(formBuscavalue);
    } else {
      alert('O formulário precisa ser preenchido');
    }
  }
}
