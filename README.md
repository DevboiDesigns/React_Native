# React Native Config

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Native Core Components](https://reactnative.dev/docs/components-and-apis)
- Expo CLI (very convenient, less friction)
- React Native CLI

## Expo Config

- [Expo Docs](https://docs.expo.dev)
- `sudo npm install -g expo-cli`
- download Expo app from app store

**Init new Project**

- `expo init <NameOfProject>`

**Start App**

- `npm start`

**Will generate URL for dev tools**

- scan QR code from dev tools URL on phone

**Commands available**

- cd TestProj
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web

### Android Studio

- Virtual Device Manager
- Create Device to add Emulator/ Sim

# Components as Compiled

| Web Browser | Native Components (android) | Native Components (iOS) | React Native JSX |
| ----------- | --------------------------- | ----------------------- | ---------------- |
| `<div>`     | android.view                | UIView                  | `<View>`         |
| `<input>`   | EditText                    | UITextField             | `<TextInput>`    |

## Core Componets

- View - (div) - can only hold other components
- Text
- StyleSheet
- Activity Indicator
- Button
- FlatList
- Image
- ImageBackground
- KeyboardAvoidingView
- Modal
- Pressable
- RefreshControl
- ScrollView
- SectionList
- StatusBar
- Switch
- TextInput
- TouchableHighlight
- TouchableOpacity
- TouchableWithoutFeedback
- VirtualizedList

## Life Cycle

- App.js - root
