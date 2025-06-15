import { Injectable } from '@angular/core';
import { Chat, ChatMessage, ChatParticipant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getDateLabel(date: Date): string {
    const now = new Date();
    const today = now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    if (date.toDateString() === today) return 'Heute';
    if (date.toDateString() === yesterday.toDateString()) return 'Gestern';

    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);

    if (date > oneWeekAgo) return days[date.getDay()];

    return date.toLocaleDateString('de-DE'); // e.g. 03.06.2025
  }

  getChatStyle(chat: Chat, currentChat: Chat): { [klass: string]: string } {
    return {
      backgroundColor: chat.id === currentChat?.id ? '#392B30' : ''
    };
  }

  groupedMessagesByDate(chat: Chat): { dateLabel: string, messages: ChatMessage[] }[] {

    const groups: { [key: string]: ChatMessage[] } = {};

    for (const msg of chat.messages) {
      const dateKey = new Date(msg.timestamp).toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(msg);
    }

    return Object.entries(groups)
      .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
      .map(([key, messages]) => ({
        dateLabel: this.getDateLabel(new Date(key)),
        messages
      }));
  }

  getLastMessage(chat: Chat): ChatMessage | undefined {
    if (!chat.messages || chat.messages.length === 0) return undefined;

    return chat.messages.reduce((latest, msg) =>
      new Date(msg.timestamp) > new Date(latest.timestamp) ? msg : latest
    );
  }

  getLastMessageTimestamp(chat: Chat): string {
    const message = this.getLastMessage(chat);
    if (!message) return '';

    const date = new Date(message.timestamp);
    const now = new Date();

    const isToday =
      date.toDateString() === now.toDateString();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (isYesterday) {
      return 'Gestern';
    } else if (now.getFullYear() === date.getFullYear()) {
      return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
    } else {
      return date.toLocaleDateString('de-DE');
    }
  }

  getUnreadCount(chat: Chat, currentUser: ChatParticipant): number {
    return chat.messages.filter(msg =>
      !msg.readBy.includes(currentUser.id) && msg.senderId !== currentUser.id
    ).length;
  }
}
