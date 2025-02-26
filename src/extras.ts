import { sWidth, sHeight, hScale, vScale } from './basics'

/**
 * Scaled Rectangle
 * Ensures elements don't stretch disproportionately.
 * @param {number} width 
 * @param {number} height 
 */
const rcScale = (width: number, height: number) => ({
    width: hScale(width),
    height: vScale(height),
})

/**
 * Scaled Square
 * Uses width-based scaling for better consistency.
 * @param {number} size 
 */
const sqScale = (size: number) => ({
    alignItems: "center",
    justifyContent: "center",
    height: hScale(size),
    width: hScale(size),
})

/**
 * Scaled Circle
 * Uses width-based scaling to maintain a perfect circle.
 * @param {number} size 
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
 * Uses screen diagonal for a balanced scale.
 * @param {number} size 
 */
const tScale = (size: number) => (Math.sqrt((sHeight ** 2) + (sWidth ** 2)) * size) / 100

export { rcScale, sqScale, crScale, tScale }
