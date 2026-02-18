import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeHeader from '@/components/home/HomeHeader';
import FeedTabs from '@/components/home/FeedTabs';
import FeedCard from '@/components/home/FeedCard';
import { MOCK_FEED, FeedItem } from '@/data/mockFeed';

type Tab = 'Top' | 'New' | 'Following';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('Top');

  const renderItem = ({ item }: { item: FeedItem }) => (
    <FeedCard item={item} />
  );

  const keyExtractor = (item: FeedItem) => item.id;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0F14" />
      <FlatList
        data={MOCK_FEED}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <HomeHeader />
            <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F14',
  },
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#1A1D26',
    marginHorizontal: 12,
  },
});
