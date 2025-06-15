import { Component, EventEmitter, inject, Input, Output, Signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { IconCircleButtonComponent } from '../../shared/components/icon-circle-button/icon-circle-button.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Chat, ChatParticipant } from '../../models';
import { LoadingService, UserService } from '../../services';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-profile-sidebar',
  imports: [MatDividerModule, IconCircleButtonComponent, MatDividerModule, MatIcon, CommonModule, MatMenuModule, SkeletonComponent],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss'
})
export class ProfileSidebarComponent {
  private userService = inject(UserService);
  private loadingService = inject(LoadingService);

  @Input() chat!: Chat;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() changeSidebarView = new EventEmitter<'profile' | 'shared-content'>();

  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('chat-messages');

  onSwitchSidebarView(view: 'profile' | 'shared-content'): void {
    this.changeSidebarView.emit(view);
  }

  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }

  get currentUser(): ChatParticipant {
    return this.userService.getUser();
  }

  get chatPartner(): ChatParticipant | undefined {
    return this.chat?.participants.find(p => p.id !== this.currentUser.id);
  }

  get media(): string[] {
    return this.chatPartner?.media?.flatMap(m => m.images) ?? [];
  }
}
