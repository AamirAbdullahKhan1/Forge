export type FeedType = 'TUTORIAL' | 'HELP' | 'SHOWCASE';

export interface FeedItem {
    id: string;
    type: FeedType;
    rep: string;
    title: string;
    body: string;
    tags: string[];
    author: string;
    authorInitials: string;
    avatarColor: string;
    votes: number;
    comments: number;
    imageUrl?: string;
}

export const MOCK_FEED: FeedItem[] = [
    {
        id: '1',
        type: 'TUTORIAL',
        rep: '2.4k',
        title: 'Implementing Rust-based microservices for real-time data ingestion',
        body: 'A deep dive into building memory-safe high-throughput services using the Tokio runtime an...',
        tags: ['#rust', '#backend', '#performance'],
        author: 'alex_dev',
        authorInitials: 'A',
        avatarColor: '#3A3A3A',
        votes: 142,
        comments: 28,
    },
    {
        id: '2',
        type: 'HELP',
        rep: '850',
        title: 'Troubleshooting memory leaks in Node.js v20 heap snapshots?',
        body: "I'm seeing a slow crawl in RSS memory over 48 hours. Attached are the Chrome DevTools...",
        tags: ['#nodejs', '#debugging'],
        author: 'sarah_codes',
        authorInitials: 'S',
        avatarColor: '#5A3A2A',
        votes: 54,
        comments: 12,
    },
    {
        id: '3',
        type: 'SHOWCASE',
        rep: '12.1k',
        title: 'OSS Project: HyperScale - The last UI library you\'ll ever need',
        body: 'HyperScale leverages sub-millisecond rendering cycles with a custom virtual DOM...',
        tags: ['#typescript', '#frontend', '#open-source'],
        author: 'john_doe',
        authorInitials: 'JD',
        avatarColor: '#1A3A5A',
        votes: 512,
        comments: 89,
        imageUrl: 'showcase',
    },
];
