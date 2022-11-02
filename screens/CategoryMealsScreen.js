import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import { CATEGORY, MEALS} from '../data/data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const renderMealItem = (itemData) => {
        return(
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelect={() => {props.navigation.navigate({ routeName:'MealDetail', param:{ mealId: itemData.item.id}})}}
            />
        )
    }
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return(
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORY.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: '#4a148c',
        },
        headerTintColor: 'white',
    }
}

const styles = StyleSheet.create({});

export default CategoryMealsScreen;