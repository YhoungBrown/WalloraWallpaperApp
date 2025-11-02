import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '@/Stylesheets/HomeScreenStylesheet';
import CategoryCard from '@/components/CategoryCard';
import Header from '@/components/Header';
import { CATEGORIES, SPECS } from '@/constants/Specifications';
import { useColorScheme } from '@/hooks/use-color-scheme.web';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  if (!fontsLoaded) {
    return (
      <View style={[styles.center, { flex: 1, backgroundColor: SPECS.colors.bg }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const HomeCategory = CATEGORIES.slice(0, 3);

  return (
    <View 
      style={{paddingTop: insets.top, paddingBottom: insets.bottom}}
    >

      <Header />

      <ScrollView 
        contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleBlock}>
          <MaskedView
            maskElement={<Text style={styles.titleText}>Discover Beautiful Wallpapers</Text>}
          >
            <LinearGradient
              start={[0, 0]}
              end={[1, 0]}
              colors={['#FF9A8B', '#FF6A88']}
            >
              <Text style={[styles.titleText, { opacity: 0 }]}>Discover Beautiful Wallpapers</Text>
            </LinearGradient>
          </MaskedView>

          <Text style={styles.subtitleText}>
            Discover curated collections of stunning wallpapers. Browse by category, preview in full-screen, and set your favorites.
          </Text>
        </View>

        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>
          <TouchableOpacity activeOpacity={0.5}
              onPress={() => {
                router.push('./category')
              }}
          >
            <Text style={styles.seeAll}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.list}>
          {HomeCategory.map((c, idx) => (
            <CategoryCard
              key={c.id}
              index={idx}
              title={c.title}
              subtitle={c.subtitle}
              count={c.count}
              image={c.image}
              onPress={() => {
                router.push('./category')
              }}
            />
          ))}
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    
    </View>
  );
}

