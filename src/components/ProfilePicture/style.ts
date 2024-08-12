import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  }
})