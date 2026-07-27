import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditProfileScreen({ route, navigation }) {
  const [name, setName] = useState(route.params?.name || '');
  const [bio, setBio] = useState(route.params?.bio || '');
  const [programme, setProgramme] = useState(route.params?.programme || '');

  function handleSave() {
    navigation.navigate('Main', {
      screen: 'Dashboard',
      params: {
        screen: 'Profile',
        params: { name, bio, programme },
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} style={styles.input} />
      <Text>Programme</Text>
      <TextInput value={programme} onChangeText={setProgramme} style={styles.input} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
});
