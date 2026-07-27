import { View, Text, FlatList, StyleSheet } from 'react-native';

const announcements = [
  { id: '1', title: 'Semester Break', date: '2026-08-10', text: 'Semester break begins August 10th.' },
  { id: '2', title: 'Course Registration', date: '2026-07-28', text: 'Course registration for next semester is now open.' },
  { id: '3', title: 'Library Hours', date: '2026-07-25', text: 'Library will remain open until 10pm during exams.' },
  { id: '4', title: 'Sports Fest', date: '2026-08-05', text: 'Annual sports festival will be held on August 5th.' },
  { id: '5', title: 'Internship Deadline', date: '2026-07-30', text: 'Submit internship reports by July 30th.' },
];

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text>{item.text}</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#888',
    marginBottom: 5,
  },
});
