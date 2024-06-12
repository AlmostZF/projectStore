import { Component, Input, input } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() unitValue: number = 0;
}
