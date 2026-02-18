import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            {/* Top Row: Logo + Icons */}
            <View style={styles.topRow}>
                {/* Forge Logo */}
                <View style={styles.logoContainer}>
                    <View style={styles.logoIconBox}>
                        <Ionicons name="flash" size={16} color="#fff" />
                    </View>
                    <Text style={styles.logoText}>Forge</Text>
                </View>

                {/* Right Icons */}
                <View style={styles.rightIcons}>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <Ionicons name="notifications" size={22} color="#A0A8B8" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.avatarButton} activeOpacity={0.7}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>U</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Ionicons name="search" size={16} color="#6B7280" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search knowledge, tutorials, experts..."
                    placeholderTextColor="#6B7280"
                    editable={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0F14',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
        gap: 12,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoIconBox: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#2563EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#1A1D26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarButton: {},
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#3A4A6A',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#2563EB',
    },
    avatarText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A1D26',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#252836',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: '#9CA3AF',
        fontSize: 14,
    },
});
