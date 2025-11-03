import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginBottom: wp(3),
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
  backarrowSection: {
    flexDirection: "row",
    gap: scale(5),
    alignItems: "center",
    marginTop: verticalScale(30),
  },
  backText: {
    fontSize: scale(13),
    fontFamily: "Poppins_400Regular",
    color: SPECS.colors.muted,
  },
  header: {
    marginBottom: verticalScale(10),
    marginTop: verticalScale(30),
  },
  heading: {
    fontSize: scale(30),
    fontFamily: "Poppins_400Regular",
    color: "#111",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalBox: {
    width: "90%",
    maxHeight: "90%",
    backgroundColor: "#fff",
    borderRadius: scale(20),
    overflow: "hidden",
    alignItems: "center",
  },
  imageContainer: {
  width: '100%',
  height: height * 0.4, 
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  overflow: 'hidden',
  backgroundColor: '#f0f0f0',
  justifyContent: 'center',
  alignItems: 'center',
},
  modalImage: {
    width: "100%",
    height: height * 0.4,
  },
  modalDetails: {
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(20),
    width: "100%",
  },
  nameLabel: {
    fontSize: scale(12),
    fontFamily: "Poppins_400Regular",
    color: SPECS.colors.muted,
    marginTop: verticalScale(10),
  },
  modalTitle: {
    fontSize: scale(20),
    fontFamily: "Poppins_700Bold",
    color: "#111",
    marginVertical: verticalScale(9),
  },
  modalSubTitle: {
    fontSize: scale(20),
    fontFamily: "Poppins_500Medium",
    color: "#111",
    marginVertical: verticalScale(3),
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: scale(8),
    marginVertical: verticalScale(6),
    marginRight: 'auto',
  },
  tag: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: scale(10),
    color: "#555",
  },
  descLabel: {
    fontSize: scale(12),
    color: "#888",
    marginTop: verticalScale(10),
    fontFamily: "Poppins_400Regular"
  },
  descContainer: {
  position: 'relative',
  maxHeight: verticalScale(100), 
  overflow: 'hidden',
  marginTop: verticalScale(6),
  marginBottom: verticalScale(10),
},
  descText: {
    fontSize: scale(14),
    color: "#111",
    marginTop: verticalScale(4),
    lineHeight: scale(20),
    fontWeight: "600"
  },
  textFade: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: verticalScale(70), 
},
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: verticalScale(15),
    marginTop: verticalScale(40),
    marginRight: 'auto',
    gap: 10,
  },
  iconBtn: {
    padding: scale(10),
    backgroundColor: "#f0f0f0",
    borderRadius: scale(12),
  },
  closeBtn: {
    position: "absolute",
    top: verticalScale(12),
    right: scale(12),
    padding: scale(8), 
    borderRadius: scale(30),
    backgroundColor: "rgba(255,165,0,0.3)", 
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    },
  toast: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 4,
    zIndex: 100,
  },
  toastText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#111",
  },

});

export default styles;
