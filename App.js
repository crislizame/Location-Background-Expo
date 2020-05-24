import React from "react";
import Setup from "./src/boot/setup";
import Font from "expo-font";
import {AsyncStorage} from "react-native";

export default class App extends React.Component {

  render() {

    return <Setup />;
    
  }
}
