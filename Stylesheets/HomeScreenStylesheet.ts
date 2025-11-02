import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPECS.colors.bg,
  },
  scroll: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(3),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleBlock: {
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  titleText: {
    fontFamily: "Poppins_700Bold",
    fontSize: SPECS.fonts.sizes.lg,
    lineHeight: 36,
    color: SPECS.colors.blacktext,
  },
  subtitleText: {
    marginTop: hp(1),
    color: SPECS.colors.muted,
    fontSize: SPECS.fonts.sizes.md,
    fontFamily: "Poppins_400Regular",
  },
  sectionHeader: {
    marginTop: hp(3),
    marginBottom: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: SPECS.colors.blacktext,
  },
  seeAll: {
    fontFamily: "Poppins_400Regular",
    color: SPECS.colors.muted,
    fontSize: SPECS.fonts.sizes.sm + 1,
  },
  list: {
    marginTop: hp(0.8),
  },
});

export default styles;
