import React from "react";
import { Image, StyleSheet } from "react-native";

type Props = {
  imgSource: { uri: string } | number; // URI pour une image distante ou un nombre pour `require`.
};

const ImageViewer: React.FC<Props> = ({ imgSource }) => {
  return <Image source={imgSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 19,
    backgroundColor: "#ddd", // Couleur de fond pour les cas où l'image est manquante.
  },
});

export default ImageViewer;
