import { StyleSheet } from "react-native";
import AccelExample from "./AccelExample";


export default function App() {
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
