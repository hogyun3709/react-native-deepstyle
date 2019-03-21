import React from "react";
import { Text, View } from "react-native";
import Camera from "../components/CameraObjectDetection";

export default class ObjectDetection extends React.Component {
  static navigationOptions = {
    title: "ObjectDetection"
  };

  render() {
    return <Camera />;
  }
}
