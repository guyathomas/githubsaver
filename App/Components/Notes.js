import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

const styles = StyleSheet.create({
	test: {
		color:'white', 
		fontSize: 20,
		flex: 1
	},
	testContainer: {
		flex: 1,
		flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center',
		height: 10,
		backgroundColor: 'blue'
	}
})

class Notes extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	componentDidMount() {
		console.log('Did mount')
	}

	render() {
		return (
			<View style={styles.testContainer}>
				<Text style={styles.test}>Notes</Text>
			</View>
		)
	}
}

module.exports = Notes;
