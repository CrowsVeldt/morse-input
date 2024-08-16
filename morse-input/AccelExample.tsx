import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AccelExample() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
      <Text>x: {x.toFixed(4)}</Text>
      <Text>y: {y.toFixed(4)}</Text>
      <Text>z: {z.toFixed(4)}</Text>
      <View>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe}>
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
