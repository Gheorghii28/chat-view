import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-chat-input',
  imports: [FormsModule, MatIcon],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent {
  message: string = '';

  sendMessage(): void {
    if (this.message.trim()) {
      console.log('Sende Nachricht:', this.message);
      this.message = '';
    }
  }
}
