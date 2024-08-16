import { StyleSheet } from "react-native";
import AccelExample from "./AccelExample";
import parseMorse from "./parseMorse";

export default function App() {
  parseMorse() 
  return <AccelExample />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
