import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = ({}) => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const handleClick = () => {
    searchTerm &&
      navigation.navigate("Search", {
        item: searchTerm,
      });
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Jyoti Prakash</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate("Search", {
                  item: item,
                });
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
