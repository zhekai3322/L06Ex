import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import FruitList from './FruitList.js';
import { FRUIT_LIST } from './Data';

const HomeScreen = ({ navigation }) => {
    const sections = Object.keys(FRUIT_LIST);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fruit Stall</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
                <Text style={styles.buttonText}>Add Fruit</Text>
            </TouchableOpacity>
            <FlatList
                data={sections}
                renderItem={({ item }) => <FruitList category={item} navigation={navigation} />}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#2b056a',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    addButton: {
        backgroundColor: '#8507a1',
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default HomeScreen;
