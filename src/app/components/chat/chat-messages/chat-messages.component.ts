import { Component, EventEmitter, inject, Input, Output, Signal } from '@angular/core';
import { UserAvatarComponent } from '../../../shared/components/user-avatar/user-avatar.component';
import { Chat, ChatMessage, ChatParticipant } from '../../../models';
import { LoadingService, UserService } from '../../../services';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-chat-messages',
  imports: [UserAvatarComponent, CommonModule, SkeletonComponent],
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss'
})
export class ChatMessagesComponent {
  private userService = inject(UserService);
  private loadingService = inject(LoadingService);
  private utilsService = inject(UtilsService);

  @Input() chat!: Chat;
  @Output() openSidebar = new EventEmitter<'profile' | 'shared-content'>();

  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('chat-messages');

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  get chatPartner(): ChatParticipant | undefined {
    return this.chat?.participants.find(p => p.id !== this.currentUser.id);
  }

  get groupedMessagesByDate(): { dateLabel: string, messages: ChatMessage[] }[] {
    if (!this.chat) return [];

    return this.utilsService.groupedMessagesByDate(this.chat);
  }

  onOpenSidebar(): void {
    this.openSidebar.emit('profile');
  }

  getSenderAvatar(senderId: string): string {
    const sender = this.chat?.participants.find(p => p.id === senderId);
    return sender?.avatarUrl || '';
  }

  getDateLabel(date: Date): string {
    return this.utilsService.getDateLabel(date);
  }

  getMessageSenderName(messageSenderId: string, messageSenderName: string): string {
    return messageSenderId === this.currentUser.id ? 'Ich' : messageSenderName;
  }

  isFirstMessageOfBlock(messages: ChatMessage[], index: number): boolean {
    if (index === 0) return true;
    return messages[index].senderId !== messages[index - 1].senderId;
  }
}
