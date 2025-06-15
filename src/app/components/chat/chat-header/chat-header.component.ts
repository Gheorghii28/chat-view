import { Component, EventEmitter, inject, Input, Output, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Chat, ChatParticipant } from '../../../models';
import { LoadingService, UserService } from '../../../services';
import { IconCircleButtonComponent } from '../../../shared/components/icon-circle-button/icon-circle-button.component';
import { UserAvatarComponent } from '../../../shared/components/user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-chat-header',
  imports: [CommonModule, MatIconModule, MatListModule, IconCircleButtonComponent, UserAvatarComponent, SkeletonComponent],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss'
})
export class ChatHeaderComponent {
  private userService = inject(UserService);
  private loadingService = inject(LoadingService);

  @Input() chat!: Chat;
  @Input() sidebarOpened = false;
  @Output() openSidebar = new EventEmitter<'profile' | 'shared-content'>();
  @Output() closeSidebar = new EventEmitter<void>();

  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('chat-messages');

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  get chatPartner(): ChatParticipant | undefined {
    return this.chat?.participants.find(p => p.id !== this.currentUser.id);
  }

  onOpenSidebar() {
    this.openSidebar.emit('profile');
  }

  onCloseSidebar() {
    this.closeSidebar.emit();
  }

  onCameraClick() {

  }

  onPhoneClick() {

  }
}
