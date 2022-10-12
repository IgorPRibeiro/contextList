import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    margin: 5,
  },

  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#2C394B",
    padding: 5,
    marginBottom: 15,
    margin: 5,
    borderRadius: 6,
    backgroundColor: "#334756",
    color: "#fff",
  },

  buttom: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#FF4C29",
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  buttonText: {
    color: "#2C394B",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
