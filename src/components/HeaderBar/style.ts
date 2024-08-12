import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex
  }
})