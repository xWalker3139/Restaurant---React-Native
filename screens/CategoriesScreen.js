import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { HeaderButton, Item } from 'react-navigation-header-buttons';

import { CATEGORY } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile title={itemData.item.title} onSelect={() => props.navigation.navigate({ routeName: 'CategoryMeals', params:{ categoryId:itemData.item.id}})} />
        )
    }
    return(
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORY}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: '#4a148c',
    },
    headerTintColor: 'white',
}

const styles = StyleSheet.create({
});

export default CategoriesScreen;