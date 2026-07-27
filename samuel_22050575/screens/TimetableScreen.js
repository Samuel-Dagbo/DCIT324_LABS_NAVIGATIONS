import { View, Text, FlatList, StyleSheet } from 'react-native';

const timetable = [
  { id: '1', day: 'Monday', time: '08:00 - 10:00', course: 'DCIT 301', venue: 'LT1' },
  { id: '2', day: 'Monday', time: '12:00 - 14:00', course: 'DCIT 303', venue: 'CS Lab' },
  { id: '3', day: 'Tuesday', time: '10:00 - 12:00', course: 'DCIT 305', venue: 'LT2' },
  { id: '4', day: 'Wednesday', time: '08:00 - 10:00', course: 'DCIT 307', venue: 'LT1' },
  { id: '5', day: 'Thursday', time: '14:00 - 16:00', course: 'DCIT 309', venue: 'Online' },
  { id: '6', day: 'Friday', time: '10:00 - 12:00', course: 'DCIT 324', venue: 'Lab 3' },
];

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.day}>{item.day}</Text>
            <Text>{item.time} - {item.course}</Text>
            <Text style={styles.venue}>Venue: {item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  day: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  venue: {
    color: '#888',
    marginTop: 5,
  },
});
