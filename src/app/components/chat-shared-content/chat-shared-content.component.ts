import { Component, EventEmitter, inject, Output, Signal } from '@angular/core';
import { IconCircleButtonComponent } from '../../shared/components/icon-circle-button/icon-circle-button.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { ChatService, LoadingService, UserService } from '../../services';
import { firstValueFrom } from 'rxjs';
import { ChatParticipant, MediaSection } from '../../models';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-chat-shared-content',
  imports: [IconCircleButtonComponent, CommonModule, MatDividerModule, SkeletonComponent],
  templateUrl: './chat-shared-content.component.html',
  styleUrl: './chat-shared-content.component.scss'
})
export class ChatSharedContentComponent {
  private route = inject(ActivatedRoute);
  private chatService = inject(ChatService);
  private loadingService = inject(LoadingService);
  private userService = inject(UserService);

  @Output() changeSidebarView = new EventEmitter<'profile' | 'shared-content'>();

  media!: MediaSection[];
  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('media');

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.loadingService.setScopedLoading('media', true);
      const chatId = params['chatId'];
      const userId = this.chatService.getChatPartnerId(chatId, this.currentUser.id);
      if (userId) {
        this.media = await firstValueFrom(this.chatService.getMediaSectionsByUserId$(userId));
        this.loadingService.setScopedLoading('media', false);
      }
    });
  }

  onSwitchSidebarView(view: 'profile' | 'shared-content'): void {
    this.changeSidebarView.emit(view);
  }

  deleteMedia(): void {
    console.log('Delete triggered');
  }

  shareMedia(): void {
    console.log('Share triggered');
  }

  downloadMedia(): void {
    console.log('Download triggered');
  }

  close(): void {
    console.log('Sidebar closed');
  }

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }
}
