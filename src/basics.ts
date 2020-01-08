import { Dimensions, StatusBar, Platform } from "react-native"

const isAndroid = Platform.OS === 'android' && Platform.Version > 26
const { width: screenWidth, height: screenHeight } = Dimensions.get(isAndroid ? "screen" : "window")

const is_X_Ratio = ((screenHeight / screenWidth) == (812 / 375))

const guidelineBaseWidth = 375
const guidelineBaseHeight = is_X_Ratio ? 812 : 667


/**
 * Screen Width
 */
const sWidth = screenWidth

/**
 * Screen Height
 */
const sHeight = isAndroid ? screenHeight + StatusBar.currentHeight : screenHeight

/**
 * Horizontal Size Scale
 * @param {number} size 
 */
const hScale = (size: number) => (sWidth / guidelineBaseWidth) * size

/**
 * Vertical Size Scale
 * @param {number} size 
 */
const vScale = (size: number) => (sHeight / guidelineBaseHeight) * size


/**
 * Font Size Scale
 * @param {number} size 
 * @param {number} [factor] 
 */
const fScale = (size: number, factor: number = 0.5) => size + (hScale(size) - size) * factor

export { sHeight, sWidth, hScale, vScale, fScale }