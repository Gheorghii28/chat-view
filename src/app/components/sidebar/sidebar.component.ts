import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { ChatListComponent } from '../../shared/components/chat-list/chat-list.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule, 
    SidebarHeaderComponent, 
    ChatListComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
