import { Redirect, useRouter } from 'expo-router';
import { useFoodStore } from '@/store/useFoodStore';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
    const hasCompletedSetup = useFoodStore((state) => state.hasCompletedSetup);
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const router = useRouter();

    if (hasCompletedSetup) {
        return <Redirect href="/(tabs)" />;
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.content}>
                <View style={styles.heroSection}>
                    <View style={[styles.iconContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <Ionicons name="nutrition" size={80} color={colors.primary} />
                    </View>
                    <Text style={[styles.title, { color: colors.text }]}>NuGen Meal Planner</Text>
                    <Text style={[styles.subtitle, { color: colors.icon }]}>
                        Personalized, AI-powered recipes tailored entirely to the ingredients currently in your pantry.
                    </Text>
                </View>

                <View style={styles.featureList}>
                    <View style={styles.featureItem}>
                        <Ionicons name="sparkles" size={24} color={colors.secondary} />
                        <Text style={[styles.featureText, { color: colors.text }]}>Smart AI Optimization</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Ionicons name="calendar" size={24} color={colors.secondary} />
                        <Text style={[styles.featureText, { color: colors.text }]}>Interactive Weekly Planner</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Ionicons name="cart" size={24} color={colors.secondary} />
                        <Text style={[styles.featureText, { color: colors.text }]}>Auto-generated Shopping Lists</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.primaryButton, { backgroundColor: colors.primary }]}
                        onPress={() => router.push('/onboarding')}
                    >
                        <Text style={styles.primaryButtonText}>Get Started</Text>
                        <Ionicons name="arrow-forward" size={20} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
    },
    heroSection: {
        alignItems: 'center',
        marginTop: 60,
    },
    iconContainer: {
        width: 140,
        height: 140,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 16,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    featureList: {
        gap: 20,
        marginBottom: 40,
        paddingHorizontal: 16,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    featureText: {
        fontSize: 16,
        fontWeight: '500',
    },
    footer: {
        paddingBottom: 40,
    },
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        borderRadius: 16,
        gap: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});
