import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/en/d/d0/Courteney_Cox_as_Monica_Geller.jpg",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}> Monica Geller</Text>
          <Text style={styles.subject}> Arts</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Great cheff. {"\n"} {"\n"}
        Monica was born April 22, 1969. Monica is Ross' younger sister, and the
        daughter of Jack and Judy Geller. Monica, like the rest of her family,
        is Jewish. She had a slightly difficult childhood from Ross,
        characterized by the bickering which took place between her and her
        brother (some culminating in memorable events such as the Geller Cup,
        which took place every Thanksgiving).
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Cost/Hour {"   "}
          <Text style={styles.priceValue}> U$ 45.00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}> Contact </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
