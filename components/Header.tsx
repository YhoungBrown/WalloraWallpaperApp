import styles from '@/Stylesheets/HeaderComponentStylesheet'
import { Ionicons } from '@expo/vector-icons'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Header = () => {
  return (
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
          <TouchableOpacity style={styles.menuIcon}>
            <Ionicons name="menu" size={28} color="#111" />
          </TouchableOpacity>
        </View>
  )
}

export default Header