import { Component, forwardRef, input } from '@angular/core';
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
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  readonly titulo = input<string>('');
  readonly subtitulo = input<string>('');

  value = 0;
  disabled = false;
  onChange: (val: number) => void = () => undefined;
  onTouch: () => void = () => undefined;

  writeValue(val: number | null): void {
    this.value = val ?? 0;
  }
  registerOnChange(fn: (val: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  incrementar() {
    if (this.disabled) {
      return;
    }
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.disabled) {
      return;
    }
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
