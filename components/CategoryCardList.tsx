import styles from '@/Stylesheets/CategoryCardListStylesheet'
import { CategoryCardProps } from '@/type'
import { AnimatePresence, MotiView } from 'moti'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'





const CategoryCardList = ({ title, subtitle, count, image, index, onPress }: CategoryCardProps) => {


    const delay = 150 * index;


return (
<AnimatePresence>
  <MotiView
    from={{ opacity: 0, translateY: 18 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ delay: 150 * index, type: 'timing', duration: 450 }}
    style={styles.cardWrapper}
  >
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.cardContentContainer}>
        <Image
          source={{ uri: image }}
          style={styles.cardImage}
          resizeMode="cover" 
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.cardSubtitle} numberOfLines={2}>
            {subtitle}
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{count} wallpapers</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </MotiView>
</AnimatePresence>

  )
}

export default CategoryCardList