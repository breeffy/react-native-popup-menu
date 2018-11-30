# react-native-enhanced-popup-menu &middot; [![npm](https://img.shields.io/npm/v/react-native-enhanced-popup-menu.svg)](https://www.npmjs.com/package/react-native-enhanced-popup-menu) [![license](https://img.shields.io/npm/l/react-native-enhanced-popup-menu.svg)](https://github.com/likern/react-native-enhanced-popup-menu/blob/master/LICENSE)

## Note: this project is the fork of the original [react-native-material-menu](https://github.com/mxck/react-native-material-menu)

Pure JavaScript [material
menu](https://material.io/guidelines/components/menus.html) component for React
Native.

<img src="https://media.giphy.com/media/3ov9jUvQH4U82JGNRC/giphy.gif" />

## Install

```bash
npm install react-native-enhanced-popup-menu --save

or

yarn add react-native-enhanced-popup-menu
```

## Usage example

```jsx
import React from "react";
import { Text, View, Button } from "react-native";
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";

const App = (props) => {
  let textRef = React.createRef();
  let menuRef = null;

  const setMenuRef = ref => menuRef = ref;
  const hideMenu = () => menuRef.hide();
  const showMenu = () => menuRef.show(textRef.current, stickTo = Position.BOTTOM_CENTER);

  const onPress = () => showMenu();

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white"}}>
      <Text
        ref={textRef}
        style={{ fontSize: 20, textAlign: "center" }}
       >
        Text component
       </Text>

      <Button
        title="Show menu"
        onPress={onPress}
      />

      <Menu
        ref={setMenuRef}
      >
        <MenuItem onPress={hideMenu}>Item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Item 2</MenuItem>
        <MenuItem onPress={hideMenu} disabled>Item 3</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Item 4</MenuItem>
      </Menu>
    </View>
  );
};

export default App;
```

## Menu

### Properties

| name     | description                                     |     type | default |
| :------- | :---------------------------------------------- | -------: | :------ |
| children | Components rendered in menu (**required**)      |     Node | -       |
| style    | Menu style (optional)                           |    Style | -       |
| onHidden | Callback when menu has become hidden (optional) | Function | -       |

### Methods

| name   | description |
| :----- | :---------- |
| show() | Shows menu  |
| hide() | Hides menu  |

#### show method parameters
| name          | description                                                |     type  | default             |
| :------------ | :--------------------------------------------------------- | --------: | :------------------ |
| ref           | React reference to component (**required**)                | Reference | -                   |
| stickTo       | To which component border(s) we will stick menu (optional) | Position  | Position.TOP_LEFT   |
| extraOffset   | Additional offset to stickTo (optional)                    | Object    | { left: 0, top: 0 } |
| computeOffset | Additional **computed** offset to stickTo (optional)       | Function  | { left: 0, top: 0 } |

**stickTo** parameter set **relative base position** of menu, it is always **relative to component**.
##### Position enum values
| value         | description                                         |
| :------------ | :-------------------------------------------------- |
| TOP_LEFT      | Show the menu at the top left of the component      |
| TOP_RIGHT     | Show the menu at the top rigth of the component     |
| TOP_CENTER    | Show the menu at the top center of the component    |
| BOTTOM_LEFT   | Show the menu at the bottom left of the component   |
| BOTTOM_RIGHT  | Show the menu at the bottom right of the component  |
| BOTTOM_CENTER | Show the menu at the bottom center of the component |

**extraOffset** parameter set **additional offset to base position** of menu. It's used if you want customize **stickTo**, adding additional offset. **extraOffset** is an `Object` with the following allowed properties.
##### extraOffset object properties
| value  | description | type |
| :----- | :---------- | :---------- |
| top    | [Offset the top edge from menu base position](https://facebook.github.io/react-native/docs/layout-props#top) | Number |
| bottom | [Offset the bottom edge from menu base position](https://facebook.github.io/react-native/docs/layout-props#bottom) | Number |
| left   | [Offset the left edge from menu base position](https://facebook.github.io/react-native/docs/layout-props#left) | Number |
| right  | [Offset the right edge from menu base position](https://facebook.github.io/react-native/docs/layout-props#right) | Number |

| **Notes**   | **Example** |
| :----- | :---------- |
| extraOffset **can have duplicate properties** (they all will be applied correctly) | `{ top: 10, top: -5, top: 15 }`|
| extraOffset **values can be negative too** | `{ top: 10, top: -5, top: 15 }`|

**computeOffset** parameter is a **callback function** which will be called with **position and size of component** (`computeOffset(left, top, width, height)`). It's used if you want to customize **stickTo** dynamically and your computed offset depends on component position / size (for example to show menu centered you need to know component width).

##### computeOffset callback parameters
| name      | description                                                                          | type   |
| :-------- | :----------------------------------------------------------------------------------- | -----: |
| left      | position of **component** on the horizontal axis (*from top left **window** corner*) | Number |
| top       | position of **component** on the vertical axis (*from top left **window** corner*)   | Number |
| width     | width of **component**                                                               | Number |
| height    | height of **component**                                                              | Number |

**computeOffset callback** should return `Object` with the same properties as **extraOffset** `Object`.
```javascript
/* Example of computeOffset return value */
{
  top: 10,
  left: 15,
  bottom: -3,
  right: 15,
  top: 12
}
```

| **Notes** | 
| :-------- | 
| You can use **extraOffset** parameter **or computeOffset or both parameters simultaneously**. So, the final position of menu is calculated as `basePosition + extraOffset + computeOffset(left, top, width, height)` |

## MenuItem

### Properties

| name              | description              |   type | default   |
| :---------------- | :----------------------- | -----: | :-------- |
| children          | Rendered text (required) | String | -         |
| disabled          | Disabled flag            |   Bool | false     |
| disabledTextColor | Disabled text color      | String | "#BDBDBD" |
| onPress           | Called function on press |   Func | -         |
| style             | Container style          |  Style | -         |
| textStyle         | Text style               |  Style | -         |
| underlayColor     | Pressed color            | String | "#E0E0E0" |

## MenuDivider

### Properties

| name  | description |   type | default            |
| :---- | :---------- | -----: | :----------------- |
| color | Line color  | String | "rgba(0,0,0,0.12)" |

## License
**Original work** Copyright (c) 2017 Maksim Miliyutin

**Modified work** Copyright 2018 Victor Malov
