import { StyleSheet, FlatList, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
}

export default function TabTwoScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('')

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      if (response.ok) setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder='Search users...'
          clearButtonMode='while-editing'
          autoCorrect={false}
          keyboardType='default'
        />
      </View>

      <Text>
        {filteredUsers.length === 0
          ? 'No results found'
          : `${filteredUsers.length} result${filteredUsers.length > 1 ? 's' : ''} found`}
      </Text>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyboardShouldPersistTaps='handled'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f6fa',
    paddingTop: 50,
    rowGap: 10,
    paddingHorizontal: 16,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  user: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginVertical: 6,
  },


});
