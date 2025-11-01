import styles from '@/Stylesheets/CategoryCardStylesheet';
import { CategoryCardProps } from '@/type';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatePresence, MotiView } from 'moti';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';



const CategoryCard = ({ title, subtitle, count, image, index, onPress }: CategoryCardProps) => {

     const delay = 150 * index;

  return (
   <AnimatePresence>
      <MotiView
        from={{ opacity: 0, translateY: 18 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay, type: 'timing', duration: 450 }}
        style={styles.cardWrapper}
      >
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
          <ImageBackground
            source={{ uri: image }}
            style={styles.cardImage}
            imageStyle={styles.cardImageStyle}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.08)', 'rgba(0,0,0,0.55)']}
              start={[0, 1]}
              end={[0, 0.1]}
              style={styles.overlay}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardSubtitle}>{subtitle}</Text>

              <View style={styles.chip}>
                <Text style={styles.chipText}>{count} wallpapers</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </MotiView>
    </AnimatePresence>
  )
}

export default CategoryCard



