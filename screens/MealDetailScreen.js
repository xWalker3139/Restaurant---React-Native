import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButton, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/data';

const MealDetailScreen = (props) => {
    const MealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === MealId)
    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go back to categories"
                onPress={() => {props.navigation.popOnTop();}}
            />
        </View>
    );
}

MealDetailScreen.navigationOpitons = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <Button title="cart" icon="" />
        )
    };
}

const styles = StyleSheet.create({});

export default MealDetailScreen;