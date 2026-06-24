import { Button, View } from "react-native";

export default function LoginScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Go Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}
