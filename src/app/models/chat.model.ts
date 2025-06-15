import { ChatMessage } from "./chat-message.model";
import { ChatParticipant } from "./chat-participant.model";

export interface Chat {
    id: string;
    participants: ChatParticipant[];
    messages: ChatMessage[];
    lastMessage?: ChatMessage;
}
