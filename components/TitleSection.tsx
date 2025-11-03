import styles from '@/Stylesheets/TitleSectionStylesheet';
import { TitleTextProps } from '@/type';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Title = ({titleText, titleSubtext} : TitleTextProps) => {
  return (
        <View style={styles.titleBlock}>
          <MaskedView
            maskElement={<Text style={styles.titleText}>{titleText}</Text>}
          >
            <LinearGradient
              start={[0, 0]}
              end={[1, 0]}
              colors={['#ffa500', '#FF9A8B','#FF9A8B', '#FF6A88', '#FF6A88','#FF6A88','#FF6A88']}
            >
              <Text style={[styles.titleText, { opacity: 0 }]}>{titleText}</Text>
            </LinearGradient>
          </MaskedView>

          <Text style={styles.subtitleText}>
            {titleSubtext}
          </Text>
        </View>
  )
}

export default Title