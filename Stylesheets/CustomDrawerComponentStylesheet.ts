import { SPECS } from "@/constants/Specifications";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPECS.colors.bg,
    paddingTop: SPECS.spacing.lg + 27,
  },
  menu: {
    flex: 1,
  },
  label: {
    fontSize: SPECS.fonts.sizes.md,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  activeLabel: {
    color: '#FF6A88',
    fontWeight: '600',
  },
  activeItem: {
    backgroundColor: 'rgba(255,106,136,0.08)',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginHorizontal: SPECS.spacing.md,
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  customLabel: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#111',
  },
   row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
    flexShrink: 1
  },
  itemContainer: {
    marginBottom: 6,
    paddingHorizontal: 10,
  },
  itemOuterContainer: {
    marginVertical: 3,
  }
});

export default styles;