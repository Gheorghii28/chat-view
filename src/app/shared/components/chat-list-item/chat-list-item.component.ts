import { Component, inject, Input } from '@angular/core';
import { Chat, ChatMessage, ChatParticipant } from '../../../models';
import { MatIconModule } from '@angular/material/icon';
import { ChatService, UserService } from '../../../services';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { Router } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-chat-list-item',
  imports: [MatIconModule, CommonModule, MatDividerModule, UserAvatarComponent, MatBadgeModule],
  templateUrl: './chat-list-item.component.html',
  styleUrl: './chat-list-item.component.scss'
})
export class ChatListItemComponent {
  private userService = inject(UserService);
  private chatService = inject(ChatService);
  private utilsService = inject(UtilsService);
  private router = inject(Router);

  @Input() chat!: Chat;

  get currentChat(): Chat {
    return this.chatService.currentChat() as Chat;
  }

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  openChat(): void {
    this.router.navigate(['pages', 'chat', this.chat.id]);
    this.chatService.currentChat.set(this.chat);
  }

  getCurrentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  getChatPartner(chat: Chat, currentUserId: string): ChatParticipant | undefined {
    return chat?.participants.find(p => p.id !== currentUserId);
  }

  getLastMessage(chat: Chat): ChatMessage | undefined {
    return this.utilsService.getLastMessage(chat);
  }

  getChatStyle(chat: Chat): { [klass: string]: string } {
    return this.utilsService.getChatStyle(chat, this.currentChat);
  }

  getLastMessageTimestamp(chat: Chat): string {
    return this.utilsService.getLastMessageTimestamp(chat);
  }

  getUnreadCount(chat: Chat): number {
    return this.utilsService.getUnreadCount(chat, this.currentUser);
  }
}
