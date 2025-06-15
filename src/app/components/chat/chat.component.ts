import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ProfileSidebarComponent } from '../profile-sidebar/profile-sidebar.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { Chat, ChatParticipant, MediaSection } from '../../models';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatSharedContentComponent } from '../chat-shared-content/chat-shared-content.component';
import { CommonModule } from '@angular/common';
import { ChatService, LoadingService, UserService } from '../../services';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [
    CommonModule,
    MatSidenavModule,
    ChatMessagesComponent,
    ProfileSidebarComponent,
    ChatHeaderComponent,
    ChatSharedContentComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private chatService = inject(ChatService);
  private userService = inject(UserService);
  private loadingService = inject(LoadingService);

  @ViewChild('sidebar') sidebar!: MatDrawer;

  currentChat!: Chat;

  sidebarView: 'profile' | 'shared-content' | null = null;

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.loadingService.setScopedLoading('chat-messages', true);
      const chatId = params['chatId'];
      if (chatId) {
        this.currentChat = await firstValueFrom(this.chatService.getChatById(chatId));
        this.chatService.currentChat.set(this.currentChat);
        this.loadingService.setScopedLoading('chat-messages', false);
      }
    });
  }

  onOpenSidebar(view: 'profile' | 'shared-content'): void {
    this.sidebarView = view;
    this.sidebar.open();
  }

  onCloseSidebar(): void {
    this.sidebar.close();
    this.sidebarView = null;
  }

  onChangeSidebarView(view: 'profile' | 'shared-content'): void {
    this.sidebarView = view;
  }

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  get chatPartner(): ChatParticipant | undefined {
    return this.currentChat?.participants.find(p => p.id !== this.currentUser.id);
  }

  get media(): MediaSection[] {
    return this.chatPartner?.media as MediaSection[];
  }
}
