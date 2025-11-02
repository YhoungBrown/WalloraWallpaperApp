import styles from '@/Stylesheets/CategoryScreen';
import { ABSTRACT, CITY, NATURE } from '@/constants/Specifications';
import { Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SingleCategory from '../components/SingleCategory';

const Categories = () => {

  const { name } = useLocalSearchParams<{ name?: string }>();

  const categoryName = name ? name.toUpperCase() : "NATURE";

  const inset = useSafeAreaInsets();
  const router = useRouter();

  const [selected, setSelected] = useState<any>(null)

  const categoryMap: Record<string, any> = {
  NATURE,
  ABSTRACT,
  CITY,
};


const data = categoryMap[categoryName] || NATURE;
    


  return (
    <View style={{paddingTop: inset.top, paddingBottom: inset.bottom, ...styles.container}}>

      <View style={styles.headerRow}>
          <View style={styles.logoRow}>
            <View style={styles.logoMark}>
               <MaskedView
                  maskElement={
                    <Text style={[styles.logoText, { backgroundColor: 'transparent' }]}>
                    W
                    </Text>
                  }
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#FF9A8B', '#FF6A88']}
                  >
                    <Text style={[styles.logoText, { opacity: 0 }]}>W</Text>
                  </LinearGradient>
                </MaskedView>              
            </View>
            <Text style={styles.appName}>Wallpaper Studio</Text>
          </View>
        </View>

    <View style={styles.contentContainer}>

        <TouchableOpacity
          style={styles.backarrowSection} 
          onPress={() => router.back()}
        >
           <Ionicons
              name={'arrow-back'}
              size={24}
              color={'#111'}
            />
          <Text style={styles.backText}>
            Back to Categories
          </Text>
        </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.heading}>{name}</Text>
      </View>


      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SingleCategory
            id={item.id}
            image={item.image}
            title={item.title}
            liked={item.liked}
            onPress={() => setSelected(item)}
          />
        )}
      />

      <Modal visible={!!selected} transparent animationType="fade" onRequestClose={() => setSelected(null)}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.backdrop} onPress={() => setSelected(null)} />
          <View style={styles.modalContent}>
            {selected && <Image source={selected.image} style={styles.modalImage} />}
            {selected && (
              <Text style={styles.modalTitle}>{selected.title}</Text>
            )}
            <Pressable onPress={() => setSelected(null)}>
              <View style={styles.closeBtn}>
                <Ionicons name="close" size={22} color="#000" />
              </View>
            </Pressable>
            
          </View>
        </View>
      </Modal>
    </View>
     </View>
  )
}

export default Categories

