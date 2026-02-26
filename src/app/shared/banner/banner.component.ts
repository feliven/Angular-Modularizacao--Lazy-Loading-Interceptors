import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  readonly src = input<string>('');
  readonly alt = input<string>('');
}
