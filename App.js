// // L05 Activity 4
// import React from 'react';
// import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
//
// const images = {
//     1: require('./public/pineapple.jpg'),
//     2: require('./public/mango.jpg'),
//     3: require('./public/strawberry.jpg'),
//     4: require('./public/blueberry.jpg'),
//     5: require('./public/orange.jpg'),
//     6: require('./public/lemon.jpg'),
//     7: require('./public/peach.jpg'),
//     8: require('./public/cherry.jpg'),
//     9: require('./public/watermelon.jpg'),
//     10: require('./public/cantaloupe.jpg'),
// };
//
// const FRUITS = {
//     Tropical: { color: 'rgba(255,215,0,0.6)', icon: '🍍' },
//     Berries: { color: 'rgba(255,105,180,0.42)', icon: '🍓' },
//     Citrus: { color: 'rgba(255,165,0,0.4)', icon: '🍊' },
//     StoneFruits: { color: 'rgba(255,192,203,0.39)', icon: '🍑' },
//     Melons: { color: 'rgba(144,238,144,0.66)', icon: '🍉' },
// };
//
// const FRUIT_LIST = {
//     Tropical: [
//         { name: 'Pineapple', id: 1 },
//         { name: 'Mango', id: 2 },
//     ],
//     Berries: [
//         { name: 'Strawberry', id: 3 },
//         { name: 'Blueberry', id: 4 },
//     ],
//     Citrus: [
//         { name: 'Orange', id: 5 },
//         { name: 'Lemon', id: 6 },
//     ],
//     StoneFruits: [
//         { name: 'Peach', id: 7 },
//         { name: 'Cherry', id: 8 },
//     ],
//     Melons: [
//         { name: 'Watermelon', id: 9 },
//         { name: 'Cantaloupe', id: 10 },
//     ],
// };
//
// const getFruitImageUrl = (id) => images[id];
//
// const FruitItem = ({ fruit }) => (
//     <TouchableOpacity style={styles.item}>
//         <Text style={styles.name}>{fruit.name}</Text>
//         <Image source={getFruitImageUrl(fruit.id)} style={styles.image} />
//     </TouchableOpacity>
// );
//
// const FruitList = ({ category }) => (
//     !category ? null :
//         <View style={[styles.section, { backgroundColor: FRUITS[category].color }]}>
//             <Text style={styles.header}>{FRUITS[category].icon} {category}</Text>
//             <FlatList
//                 data={FRUIT_LIST[category]}
//                 renderItem={({ item }) => <FruitItem fruit={item} />}
//                 keyExtractor={(item) => item.id.toString()}
//             />
//         </View>
// );
//
// const App = () => {
//     const sections = Object.keys(FRUIT_LIST);
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Fruit Stall</Text>
//             <TouchableOpacity style={styles.addButton}>
//                 <Text style={styles.buttonText}>Add Fruit</Text>
//             </TouchableOpacity>
//             <FlatList
//                 data={sections}
//                 renderItem={({ item }) => <FruitList category={item} />}
//                 keyExtractor={(item) => item}
//             />
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 50,
//         paddingHorizontal: 20,
//         backgroundColor: '#2b056a',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: '#FFFFFF',
//     },
//     addButton: {
//         backgroundColor: '#8507a1',
//         paddingVertical: 10,
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     buttonText: {
//         color: '#FFFFFF',
//         fontSize: 18,
//     },
//     section: {
//         marginBottom: 20,
//         borderRadius: 8,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//     },
//     header: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: '#FFFFFF',
//     },
//     item: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#FFFFFF',
//     },
//     name: {
//         fontSize: 18,
//         color: '#FFFFFF',
//     },
//     image: {
//         width: 80,
//         height: 80,
//     },
// });
//
// export default App;

// L06 Ex
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import Add from './Add.js';
import Edit from './Edit.js';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fruit Stall' }} />
                <Stack.Screen name="Add" component={Add} options={{ title: 'Add Fruit' }} />
                <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Fruit' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
