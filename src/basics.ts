import { Dimensions, StatusBar, Platform } from "react-native"

const isAndroid = Platform.OS === 'android'
const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

const guidelineBaseWidth = 375  // Standard base width
const guidelineBaseHeight = 812 // Standard base height (iPhone 11, avoids small heights)

// Adjusted screen height for Android (excluding StatusBar height)
const sHeight = isAndroid ? screenHeight - (StatusBar.currentHeight || 0) : screenHeight
const sWidth = screenWidth

/**
 * Horizontal Size Scale
 * @param {number} size 
 */
const hScale = (size: number) => (sWidth / guidelineBaseWidth) * size

/**
 * Vertical Size Scale with limit to prevent extreme stretching
 * @param {number} size 
 */
const vScale = (size: number) => Math.min((sHeight / guidelineBaseHeight) * size, size * 1.5)

/**
 * Font Size Scale with better readability control
 * @param {number} size 
 * @param {number} [factor] 
 */
const fScale = (size: number, factor: number = 0.5) => size + (hScale(size) - size) * factor

export { sHeight, sWidth, hScale, vScale, fScale }