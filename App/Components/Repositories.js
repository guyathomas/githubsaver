import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight
} from 'react-native';
import Badge from './Badge';

const styles = {
	container: {
		flex: 1
	},
	rowContainer: {
		flexDirection: 'column',
		flex: 1,
		padding: 10
	},
	name: {
		color: '#48BBEC',
		fontSize: 10,
		paddingBottom: 5
	},
	stars: {
		color: '#48BBEC',
		fontSize: 14,
		paddingBottom: 5
	},
	description: {
		fontSize: 14,
		paddingBottom: 5
	}
}