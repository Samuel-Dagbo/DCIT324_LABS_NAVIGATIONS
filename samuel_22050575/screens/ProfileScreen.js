import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const name = route.params?.name || 'Samuel';
  const bio = route.params?.bio || 'Passionate about mobile development';
  const programme = route.params?.programme || 'BSc. Information Technology';
  const indexNumber = '22050575';
  const level = '300';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Name: {name}</Text>
      <Text>Index Number: {indexNumber}</Text>
      <Text>Programme: {programme}</Text>
      <Text>Level: {level}</Text>
      <Text>Bio: {bio}</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile', { name, bio, programme })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
});
