import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#082032",
    flex: 1,
  },

  list: {
    borderBottomWidth: 1,
    borderBottomColor: "#334756",
  },

  containerList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderColor: "#334756",
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 18,
    color: "white",
  },

  icon: {
    fontSize: 24,
    color: "#FF4C29",
  },
});

export default styles;
