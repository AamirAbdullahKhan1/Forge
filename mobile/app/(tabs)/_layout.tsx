import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TAB_CONFIG = [
  { name: 'index', label: 'FEED', icon: 'home' as const },
  { name: 'explore', label: 'EXPLORE', icon: 'search' as const },
  { name: 'create', label: '', icon: 'add' as const, isCenter: true },
  { name: 'chat', label: 'CHAT', icon: 'chatbubble' as const },
  { name: 'profile', label: 'PROFILE', icon: 'person' as const },
];

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const config = TAB_CONFIG[index];
        if (!config) return null;

        const isFocused = state.index === index;
        const isCenter = config.isCenter;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (isCenter) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.centerButton}
              activeOpacity={0.85}
            >
              <View style={styles.centerButtonInner}>
                <Ionicons name="add" size={30} color="#fff" />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <Ionicons
              name={config.icon}
              size={22}
              color={isFocused ? '#2563EB' : '#6B7280'}
            />
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {config.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: 'Feed' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="create" options={{ title: 'Create' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#12151E',
    borderTopWidth: 1,
    borderTopColor: '#1E2130',
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingTop: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingVertical: 2,
  },
  tabLabel: {
    color: '#6B7280',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  tabLabelActive: {
    color: '#2563EB',
  },
  centerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  centerButtonInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
});
