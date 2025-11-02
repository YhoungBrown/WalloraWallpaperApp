import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');


const scaleW = (size: number) => (width / 375) * size;
const scaleH = (size: number) => (height / 812) * size;

const styles = StyleSheet.create({
  card: {
    width: '47%',
    aspectRatio: 0.7,
    borderRadius: scaleW(18),
    overflow: 'hidden',
    marginBottom: scaleH(15),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: scaleW(18),
  },
  overlay: {
    position: 'absolute',
    bottom: scaleH(12),
    left: scaleW(10),
    right: scaleW(10),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: scaleH(4),
  },
  likedIconPosioning: {
    position: 'absolute',
    top: scaleH(12),
    left: scaleW(110), 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: scaleW(14),
    fontFamily: 'Poppins_600SemiBold',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: scaleW(12),
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: scaleW(6),
    paddingVertical: scaleH(2),
    borderRadius: scaleW(12),
    overflow: 'hidden',
  },
  heartContainerActive: {
    backgroundColor: '#fff',
    borderRadius: scaleW(30),
    padding: scaleW(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartContainerInactive: {
    borderRadius: scaleW(30),
    padding: scaleW(6),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});

export default styles;
