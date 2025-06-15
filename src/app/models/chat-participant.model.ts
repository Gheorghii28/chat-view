import { MediaSection } from "./media.model";

export interface ChatParticipant {
    id: string;
    name: string;
    avatarUrl?: string;
    profile?: {
        status?: 'online' | 'offline' | 'away';
        bio?: string;
    };
    phone?: {
        number: string;
        reachable: boolean;
    };
    media?: MediaSection[];
}
