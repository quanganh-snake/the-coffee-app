import { Dimensions, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  scrollViewFlex: {
    flexGrow: 1
  },
  title: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  inputSearchContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  inputSearchIcon: {
    marginHorizontal: SPACING.space_20
  },
  inputSearchText: {
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    flex: 1
  },
  inputSearchCloseIcon: {
    marginHorizontal: SPACING.space_20
  },
  categoryScrollViewBox: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20
  },
  categoryItemBox: {
    paddingHorizontal: SPACING.space_16,
  },
  categoryItemInner: {
    alignItems: 'center'
  },
  activeCategory: {
    width: SPACING.space_10,
    height: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex
  },
  categoryText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4
  },
  categoryTextActive: {
    color: COLORS.primaryOrangeHex
  },
  categoryTextInActive: {},
  flatListCoffeeContainer: {
    gap: SPACING.space_20,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_30
  },
  coffeeBeansTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    color: COLORS.primaryWhiteHex
  },
  emptyCoffeeBox: {
    width: Dimensions.get('window').width - SPACING.space_20 * 2,
    // backgroundColor: COLORS.primaryOrangeHex,
    paddingVertical: SPACING.space_20 * 1.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_10,
  },
  emptyCoffeeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex
  }
})