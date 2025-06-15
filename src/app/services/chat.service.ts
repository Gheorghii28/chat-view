import { Injectable, signal, WritableSignal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Chat } from '../models';
import { mockChats } from '../mocks/mock-chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentChat: WritableSignal<Chat | null> = signal(null)

  getChats(): Observable<Chat[]> {
    // Simulates asynchronous loading time
    return of(mockChats).pipe(delay(1000));
  }

  getChatById(id: string): Observable<Chat> {
    const chat = mockChats.find(chat => chat.id === id);
    if (!chat) {
      throw new Error(`Chat with id ${id} not found`);
    }
    // Simulates asynchronous loading time
    return of(chat).pipe(delay(500));
  }

  getMediaSectionsByUserId$(userId: string): Observable<{ title: string, images: string[] }[]> {
    const media = this.getMediaSectionsByUserId(userId);
    // Simulates asynchronous loading time
    return of(media).pipe(delay(500));
  }

  private getMediaSectionsByUserId(userId: string): { title: string, images: string[] }[] {
    const participant = mockChats
      .flatMap(chat => chat.participants)
      .find(p => p.id === userId);

    return participant?.media ?? [];
  }

  getChatPartnerId(chatId: string, currentUserId: string): string | undefined {
    const chat = mockChats.find(chat => chat.id === chatId);
    if (!chat) return undefined;

    return chat.participants.find(p => p.id !== currentUserId)?.id;
  }
}
