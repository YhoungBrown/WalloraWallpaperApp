import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardWrapper: {
    marginHorizontal: height * 0.005, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 6,
    overflow: 'hidden',
  },
  cardContentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    gap: 12,
  },
  cardImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#111',
    marginBottom: -2,
  },
  cardSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginBottom: 6,
    flexWrap: 'wrap',        
  },
 badge: {
  alignSelf: "flex-start",
  paddingHorizontal: height * 0.018,
  paddingVertical: height * 0.006,
  borderRadius: 999,
  backgroundColor: 'rgba(255,255,255, 0.8)', 
  borderWidth: 0.6,
  borderColor: 'rgba(255,255,255,0.10)',    
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.06,
  shadowRadius: 1.5,
  elevation: 1,
},

  badgeText: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
});

export default styles;
