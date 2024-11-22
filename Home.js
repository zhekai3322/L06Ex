import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import FruitList from './FruitList.js';
import { FRUIT_LIST } from './Data';

const HomeScreen = ({ navigation, route }) => {
    const [fruitList, setFruitList] = useState(FRUIT_LIST);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setFruitList(FRUIT_LIST);
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        if (route.params?.newFruit) {
            const newFruit = route.params.newFruit;
            const category = newFruit.category;
            if (!fruitList[category]) {
                fruitList[category] = [];
            }
            fruitList[category].push(newFruit);
            setFruitList({ ...fruitList });
        }
    }, [route.params?.newFruit]);

    useEffect(() => {
        if (route.params?.deletedFruitId) {
            const deletedFruitId = route.params.deletedFruitId;
            const newFruitList = { ...fruitList };
            Object.keys(newFruitList).forEach((category) => {
                newFruitList[category] = newFruitList[category].filter((fruit) => fruit.id !== deletedFruitId);
            });
            setFruitList(newFruitList);
        }
    }, [route.params?.deletedFruitId]);

    const sections = Object.keys(fruitList);

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
