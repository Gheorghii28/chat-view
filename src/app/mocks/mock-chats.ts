import { Chat } from "../models";

export const mockChats: Chat[] = [
  {
    id: "chat_1",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_2",
        name: "Erika Musterfrau",
        avatarUrl: "https://randomuser.me/api/portraits/women/20.jpg",
        profile: { status: "online", bio: "Full-Stack-Softwareentwicklerin mit Schwerpunkt auf modernen Webtechnologien. Versiert in Angular, TypeScript und Node.js mit Erfahrung in der Entwicklung skalierbarer Anwendungen. Begeistert von Clean Code, automatisierten Tests und agilen Arbeitsmethoden. Arbeitet gerne in interdisziplinären Teams und legt großen Wert auf wartbare Architektur und effiziente Entwicklererfahrung." },
        phone: { number: "+49 151 1234567", reachable: false },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/200', 'https://picsum.photos/300/201', 'https://picsum.photos/300/202']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/204', 'https://picsum.photos/300/205', 'https://picsum.photos/300/206', 'https://picsum.photos/300/207', 'https://picsum.photos/300/208', 'https://picsum.photos/300/209']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/210', 'https://picsum.photos/300/211', 'https://picsum.photos/300/212']
          },
        ]
      }
    ],
    messages: [
      {
        id: "msg_1",
        chatId: "chat_1",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Hey Erika, wie geht's?",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:00:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_2",
        chatId: "chat_1",
        senderId: "user_2",
        senderName: "Erika Musterfrau",
        content: "Alles gut, danke! Und dir?",
        imageUrl: "https://picsum.photos/300/200",
        timestamp: new Date("2025-06-16T10:01:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_3",
        chatId: "chat_1",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Auch gut. Viel zu tun diese Woche!",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:03:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_4",
        chatId: "chat_1",
        senderId: "user_2",
        senderName: "Erika Musterfrau",
        content: "Kenn ich... Meetings nonstop 😅",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:04:30Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_5",
        chatId: "chat_1",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Hast du die Slides für morgen fertig?",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:05:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_6",
        chatId: "chat_1",
        senderId: "user_2",
        senderName: "Erika Musterfrau",
        content: "Ja, fast. Ich schick dir gleich was.",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:06:10Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_7",
        chatId: "chat_1",
        senderId: "user_2",
        senderName: "Erika Musterfrau",
        content: "Hier ein Sneak Peek 😊",
        imageUrl: "https://picsum.photos/300/204",
        timestamp: new Date("2025-06-16T10:07:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_8",
        chatId: "chat_1",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Sieht top aus!",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:08:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_9",
        chatId: "chat_1",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Wollen wir noch ein Diagramm einbauen?",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:09:30Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      },
      {
        id: "msg_10",
        chatId: "chat_1",
        senderId: "user_2",
        senderName: "Erika Musterfrau",
        content: "Gute Idee, ich mach was fertig.",
        imageUrl: "",
        timestamp: new Date("2025-06-16T10:10:00Z"),
        type: "text",
        readBy: ["user_1", "user_2"]
      }
    ]
  },
  {
    id: "chat_2",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_3",
        name: "Bella Tester",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        profile: { status: "away", bio: "Erfahrene UX-Designerin mit einem starken Fokus auf nutzerzentrierte Gestaltung. Leidenschaftlich in der Entwicklung intuitiver Benutzeroberflächen für Web- und Mobile-Anwendungen. Arbeitet eng mit Entwicklungsteams zusammen, um kreative und funktionale Lösungen zu schaffen. Liebt es, mit Designsystemen zu arbeiten und durch Nutzerforschung echte Probleme zu lösen." },
        phone: { number: "+49 176 2233445", reachable: true },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/300', 'https://picsum.photos/300/301', 'https://picsum.photos/300/303']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/304', 'https://picsum.photos/300/305', 'https://picsum.photos/300/306', 'https://picsum.photos/300/307', 'https://picsum.photos/300/308', 'https://picsum.photos/300/309']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/310', 'https://picsum.photos/300/311', 'https://picsum.photos/300/312']
          },
        ]
      }
    ],
    messages: [
      {
        id: "msg_3",
        chatId: "chat_2",
        senderId: "user_3",
        senderName: "Bella Tester",
        content: "Hast du die Präsentation fertig?",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:00:00Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_4",
        chatId: "chat_2",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Fast! Ich schick sie dir gleich.",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:02:00Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_5",
        chatId: "chat_2",
        senderId: "user_3",
        senderName: "Bella Tester",
        content: "Super, danke dir! Willst du Feedback oder passt alles?",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:03:30Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_6",
        chatId: "chat_2",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Gern Feedback! Bin bei Folie 8 unsicher.",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:04:00Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_7",
        chatId: "chat_2",
        senderId: "user_3",
        senderName: "Bella Tester",
        content: "Meinst du das Chart mit den Nutzerzahlen?",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:04:20Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_8",
        chatId: "chat_2",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Genau. Irgendwie wirkt es zu voll.",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:05:00Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_9",
        chatId: "chat_2",
        senderId: "user_3",
        senderName: "Bella Tester",
        content: "Ich würd's splitten – zwei Charts draus machen. 🤓",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:06:00Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_10",
        chatId: "chat_2",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Top Idee, mach ich gleich!",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:06:30Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_11",
        chatId: "chat_2",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Hier schon mal das neue Layout:",
        imageUrl: "https://picsum.photos/300/310",
        timestamp: new Date("2025-06-15T09:07:30Z"),
        type: "text",
        readBy: ["user_1", "user_3"]
      },
      {
        id: "msg_12",
        chatId: "chat_2",
        senderId: "user_3",
        senderName: "Bella Tester",
        content: "Gefällt mir! Viel klarer so 🙌",
        imageUrl: "",
        timestamp: new Date("2025-06-15T09:08:00Z"),
        type: "text",
        readBy: ['user_3']
      }
    ]
  },
  {
    id: "chat_3",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_4",
        name: "Lisa Sommer",
        avatarUrl: "https://randomuser.me/api/portraits/women/59.jpg",
        profile: { status: "offline", bio: "Content Creatorin & Bloggerin" },
        phone: { number: "+49 171 5556789", reachable: true },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/300', 'https://picsum.photos/300/301', 'https://picsum.photos/300/303']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/304', 'https://picsum.photos/300/305', 'https://picsum.photos/300/306', 'https://picsum.photos/300/307', 'https://picsum.photos/300/308', 'https://picsum.photos/300/309']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/310', 'https://picsum.photos/300/311', 'https://picsum.photos/300/312']
          },
        ]
      }
    ],
    messages: [
      // Tag 1 – 12.06.2025
      {
        id: "msg_5",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "Hey Max, bist du morgen zufällig in der Stadt?",
        imageUrl: "",
        timestamp: new Date("2025-06-12T10:30:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },
      {
        id: "msg_6",
        chatId: "chat_3",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Ja! Ich hab nachmittags ein Meeting, aber davor hätte ich Zeit.",
        imageUrl: "",
        timestamp: new Date("2025-06-12T10:35:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },

      // Tag 2 – 13.06.2025
      {
        id: "msg_7",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "Perfekt, dann lass uns um 14 Uhr im Café Central treffen?",
        imageUrl: "",
        timestamp: new Date("2025-06-13T09:15:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },
      {
        id: "msg_8",
        chatId: "chat_3",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Top, ist notiert 👍",
        imageUrl: "",
        timestamp: new Date("2025-06-13T09:18:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },

      // Tag 3 – 14.06.2025
      {
        id: "msg_9",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "War echt schön gestern, danke dir!",
        imageUrl: "",
        timestamp: new Date("2025-06-14T08:30:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },
      {
        id: "msg_10",
        chatId: "chat_3",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Fand ich auch! Lass uns das bald wiederholen 😄",
        imageUrl: "",
        timestamp: new Date("2025-06-14T08:32:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },
      {
        id: "msg_11",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "Hier ein Bild vom Kaffee gestern ☕📸",
        imageUrl: "https://picsum.photos/300/340",
        timestamp: new Date("2025-06-14T08:35:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },

      // Tag 4 – 16.06.2025
      {
        id: "msg_12",
        chatId: "chat_3",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Ich hab das Foto eben im Büro gezeigt – alle neidisch 😂",
        imageUrl: "",
        timestamp: new Date("2025-06-16T09:00:00Z"),
        type: "text",
        readBy: ["user_1", "user_4"]
      },
      {
        id: "msg_13",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "Haha, das freut mich 😁!",
        imageUrl: "",
        timestamp: new Date("2025-06-16T09:10:00Z"),
        type: "text",
        readBy: ['user_4']
      },
      {
        id: "msg_14",
        chatId: "chat_3",
        senderId: "user_4",
        senderName: "Lisa Sommer",
        content: "Nächstes Mal bring ich Kuchen mit!",
        imageUrl: "",
        timestamp: new Date("2025-06-16T09:10:00Z"),
        type: "text",
        readBy: ['user_4']
      }
    ]
  },
  {
    id: "chat_4",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_5",
        name: "Nina Berg",
        avatarUrl: "https://randomuser.me/api/portraits/women/49.jpg",
        profile: { status: "offline", bio: "Liebt Literatur und Filme" },
        phone: { number: "+49 151 7654321", reachable: false },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/200', 'https://picsum.photos/300/201', 'https://picsum.photos/300/202']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/204', 'https://picsum.photos/300/205', 'https://picsum.photos/300/206', 'https://picsum.photos/300/207', 'https://picsum.photos/300/208', 'https://picsum.photos/300/209']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/210', 'https://picsum.photos/300/211', 'https://picsum.photos/300/212']
          },
        ]
      }
    ],
    messages: [
      {
        id: "msg_7",
        chatId: "chat_4",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Hast du den Artikel gelesen?",
        imageUrl: "",
        timestamp: new Date("2025-06-13T07:45:00Z"),
        type: "text",
        readBy: ["user_1", "user_5"]
      },
      {
        id: "msg_8",
        chatId: "chat_4",
        senderId: "user_5",
        senderName: "Nina Berg",
        content: "Ja, super spannend!",
        imageUrl: "",
        timestamp: new Date("2025-06-13T07:46:00Z"),
        type: "text",
        readBy: ["user_1", "user_5"]
      }
    ]
  },
  {
    id: "chat_5",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_6",
        name: "Diana Klein",
        avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
        profile: { status: "online", bio: "Fußballfan & Entwickler" },
        phone: { number: "+49 179 9876543", reachable: true },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/200', 'https://picsum.photos/300/201', 'https://picsum.photos/300/202']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/204', 'https://picsum.photos/300/205', 'https://picsum.photos/300/206', 'https://picsum.photos/300/207', 'https://picsum.photos/300/208', 'https://picsum.photos/300/209']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/210', 'https://picsum.photos/300/211', 'https://picsum.photos/300/212']
          },
        ]
      }
    ],
    messages: [
      {
        id: "msg_9",
        chatId: "chat_5",
        senderId: "user_6",
        senderName: "David Klein",
        content: "Spielst du heute Abend wieder mit?",
        imageUrl: "",
        timestamp: new Date("2025-06-11T06:50:00Z"),
        type: "text",
        readBy: ["user_1", "user_6"]
      },
      {
        id: "msg_10",
        chatId: "chat_5",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Na klar! Ich freu mich schon.",
        imageUrl: "",
        timestamp: new Date("2025-06-11T06:52:00Z"),
        type: "text",
        readBy: ["user_1", "user_6"]
      }
    ]
  },
  {
    id: "chat_6",
    participants: [
      {
        id: "user_1",
        name: "Max Mustermann",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        profile: { status: "online", bio: "Teamleiter in Köln" },
        phone: { number: "+49 160 0000001", reachable: true },
        media: []
      },
      {
        id: "user_7",
        name: "Clara Winter",
        avatarUrl: "https://randomuser.me/api/portraits/women/99.jpg",
        profile: { status: "away", bio: "Psychologin und Hobbymalerin" },
        phone: { number: "+49 157 1122334", reachable: false },
        media: [
          {
            title: 'THIS MONTH',
            images: ['https://picsum.photos/300/200', 'https://picsum.photos/300/401', 'https://picsum.photos/300/402']
          },
          {
            title: 'AUGUST',
            images: ['https://picsum.photos/300/404', 'https://picsum.photos/300/405', 'https://picsum.photos/300/406', 'https://picsum.photos/300/407', 'https://picsum.photos/300/408', 'https://picsum.photos/300/409']
          },
          {
            title: 'JULY',
            images: ['https://picsum.photos/300/410', 'https://picsum.photos/300/411', 'https://picsum.photos/300/412']
          },
        ]
      }
    ],
    messages: [
      {
        id: "msg_11",
        chatId: "chat_6",
        senderId: "user_7",
        senderName: "Clara Winter",
        content: "Max, ich brauch deinen Rat zu etwas.",
        imageUrl: "",
        timestamp: new Date("2025-06-11T11:00:00Z"),
        type: "text",
        readBy: ["user_1", "user_7"],
      },
      {
        id: "msg_12",
        chatId: "chat_6",
        senderId: "user_1",
        senderName: "Max Mustermann",
        content: "Klar, was ist los?",
        imageUrl: "",
        timestamp: new Date("2025-06-11T11:01:00Z"),
        type: "text",
        readBy: ["user_1"],
      }
    ]
  }
];
