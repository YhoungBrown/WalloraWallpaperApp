import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;
const scale = (size: number): number => (width / 375) * size;
const vScale = (size: number): number => (height / 812) * size;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
  },

  scroll: {
    marginBottom: hp(10),
  },

  inner: {
    flex: 1,
    paddingHorizontal: wp(5),
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: scale(20),
    padding: scale(20),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: scale(6),
    elevation: 2,
    marginBottom: vScale(30),
    marginTop: vScale(40)
  },

  cardTitle: {
    fontSize: scale(16),
    fontFamily: "Poppins_600SemiBold",
    fontWeight: '700',
    color: '#111',
  },

  cardSubtitle: {
    fontSize: scale(13),
    color: SPECS.colors.blacktext,
    marginBottom: vScale(20),
    marginTop: vScale(10),
  },

  label: {
    fontSize: scale(14),
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    color: SPECS.colors.blacktext,
    marginBottom: vScale(6),
  },

  sectionContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: scale(10),
    paddingHorizontal: wp(4),
    paddingVertical: vScale(12),
    justifyContent: 'center',
    marginBottom: vScale(18),
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: scale(10),
    paddingHorizontal: wp(4),
    paddingVertical: vScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownText: {
    fontSize: scale(13),
    color: SPECS.colors.muted,
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vScale(-5),
  },

  smallText: {
    fontSize: scale(12),
    color: SPECS.colors.muted,
  },

  phoneContainer: {
    alignItems: 'center',
    marginTop: vScale(30),
  },

  phone: {
    width: wp(65),
    height: hp(60),
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: scale(40),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  notch: {
    position: 'absolute',
    top: vScale(12),
    width: wp(16),
    height: vScale(15),
    borderRadius: scale(10),
    backgroundColor: '#000',
  },

  phoneContent: {
    alignItems: 'center',
  },

  statusCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: vScale(8),
    borderRadius: scale(20),
    backgroundColor: 'rgba(88, 215, 110, 0.1)', 
    shadowColor: '#58D76E',
    shadowOpacity: 0.25,
    shadowRadius: scale(6),
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    alignSelf: 'center',
  },

  statusText: {
    fontWeight: '600',
    color: '#0c6624ff',
    fontSize: scale(13),
    textAlign: 'center',
    marginLeft: scale(5),
  },

  connectedDevice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  actionText: {
    marginTop: vScale(7),
    fontSize: scale(12),
    fontFamily: 'Poppins_500Medium',
    color: SPECS.colors.blacktext,
  },
});

export default styles;
