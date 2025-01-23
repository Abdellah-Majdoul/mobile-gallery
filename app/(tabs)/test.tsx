import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer"
const Test = () => {
  const backgroundImage = require("../../assets/images/background-image.png");
  const [image, setImage] = useState<string | null>(null);

  const handleGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri); // Récupère l'URI de l'image sélectionnée.
    } else {
      Alert.alert("No image selected");
      console.log("not slelell");
      
    }
  };

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={image ? { uri: image } : backgroundImage} />
      <View style={styles.btn}>
        
        <Button title="Open Gallery" onPress={handleGallery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#010101",
  },
  btn:{
    paddingTop:42,
  },
});

export default Test;

