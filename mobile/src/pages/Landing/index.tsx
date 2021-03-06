import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import styles from "./styles";

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handlenavigationToStudyPages() {
    navigate("Study");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg} />
      <Text style={styles.title}>
        Welcome, {"\n"}
        <Text style={styles.titleBold}>What do you wanna do? </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handlenavigationToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Study</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Give Classes</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total of {totalConnections} connections were made.
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
