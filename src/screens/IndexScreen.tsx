import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/indexScreen";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  const renderList = ({ item }: ListRenderItemInfo<any>) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Show", { id: item.id })}
      >
        <View style={styles.containerList}>
          <Text style={styles.title}>
            {item.title} - {item.id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={renderList}
        style={styles.list}
      />
    </View>
  );
};

// usando o react navigation para criar a top bar
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} color="#082032" />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;
