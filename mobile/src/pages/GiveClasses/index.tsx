import React from "react";
import { View, Text, ImageBackground } from "react-native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.content}
        source={giveClassesBgImage}
      >
        <Text style={styles.title}>Do you wanna be a teacher? </Text>
        <Text style={styles.description}>
          At first you should sign up on our web platform!
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}> Alright</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
