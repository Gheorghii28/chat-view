import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ChatInputComponent } from '../../shared/components/chat-input/chat-input.component';
import { ChatService } from '../../services';
import { Router, RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-chat-shell',
  imports: [
    MatSidenavModule,
    SidebarComponent,
    ChatInputComponent,
    RouterModule,
  ],
  templateUrl: './chat-shell.component.html',
  styleUrl: './chat-shell.component.scss'
})
export class ChatShellComponent {
  private chatService = inject(ChatService);
  private router = inject(Router);

  async ngOnInit() {
    const chats = await firstValueFrom(this.chatService.getChats());
    if (chats.length > 0) {
      const firstChatId = chats[0].id;
      this.router.navigate(['pages', 'chat', firstChatId]);
    }
  }
}
