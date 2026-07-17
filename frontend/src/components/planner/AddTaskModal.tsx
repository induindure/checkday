import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../../theme/colors";

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: {
    name: string;
    time: string;
    repeatDays: string[];
    priority: "Low" | "Medium" | "High";
    notes: string;
  }) => void;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AddTaskModal({
  visible,
  onClose,
  onAddTask,
}: AddTaskModalProps) {
  const [taskName, setTaskName] = useState("");
  const [notes, setNotes] = useState("");

  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High"
  >("Medium");

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const onTimeChange = (_: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios");

    if (selectedDate) {
      setTime(selectedDate);
    }
  };

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSave = () => {
    if (!taskName.trim()) return;

    onAddTask({
  name: taskName,
  time: formatTime(time),
  repeatDays: selectedDays,
  priority,
  notes,
});

    setTaskName("");
    setNotes("");
    setTime(new Date());
    setSelectedDays([]);
    setPriority("Medium");

    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <Text style={styles.heading}>
              Create New Task
            </Text>

            <Text style={styles.label}>
              Task Name
            </Text>

            <TextInput
              placeholder="Enter task name..."
              value={taskName}
              onChangeText={setTaskName}
              style={styles.input}
            />

            <Text style={styles.label}>
              Time
            </Text>

            <TouchableOpacity
              style={styles.timeButton}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.timeText}>
                {formatTime(time)}
              </Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}

            <Text style={styles.label}>
              Repeat On
            </Text>

            <View style={styles.dayContainer}>
              {DAYS.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayChip,
                    selectedDays.includes(day) &&
                      styles.selectedDayChip,
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(day) &&
                        styles.selectedDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>
              Priority
            </Text>

            <View style={styles.priorityContainer}>

              {(["Low","Medium","High"] as const).map(
                (item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.priorityChip,
                      priority === item &&
                        styles.selectedPriority,
                    ]}
                    onPress={() =>
                      setPriority(item)
                    }
                  >
                    <Text
                      style={[
                        styles.priorityText,
                        priority === item &&
                          styles.selectedPriorityText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              )}

            </View>

            <Text style={styles.label}>
              Notes (Optional)
            </Text>

            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Add notes..."
              multiline
              numberOfLines={4}
              style={styles.notesInput}
            />

            <View style={styles.buttonRow}>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
              >
                <Text style={styles.saveText}>
                  Save Task
                </Text>
              </TouchableOpacity>

            </View>

          </ScrollView>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
      overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  container: {
    width: "100%",
    maxHeight: "88%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
  },

  timeButton: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },

  timeText: {
    fontSize: 16,
    color: colors.text,
  },

  dayContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  dayChip: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },

  selectedDayChip: {
    backgroundColor: colors.primary,
  },

  dayText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 13,
  },

  selectedDayText: {
    color: "#FFFFFF",
  },

  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  priorityChip: {
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  selectedPriority: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  priorityText: {
    color: "#6B7280",
    fontWeight: "600",
    fontSize: 15,
  },

  selectedPriorityText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  notesInput: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cancelButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    marginRight: 10,
    alignItems: "center",
  },

  cancelText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },

  saveButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    marginLeft: 10,
    alignItems: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },

});