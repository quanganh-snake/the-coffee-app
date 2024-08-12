import { Dimensions, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

const CARD_WIDTH = Dimensions.get('window').width * 0.32
export const styles = StyleSheet.create({
  cardLinearGradientBox: {
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cardImageBG: {
    position: 'relative',
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_12,
    overflow: 'hidden',
  },
  cardRatingBox: {
    backgroundColor: COLORS.primaryBlackRGBA,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_2,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  cardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    lineHeight: SPACING.space_20
  },
  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  cardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },

  cardFooterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_16,
  },
  cardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  cardPrice: {
    color: COLORS.primaryWhiteHex,
  }
})