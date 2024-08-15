import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  priceFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    padding: SPACING.space_20
  },
  priceContainer: {
    alignItems: "center",
    width: 100
  },
  priceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex
  },
  priceTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_4
  },
  priceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
  },
  priceCurrency: {
    color: COLORS.primaryOrangeHex
  },
  price: {
    color: COLORS.primaryWhiteHex
  },
  paymentBotton: {
    height: SPACING.space_28 * 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING.space_20,
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  buttonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  },
})