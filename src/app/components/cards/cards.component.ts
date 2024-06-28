import { Component, Input } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [BtnPrimaryComponent,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() name: string | null = '';
  @Input() image: string | null = '';
  @Input() description: string | null = '';
  @Input() unitValue: number | null = 0;
  @Input() loading: boolean = false;
}
