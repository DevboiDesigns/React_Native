**Work in Progress**

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

**LAUNCH EMULATOR & SIMULATOR**

- a (android)
- i (iOS)

### Android Studio

- Virtual Device Manager
- Create Device to add Emulator/ Sim

# Components as Compiled

- Import Core Components

```jsx
import { StyleSheet, Text, View, Button } from 'react-native';
```

| Web Browser | Native Components (android) | Native Components (iOS) | React Native JSX |
| ----------- | --------------------------- | ----------------------- | ---------------- |
| `<div>`     | android.view                | UIView                  | `<View>`         |
| `<input>`   | EditText                    | UITextField             | `<TextInput>`    |
| ...         | ...                         | ...                     | ...              |
| ...         | ...                         | ...                     | ...              |

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

## ScrollView

- nest in `<View>` to control style and spacing

```jsx
<View style={styles.goalsContainer}>
  <ScrollView alwaysBounceVertical={false}>
    {courseGoals.map((goal) => (
      <View style={styles.goalItem} key={String(goalIndex++)}>
        <Text style={styles.goalText}>{goal}</Text>
      </View>
    ))}
  </ScrollView>
</View>
```

## Flatlist

- dynamic lists that can be very long
- will render view only when user scrolls to index
- best practice: data should be an object with key property

```jsx
{ text: enteredGoalText, key: Math.random().toString() }
```

**Props**

- data: `data={courseGoals}` (array of data)
- renderItem: `(itemData) => {}` (view that will be rendered to present data)
  1. itemData.index
  2. itemData.item

```jsx
<View style={styles.goalsContainer}>
  <FlatList
    data={courseGoals}
    renderItem={(itemData) => {
      return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
      );
    }}
    alwaysBounceVertical={false}
  />
</View>
```

**If you can NOT manipulate data to have key prop**

- Add this property to `Flatlist`

`keyExtractor={(item, index) => {}}`

**Item**

```jsx
{ text: enteredGoalText, id: Math.random().toString() }
```

**Example**

```jsx
<FlatList
  data={courseGoals}
  renderItem={(itemData) => {
    return (
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    );
  }}
  keyExtractor={(item, index) => {
    return item.id;
  }}
  alwaysBounceVertical={false}
/>
```

## Pressable (replacement for all Touchable comp's)

- wrap view with `<Pressable>` component
- provide function to `onPress={}` - handles tap

**Example**

```jsx
<Pressable onPress={}>
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{props.text}</Text>
  </View>
</Pressable>
```

### Android (ripple effect)

- make sure to set Pressable on Text

```jsx
<View style={styles.goalItem}>
  <Pressable
    android_ripple={{ color: '#dddddd' }}
    onPress={props.deleteGoal.bind(this, props.id)}
  >
    <Text style={styles.goalText}>{props.text}</Text>
  </Pressable>
</View>
```

### iOS

- set style property from pressed object

```jsx
<Pressable
  onPress={props.deleteGoal.bind(this, props.id)}
  // Object destructuring to get 'pressed'
  style={({ pressed }) => pressed && styles.pressedItem}
>
  <Text style={styles.goalText}>{props.text}</Text>
</Pressable>

// Style
pressedItem: {
    opacity: 0.5,
  },
```

## Modal

- pop up / slide up view that requires action and then disappear

```jsx
<Modal visible={props.showModal} animationType="slide">
  <View style={styles.buttonView}>
    <View style={styles.button}>
      <Button title="Add Goal" onPress={props.addGoalHandler}></Button>
    </View>
    <View style={styles.button}>
      <Button title="Cancel" onPress={props.hideModal} />
    </View>
  </View>
</Modal>
```

## Image

```jsx
<Image source={} />
```

- create images folder in assets folder

`assets -> images`

```jsx
<Image source={require('../assets/images/target.png')} style={styles.image} />
```

## StatusBar

- allows you to set config for users phone status bar
- light & dark mode (auto does not always work)

```jsx
<StatusBar style="light" />
```

# Fragment Views

- can wrap in Fragment to duplicate views without using `<View>`

`<></>`

```jsx
 <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={showModalHandler}
        />
 </>
```

# Life Cycle

- App.js - root
- all components must be conntained within a view

# State

- `useState()`
- should call a function to update state not change state directly

**Example**

```jsx
import { useState } from 'react';

const [courseGoals, setCourseGoals] = useState([]);

function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
    return currentCourseGoals.filter((goal) => goal.id !== id);
  });
}
```

# Styles

- Inline

```jsx
<Text style={{ margin: 14, borderWidth: 2, borderColor: 'blue', padding: 16 }}>
  Hello World
</Text>
```

- scalable

```jsx
<Text style={styles.textView}>Hello World</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    margin: 14,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16,
  },
});
```

## Background Color - global

- in `app.json`
- add property `"backgroundColor": "#FFFFFF"`
- does not apply to `Modal`s

```json
"expo": {
    "name": "ExampleExpoProj",
    "slug": "ExampleExpoProj",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "backgroundColor": "#FFFFFF", // ----------------
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
}
```

## Color parameters

- `borderColor: #fff`
- `borderColor: #cccfff`
- `borderColor: rgb()`
- `borderColor: hsl()`
- `borderColor: rgba()`
- `borderColor: 'red'`

## Width parameters

- `width: '80%'`

# Flexbox

- all views by default use flexbox
- defaults to column
- layouts typically created with
- similar to browser CSS flexbox
- -> Cross axis (left to right)
- ^ Main axis (top to bottom)

## Setting direction

- `flexDirection: 'column' | 'row'` (row: left to right)

### Main axis

- row: left to right
- row-reverse: right to left
- column: top to bottom
- column-reverse: bottom to top

**Align with**

- `justifyContent: ''`

### Cross axis

- row: top to bottom
- row-reverse: bottom to top
- column: left to right
- column-reverse: right to left

**Align with**

- `alignItems: ''`

### Flex property

- apply to child views
- divides space by ratio of values
- highest number gets the most space and distrubeted accordingly for rest of views

# iOS vs Android

- Text components on iOS does not have `borderRadius`

```jsx
<View style={styles.goalItem} key={String(goalIndex++)}>
  <Text style={styles.textStyle}>{goal}</Text>
</View>
```

- style

```jsx
goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
```

# Splitting Components

**Example Componet**

```jsx
// do not need to import React anymore
import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
```

**Example Usage**

```jsx
import GoalItem from './components/GoalItem';

<FlatList
  data={courseGoals}
  renderItem={(itemData) => {
    return <GoalItem text={itemData.item.text} />;
  }}
  keyExtractor={(item, index) => {
    return item.id;
  }}
  alwaysBounceVertical={false}
/>;
```

# Conditional View Render

```jsx
{
  modalIsVisible && (
    <GoalInput
      goalInputHandler={goalInputHandler}
      addGoalHandler={addGoalHandler}
      enteredGoalText={enteredGoalText}
    />
  );
}
```
