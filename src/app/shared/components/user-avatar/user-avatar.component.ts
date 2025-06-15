import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent {
  @Input() imageUrl!: string;
  @Input() status?: 'online' | 'offline' | 'away' = 'offline'; 
  @Input() clickable: boolean = true;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (this.clickable) {
      this.clicked.emit();
    }
  }
}
