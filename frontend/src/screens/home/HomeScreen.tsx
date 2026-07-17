import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import GreetingCard from "../../components/home/GreetingCard";
import SummaryCard from "../../components/home/SummaryCard";
import TaskCard from "../../components/home/TaskCard";
import HabitCard from "../../components/home/HabitCard";
import { colors } from "../../theme/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <GreetingCard name="Indu" />

        <Text style={styles.sectionTitle}>Today's Summary</Text>

        <View style={styles.summaryRow}>
          <SummaryCard title="Tasks" value={5} />

          <View style={styles.space} />

          <SummaryCard title="Completed" value={2} />

          <View style={styles.space} />

          <SummaryCard title="Habits" value={3} />
        </View>

        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <TaskCard
          title="Complete React Native Assignment"
          time="10:00 AM"
          completed={false}
        />

        <TaskCard
          title="Team Project Meeting"
          time="2:00 PM"
          completed={true}
        />

        <TaskCard
          title="Review Notes"
          time="6:00 PM"
          completed={false}
        />

        <Text style={styles.sectionTitle}>Habits</Text>

        <HabitCard
          title="Drink Water"
          streak={12}
        />

        <HabitCard
          title="Read 20 Pages"
          streak={7}
        />

        <HabitCard
          title="Exercise"
          streak={15}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 15,
    marginTop: 10,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  space: {
    width: 12,
  },
});