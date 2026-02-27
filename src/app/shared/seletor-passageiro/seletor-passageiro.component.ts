import {
  Component,
  forwardRef,
  input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true,
    },
  ],
  imports: [BotaoControleComponent],
  // TODO: This component has been partially migrated to be zoneless-compatible.
  // After testing, this should be updated to ChangeDetectionStrategy.OnPush.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  readonly titulo = input<string>('');
  readonly subtitulo = input<string>('');

  value: number = 0;
  onChange = (val: number) => {};
  onTouch = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(val: any): void {
    this.value = val;
    this.cdr.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
    this.cdr.markForCheck();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
      this.cdr.markForCheck();
    }
  }
}
