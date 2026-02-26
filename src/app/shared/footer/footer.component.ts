import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [ContainerComponent, MatIconModule],
})
export class FooterComponent {}
