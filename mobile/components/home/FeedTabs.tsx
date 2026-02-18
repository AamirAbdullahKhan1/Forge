import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Tab = 'Top' | 'New' | 'Following';

interface FeedTabsProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const TABS: Tab[] = ['Top', 'New', 'Following'];

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
    return (
        <View style={styles.container}>
            {TABS.map((tab) => {
                const isActive = tab === activeTab;
                return (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => onTabChange(tab)}
                        style={[styles.tab, isActive && styles.activeTab]}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 8,
        backgroundColor: '#0D0F14',
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#2563EB',
    },
    tabText: {
        color: '#6B7280',
        fontSize: 14,
        fontWeight: '500',
    },
    activeTabText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
});
