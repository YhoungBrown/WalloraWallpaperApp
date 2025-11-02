import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const { width, height } = Dimensions.get('window');

const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;


const scale = (size: number) => (width / 375) * size; 
const verticalScale = (size: number) => (height / 812) * size; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPECS.colors.bg,
  },
  contentContainer: {
    paddingHorizontal: scale(18),
  },
  header: {
    marginBottom: verticalScale(10),
    marginTop: verticalScale(30),
  },
  backText: {
    fontSize: scale(13),
    fontFamily: 'Poppins_400Regular',
    color: SPECS.colors.muted,
  },
  heading: {
    fontSize: scale(30),
    fontFamily: 'Poppins_400Regular',
    color: '#111',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: scale(20),
    overflow: 'hidden',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: height * 0.6,
  },
  modalTitle: {
    fontSize: scale(18),
    fontFamily: 'Poppins_600SemiBold',
    color: '#111',
    marginVertical: verticalScale(10),
  },
  closeBtn: {
    position: 'absolute',
    top: verticalScale(20),
    right: scale(20),
    borderRadius: scale(30),
    padding: scale(6),
  },
  backarrowSection: {
    flexDirection: 'row',
    gap: scale(5),
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: SPECS.colors.bg,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    elevation: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#00000010",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoMark: {
    width: wp(9), 
    height: wp(9),
    borderRadius: SPECS.radius.md - 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp(2.5),
    marginBottom: wp(3)
  },
  logoMarkInner: {
    width: wp(7),
    height: wp(7),
    borderRadius: SPECS.radius.md - 8,
  },
  logoText: {
    fontSize: RFValue(30, 680), 
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  appName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: SPECS.fonts.sizes.sm + 2,
    color: SPECS.colors.blacktext,
  },
  menuIcon: {
    padding: wp(1.5), 
  },
  
});

export default styles;
