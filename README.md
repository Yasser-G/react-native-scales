
# React Native Scales
![npm][npmDownloads] ![PRsBadge] ![npm][npmLicense] ![npm][npmVersion]

### Scale your vertical and horizontal pixel sizes on different screens' dimensions, .. And More !

- Scale pixel sizes on different screens' dimensions
- Generate common styles' shapes in one line
- Easily Get screen width and height.

## Instalation 


`npm i react-native-scales`  **- OR -**  `yarn add react-native-scales`

###  ***Then.. Your Are Done !*** 





## Usage

###### Basic Scalers

```ts
import { StyleSheet } from "react-native"
import { hScale, vScale, fScale } from "react-native-scales"
 
/*
Basic Scalers:

hScale: Horizontal Scaler.
vScale: Vertical Scaler.
fScale: FontSize Scaler.

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

###### Constants

```ts
import { StyleSheet } from "react-native"
import { sWidth, sHeight } from "react-native-scales"
 
/*
Constants:

sWidth: Screen Width value.
sHeight: Screen Height value.

*/
const styles = StyleSheet.create({

  myScreenContainer: {
    width: sWidth, 
    height: sHeight,
    backgroundColor: "grey"
  }

})

```

###### Extras

```ts
import { StyleSheet } from "react-native"
import { rcScale, sqScale, crScale, tScale } from "react-native-scales"
 
/*
Extras:

Shapes Generator
rcScale: generates scaled Rectangle.
sqScale: generates scaled Square.
crScale: generates scaled Circle.

Extra Size Scaler:
tScale: Total Size Scaler.

*/
const styles = StyleSheet.create({

  myBlueRecatngle: {
    // params (width, height)
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



[npmDownloads]: <https://img.shields.io/npm/dt/react-native-scales?label=Installs&logo=npm&style=plastic>
[npmLicense]: <https://img.shields.io/npm/l/react-native-scales?label=License&style=plastic>
[npmVersion]: <https://img.shields.io/npm/v/react-native-scales?label=Latest%20Version&style=plastic>
[PRsBadge]: <https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic>
