import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";
import styles from "../styles/createScreen";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};

export default CreateScreen;
