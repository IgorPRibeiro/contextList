import React, { useState } from "react";
import { Button, TouchableOpacity, Text, TextInput, View } from "react-native";
import styles from "../styles/postForm";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>ENTER TITLE</Text>

        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>ENTER CONTENT</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.buttom}
        onPress={() => onSubmit(title, content)}
      >
        <Text style={styles.buttonText}>Save Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;
