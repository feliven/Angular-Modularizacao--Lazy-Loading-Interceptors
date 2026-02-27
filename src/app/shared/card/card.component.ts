import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgClass],
})
export class CardComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
}
