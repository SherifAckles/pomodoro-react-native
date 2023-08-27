import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";


export default function OnboardingScreen() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </View>
  );
}
