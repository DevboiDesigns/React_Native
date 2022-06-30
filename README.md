# React Native

- Expo to view app

## Styles

- Flexbox

* to handle notch and difference in ios & android

```js
import { Platform } from "react-native";
```

```js
padding: Platform.OS === "ios" ? 50 : 100;
```

## iOS Spacing / Padding

- Safe Area View
- avoid the notch
- iOS only automatically keeps in Bounds
- seperate padding will be ignored and can be applied to Android only

```js
import { SafeAreaView } from "react-native";
```

- usage

```js
export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}
```

## Android Spacing / Padding

- Status bar detects necessary padding (similar to SafeAreaView for iOS)

```js
import { Platform, StatusBar } from "react-native";
```

- usage

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
```

## Basic Starting Setup

```js
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
// Colors
import { colors } from "./src/utils/colors";
// Features
import { Focus } from "./src/features/Focus";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
```

# React Native Paper - components

- [Docs](https://callstack.github.io/react-native-paper/)

```js
import { TextInput } from "react-native-paper";
```

- usage

```js
export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput label="What would you like to focus on?" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
```

### Using State

```js
import React, { useState } from "react"; // ------------------------------------ Import
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => {
  const [subject, setSubject] = useState(null); // ------------------------------------ Set Constant

  console.log(subject);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        //
        ---------------------------------------------------------------------------
        Usage
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 50,
    justifyContent: "top",
  },
});
```

### Fragment

- define multiple elements without defining in same view

`<>#Views#</>`

```js
<>
  <View style={styles.timingButton}>
    <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
  </View>
  <View style={styles.timingButton}>
    <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
  </View>
  <View style={styles.timingButton}>
    <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
  </View>
</>
```
