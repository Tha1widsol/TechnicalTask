# LeoVegasUK Native Candidate Task

This is a butchered version of an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Fire up the app for details of the test task 🦁

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


## Add the explaination of your changes here 🦁

### 1. Performance

- I used a single useEffect hook to fetch the users data only once with the empty dependency array. This avoids unnecessary repeated fetches, and will only fetch the data once on render.

- I extracted fetchUsers as an async function with try/catch block. This improves the readability of the function and properly handles any errors.

- I stored all the users inside of a single state called "users". This reduces duplicated state management which makes the code cleaner. The original "filteredUsers" state is maintained separately.


### 2. TypeScript

- I defined a type for the "User" with the ID and name. This ensures better type safety and code clarity. This also makes it easier to catch bugs associated with the object.

### 3. UI and Styling

- I replaced the ParallaxScrollView with the FlatList component to achieve a more simpler layout that allows scrolling to be possible to view all user results.

- I added more structured styles for the search input box and user containers. This includes padding, colour etc, which makes them look visually appealing. 

- I added a results counter at the top to let the user know how many results there are.

- I added some extra UX features to the TextInput component such as: "clearButtonMode", "autoCorrect", "keyboardType" for better user typing experience, and I also added additional props to the FlatList component: "initialNumToRender" and "keyboardShouldPersistTaps" for better accessibility and performance tuning for the list.




