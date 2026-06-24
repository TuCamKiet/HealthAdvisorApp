import { View, Text, Button } from "react-native";

import { useAppDispatch, useAppSelector } from "../../../app/store/hook";

import { setSteps } from "../slices/dashboardSlice";

export default function DashboardScreen() {
  const dispatch = useAppDispatch();

  const steps = useAppSelector((state) => state.dashboard.steps);

  return (
    <View>
      <Text>Steps: {steps}</Text>

      <Button
        title="Add 1000 Steps"
        onPress={() => dispatch(setSteps(steps + 1000))}
      />
    </View>
  );
}
