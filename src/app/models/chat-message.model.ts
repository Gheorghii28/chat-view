export interface ChatMessage {
    id: string;
    chatId: string;
    senderId: string;
    senderName: string;
    content: string;
    imageUrl: string;
    timestamp: Date;
    isOwnMessage?: boolean;
    type?: 'text' | 'image' | 'file';
    readBy: string[];
}
