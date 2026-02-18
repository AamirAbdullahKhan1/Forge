import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedItem } from '@/data/mockFeed';

interface FeedCardProps {
    item: FeedItem;
}

const TYPE_CONFIG = {
    TUTORIAL: { color: '#22C55E', bg: '#0F2A1A', label: 'TUTORIAL' },
    HELP: { color: '#F59E0B', bg: '#2A1F0A', label: 'HELP' },
    SHOWCASE: { color: '#8B5CF6', bg: '#1E1030', label: 'SHOWCASE' },
};

export default function FeedCard({ item }: FeedCardProps) {
    const typeConfig = TYPE_CONFIG[item.type];

    return (
        <View style={styles.card}>
            {/* Top Row: Category Badge + REP */}
            <View style={styles.topRow}>
                <View style={[styles.categoryBadge, { backgroundColor: typeConfig.bg }]}>
                    <View style={[styles.categoryDot, { backgroundColor: typeConfig.color }]} />
                    <Text style={[styles.categoryText, { color: typeConfig.color }]}>
                        {typeConfig.label}
                    </Text>
                </View>
                <Text style={styles.repText}>
                    REP <Text style={styles.repValue}>{item.rep}</Text>
                </Text>
            </View>

            {/* Title */}
            <Text style={styles.title} numberOfLines={3}>
                {item.title}
            </Text>

            {/* Body */}
            <Text style={styles.body} numberOfLines={2}>
                {item.body}
            </Text>

            {/* Showcase Image */}
            {item.imageUrl && (
                <View style={styles.imageContainer}>
                    <View style={styles.imagePlaceholder}>
                        <Ionicons name="image-outline" size={40} color="#4B5563" />
                    </View>
                    <View style={styles.previewBadge}>
                        <Text style={styles.previewText}>PREVIEW</Text>
                    </View>
                </View>
            )}

            {/* Tags */}
            <View style={styles.tagsRow}>
                {item.tags.map((tag) => (
                    <View key={tag} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </View>

            {/* Author Row */}
            <View style={styles.authorRow}>
                {/* Avatar */}
                <View style={[styles.authorAvatar, { backgroundColor: item.avatarColor }]}>
                    <Text style={styles.authorInitials}>{item.authorInitials}</Text>
                </View>
                <Text style={styles.authorName}>{item.author}</Text>

                {/* Votes */}
                <View style={styles.voteContainer}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="chevron-up" size={16} color="#6B7280" />
                    </TouchableOpacity>
                    <Text style={styles.voteCount}>{item.votes}</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="chevron-down" size={16} color="#6B7280" />
                    </TouchableOpacity>
                </View>

                {/* Comments */}
                <View style={styles.commentContainer}>
                    <Ionicons name="chatbubble-outline" size={14} color="#6B7280" />
                    <Text style={styles.commentCount}>{item.comments}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#12151E',
        marginHorizontal: 12,
        marginVertical: 6,
        borderRadius: 14,
        padding: 16,
        borderWidth: 1,
        borderColor: '#1E2130',
        gap: 10,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    categoryDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
    },
    categoryText: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.8,
    },
    repText: {
        color: '#6B7280',
        fontSize: 12,
        fontWeight: '500',
    },
    repValue: {
        color: '#9CA3AF',
        fontWeight: '700',
    },
    title: {
        color: '#F1F5F9',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
    },
    body: {
        color: '#6B7280',
        fontSize: 13,
        lineHeight: 19,
    },
    imageContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 160,
        position: 'relative',
    },
    imagePlaceholder: {
        flex: 1,
        backgroundColor: '#1A2535',
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
    },
    previewBadge: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    previewText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.8,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    tag: {
        backgroundColor: '#1A1D26',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#252836',
    },
    tagText: {
        color: '#6B7280',
        fontSize: 12,
        fontWeight: '500',
    },
    authorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 2,
    },
    authorAvatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    authorInitials: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '700',
    },
    authorName: {
        color: '#9CA3AF',
        fontSize: 13,
        fontWeight: '500',
        flex: 1,
    },
    voteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    voteCount: {
        color: '#9CA3AF',
        fontSize: 13,
        fontWeight: '600',
        minWidth: 28,
        textAlign: 'center',
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    commentCount: {
        color: '#6B7280',
        fontSize: 13,
        fontWeight: '500',
    },
});
