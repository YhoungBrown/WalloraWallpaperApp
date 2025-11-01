import { Dimensions, StyleSheet } from "react-native";
import { SPECS } from "../constants/Specifications";


const { width: SCREEN_W } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 16,
  },
  cardImage: {
    width: SCREEN_W - SPECS.spacing.md * 2,
    height: 250,
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
    padding: SPECS.spacing.md,
    paddingBottom: SPECS.spacing.md + 4,
  },
  cardTitle: {
    color: SPECS.colors.whitetext,
    fontFamily: "Poppins_600SemiBold",
    fontSize: SPECS.fonts.sizes.md + 4,
    marginBottom: SPECS.spacing.xs - 10,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardSubtitle: {
    color: "rgba(255,255,255,0.92)",
    fontFamily: "Poppins_400Regular",
    fontSize: SPECS.fonts.sizes.sm + 1,
    marginBottom: SPECS.spacing.xs - 6,
  },
  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: SPECS.spacing.sm,
    paddingVertical: SPECS.spacing.xs - 2,
    borderRadius: 999,
    backgroundColor: SPECS.colors.chipBg,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
  },
  chipText: {
    color: SPECS.colors.whitetext,
    fontFamily: "Poppins_500Medium",
    fontSize: SPECS.fonts.sizes.sm,
  },
});

export default styles;
