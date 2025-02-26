
# React Native Scales
![npm][npmDownloads] ![PRsBadge] ![npm][npmLicense] ![npm][npmVersion]

### Scale UI elements dynamically based on screen dimensions for a consistent look across devices!

This package helps you:
- Scale pixel sizes proportionally based on different screen dimensions.
- Maintain consistent UI elements across devices, including tablets and foldable screens.
- Generate common shape styles with just one line of code.
- Easily access screen width and height.

---

## Installation  

Use either of the following commands to install:

```sh
npm i react-native-scales
```
**- OR -**
```sh
yarn add react-native-scales
```

That's it! You're ready to go. 🎉

---

## 📌 Usage

### **Basic Scalers**
These functions scale sizes dynamically based on the screen dimensions.

```ts
import { StyleSheet } from "react-native"
import { hScale, vScale, fScale } from "react-native-scales"
 
/*
Basic Scalers:

hScale: Horizontal Scaler (width-based).
vScale: Vertical Scaler (height-based, with limits to prevent extreme stretching).
fScale: FontSize Scaler (adjusts text size for readability).
*/

const styles = StyleSheet.create({
  myView: {
    width: hScale(150), 
    height: vScale(90),
    backgroundColor: "grey"
  },

  myText: {
    fontSize: fScale(15),
    color: "green"
  }
})
```

---

### **Constants**
Access screen dimensions directly.

```ts
import { StyleSheet } from "react-native"
import { sWidth, sHeight } from "react-native-scales"
 
/*
Constants:

sWidth: Screen width.
sHeight: Screen height (adjusted for Android status bar).
*/

const styles = StyleSheet.create({
  myScreenContainer: {
    width: sWidth, 
    height: sHeight,
    backgroundColor: "grey"
  }
})
```

---

### **Extras**
Generate common shapes quickly and use an advanced total size scaler.

```ts
import { StyleSheet } from "react-native"
import { rcScale, sqScale, crScale, tScale } from "react-native-scales"
 
/*
Extras:

Shapes Generator:
rcScale: Generates a scaled rectangle.
sqScale: Generates a scaled square.
crScale: Generates a scaled circle.

Advanced Scaler:
tScale: Uses screen diagonal to create balanced scaling.
*/

const styles = StyleSheet.create({
  myBlueRectangle: {
    // Params: (width, height)
    ...rcScale(150, 90),
    backgroundColor: "blue"
  },

  myGreenSquare: {
    ...sqScale(150),
    backgroundColor: "green"
  },

  myRedCircle: {
    ...crScale(150),
    backgroundColor: "red"
  },

  myView: {
    width: tScale(1.5), 
    height: tScale(2.9),
    backgroundColor: "grey"
  },
})
```

---

## 💡 Why Use This?
✔️ **Prevents UI distortion** – Avoids excessive stretching on tall screens.  
✔️ **Works on all devices** – Adapts elements for phones, tablets, and foldables.  
✔️ **Improves readability** – Ensures fonts scale naturally.  
✔️ **Saves development time** – Generate scaled shapes with one function.  

---

## 📢 Contributing  
We welcome contributions! Feel free to open pull requests or issues.  

---

[npmDownloads]: <https://img.shields.io/npm/dt/react-native-scales?label=Installs&logo=npm&style=plastic>
[npmLicense]: <https://img.shields.io/npm/l/react-native-scales?label=License&style=plastic>
[npmVersion]: <https://img.shields.io/npm/v/react-native-scales?label=Latest%20Version&style=plastic>
[PRsBadge]: <https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic>
