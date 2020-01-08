import { sWidth, sHeight, hScale, vScale } from './basics'

/**
 * Scaled Rectangle
 * @example 
 * someStyle: {
 *  ...rcScale(200, 100),
 *  backgroundColor: 'cyan'
 * }
 * @param size 
 */
const rcScale = (width: number, height: number) => ({
    width: hScale(width),
    height: vScale(height),
})

/**
 * Scaled Square
 * @example 
 * someStyle: {
 *  ...sqScale(20),
 *  backgroundColor: 'cyan'
 * }
 * @param size 
 */
const sqScale = (size: number) => ({
    alignItems: "center",
    justifyContent: "center",
    height: hScale(size),
    width: hScale(size),
})

/**
 * Scaled Circle
 * @example 
 * someStyle: {
 *  ...crScale(20),
 *  backgroundColor: 'cyan'
 * }
 * @param size 
 */
const crScale = (size: number) => ({
    alignItems: "center",
    justifyContent: "center",
    height: hScale(size),
    width: hScale(size),
    borderRadius: hScale(size) / 2
})


/**
 * Total Size Scale
 * @param {number} size 
 */
const tScale = (size: number) => (Math.sqrt((sHeight * sHeight) + (sWidth * sWidth)) * size) / 100

export { rcScale, sqScale, crScale, tScale }