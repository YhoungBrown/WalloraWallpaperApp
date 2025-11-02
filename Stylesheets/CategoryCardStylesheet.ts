import { Dimensions, StyleSheet } from "react-native";
import { SPECS } from "../constants/Specifications";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");




const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: SCREEN_H * 0.02, 
  },
  cardImage: {
    width: SCREEN_W - SPECS.spacing.md * 2, 
    height: SCREEN_H * 0.32, 
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: SPECS.radius.lg,
  },
  cardImageStyle: {
    borderRadius: SPECS.radius.lg,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: SPECS.radius.lg,
  },
  cardContent: {
    paddingHorizontal: SPECS.spacing.md,
    paddingVertical: SPECS.spacing.md * 0.8,
  },
  cardTitle: {
    color: SPECS.colors.whitetext,
    fontFamily: "Poppins_600SemiBold",
    fontSize: SPECS.fonts.sizes.md + 4,
    marginBottom: SPECS.spacing.xs * -0.2,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    flexShrink: 1, 
  },
  cardSubtitle: {
    color: "rgba(255,255,255,0.92)",
    fontFamily: "Poppins_400Regular",
    fontSize: SPECS.fonts.sizes.sm + 1,
    marginBottom: SPECS.spacing.xs * 0.6, 
    flexShrink: 1,
  },
  chip: {
  alignSelf: "flex-start",
  paddingHorizontal: SCREEN_W * 0.04, 
  paddingVertical: SCREEN_H * 0.008,
  borderRadius: 999,
  backgroundColor: SPECS.colors.chipBg,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.16)",
  },
  chipText: {
    color: SPECS.colors.whitetext,
    fontFamily: "Poppins_500Medium",
    fontSize: SPECS.fonts.sizes.sm + SCREEN_W * 0.002, 
  },
});

export default styles;
