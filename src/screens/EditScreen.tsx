import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import BlogPostForm from "../Components/BlogPostForm";
import { Context } from "../context/BlogContext";
import styles from "../styles/editScreen";

const EditScreen = ({ navigation }) => {
  const _id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blog) => blog.id === _id);

  return (
    <View style={styles.container}>
      <BlogPostForm
        onSubmit={(title, content) => {
          editBlogPost(_id, title, content, () => navigation.pop());
        }}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
      />
    </View>
  );
};

export default EditScreen;
