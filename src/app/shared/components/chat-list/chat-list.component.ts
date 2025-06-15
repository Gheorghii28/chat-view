import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { ChatListItemComponent } from '../chat-list-item/chat-list-item.component';
import { Chat } from '../../../models';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChatService, LoadingService } from '../../../services';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule, ChatListItemComponent, MatProgressSpinnerModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent implements OnInit {
  private chatService = inject(ChatService);
  private loadingService = inject(LoadingService);

  chatList: Chat[] = [];
  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('chats');

  async ngOnInit() {
    this.loadingService.setScopedLoading('chats', true);
    this.chatList = await firstValueFrom(this.chatService.getChats());
    this.loadingService.setScopedLoading('chats', false);
  }
}
