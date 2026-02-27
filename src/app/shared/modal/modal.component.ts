import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { SeletorPassageiroComponent } from '../seletor-passageiro/seletor-passageiro.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
    ReactiveFormsModule,
    SeletorPassageiroComponent,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ModalComponent {
  constructor(public formBuscaService: FormBuscaService) {}
}
