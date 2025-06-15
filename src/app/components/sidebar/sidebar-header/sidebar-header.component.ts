import { Component, inject, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconCircleButtonComponent } from '../../../shared/components/icon-circle-button/icon-circle-button.component';
import { LoadingService } from '../../../services';

@Component({
  selector: 'app-sidebar-header',
  imports: [MatIconModule, MatButtonToggleModule, MatCheckboxModule, IconCircleButtonComponent],
  templateUrl: './sidebar-header.component.html',
  styleUrl: './sidebar-header.component.scss'
})
export class SidebarHeaderComponent {
  private loadingService = inject(LoadingService);

  isLoading: Signal<boolean> = this.loadingService.getScopedLoading('chats');
  activeTab: 'all' | 'unread' = 'all';

  setTab(tab: 'all' | 'unread'): void {
    this.activeTab = tab;
  }
}
