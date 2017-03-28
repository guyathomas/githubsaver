import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height: 350
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	}
})
class Dashboard extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={styles.container}>
				<Text> This is the dashboard </Text>
			</View>
		)
	}
}

module.exports = Dashboard;
