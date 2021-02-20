import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ArchiveScreen from './ArchiveScreen';
import HomesList from './HomesList';
import FeatureList from './FeatureList';

const ArchStack = createStackNavigator();

const ArchiveStack = ({navigation}) => {

    return(

        <ArchStack.Navigator>
            <ArchStack.Screen name='Archive Menu' component={ArchiveScreen} />
            <ArchStack.Screen name='Homes List' component={HomesList}/>
            <ArchStack.Screen name='Feature List' component={FeatureList}/>
        </ArchStack.Navigator>

    );
}

export default ArchiveStack;