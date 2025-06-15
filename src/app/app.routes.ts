import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/chat',
        pathMatch: 'full',
    },
    {
        path: 'pages/chat',
        loadComponent: () =>
            import('./pages/chat-shell/chat-shell.component').then((m) => m.ChatShellComponent),
        children: [
            {
                path: ':chatId',
                loadComponent: () =>
                    import('./components/chat/chat.component').then((m) => m.ChatComponent),
            }
        ]
    },
    { path: '**', redirectTo: '' },
];
