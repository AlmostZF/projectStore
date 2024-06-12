import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {

  @Input() label: string = 'Button';
  @Input() hasIcon: boolean = false;
  @Input() icon: string = '../../../assets/icons/bag.svg';
  @Input() alt: string = 'Card Icon';
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  actionButton() {
    this.action.emit();
  }
}
