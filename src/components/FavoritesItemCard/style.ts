import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  favouriteContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: "hidden",
  },
  containerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  descTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex
  },
  descText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  }
})