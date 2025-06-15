import { Injectable } from '@angular/core';
import { ChatParticipant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private user = { "id": "user_1", "name": "Max Mustermann", "avatarUrl": "https://randomuser.me/api/portraits/men/1.jpg" }

  getUser(): ChatParticipant {
    return this.user;
  }
}
