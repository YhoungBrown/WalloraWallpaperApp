import Header from '@/components/Header';
import Title from '@/components/TitleSection';
import WideSaveButton from '@/components/wideSaveButton';
import styles from '@/Stylesheets/SettingsStylesheet';
import { Ionicons, Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const settings = () => {
  const inset = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(true);
  return (
    <View 
      style={{
        paddingTop: inset.top, 
        paddingBottom: inset.bottom
      }}
    >
      <Header />

      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Title
          titleText='Settings'
          titleSubtext='Customize your Wallpaper Studio experience'
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wallpaper Setup</Text>
          <Text style={styles.cardSubtitle}>
            Configure your wallpaper settings and enable auto-rotation.
          </Text>

         
          <View style={styles.sectionContainer}>
           <Text style={styles.label}>Image Quality</Text>
              <TouchableOpacity activeOpacity={0.2} style={styles.dropdown}>
              <Text style={styles.dropdownText}>
                High (Best Quality)
              </Text>
              <Ionicons name="chevron-down-outline" size={18} color="#111" />
            </TouchableOpacity>

          </View>

          
          <View style={styles.sectionContainer}>
            <View style={styles.toggleRow}>
              <Text style={styles.label}>Notification</Text>

              <Switch
                trackColor={{ false: '#D9D9D9', true: '#FECF65' }}
                thumbColor="#fff"
                value={notifications}
                onValueChange={setNotifications}
              />
            </View>

            <Text style={styles.smallText}>
              Get notified about new wallpapers and updates
            </Text>
          </View>

          <View style={{marginTop: 17}}/>


          <WideSaveButton
            buttonText="Cancel"
            backgroundColor="#f0f0f0"
            textColor="#000"
            borderColor="#9999999f"
          />

          <View style={{marginTop: 12}}/>

          <WideSaveButton
            buttonText="Save Settings"
            backgroundColor="#ffa500"
            borderColor="#ffa500"
            textColor="#fff"
            onPress={() => alert('Settings Saved')}
          />


        <View style={styles.phoneContainer}>
          <View style={styles.phone}>
            <View style={styles.notch} />
            <View style={styles.phoneContent}>
              <View
                style={
                  styles.statusCircle
                }
              >
                <View style={styles.connectedDevice}>
                  <Octicons name="link" size={16} color="#0c6624ff"  />
                <Text style={styles.statusText}>
                   Connected to device
                </Text>
                </View>

              </View>
              <Text style={styles.actionText}>
                Click to disconnect
              </Text>
            </View>
          </View>
        </View>
        </View>

      </View>
      </ScrollView>
    </View>
  )
}

export default settings