import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-icon-circle-button',
  imports: [CommonModule, MatIcon],
  templateUrl: './icon-circle-button.component.html',
  styleUrl: './icon-circle-button.component.scss'
})
export class IconCircleButtonComponent {
  @Input() icon: string = 'delete';
  @Input() tooltip: string = '';
  @Input() iconColor: string = '#fff';
  @Input() backgroundColor: string = 'transparent';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
