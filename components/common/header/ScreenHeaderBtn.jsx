import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
import { useNavigation } from "@react-navigation/native";

const ScreenHeaderBtn = ({ iconUrl, dimension, home, left }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => !home && navigation.goBack()}
      style={styles.btnContainer}
    >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
