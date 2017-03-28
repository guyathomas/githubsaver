import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Profile from './Profile';
import Notes from './Notes';
import Repos from './Repos';

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
		this.state = {
		}
	}

	goToProfile() {
		this.props.navigator.push(({
			title: 'Profile',
			component: Profile,
			passProps: {userinfo: this.props.userinfo}
		}))
	}
	goToRepos() {
		this.props.navigator.push(({
			title: 'Repos',
			component: Repos,
			passProps: {userinfo: this.props.userinfo}
		}))
	}
	goToNotes() {
		this.props.navigator.push(({
			title: 'Notes',
			component: Notes,
			passProps: {userinfo: this.props.userinfo}
		}))
	}

	makeBackground(btn) {
		const obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}
		if (btn === 0) {
			obj.backgroundColor = '#48BBEC'
		} else if (btn === 1) {
			obj.backgroundColor = '#E77AAE'
		} else {
			obj.backgroundColor = '#758BF4'
		}

		return obj;
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.userinfo.avatar_url}} style={styles.image}/>
				<TouchableHighlight 
					style={this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>				
				<TouchableHighlight 
					style={this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Repos</Text>
				</TouchableHighlight>				
				<TouchableHighlight 
					style={this.makeBackground(2)}
					onPress={this.goToNotes.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Notes</Text>
				</TouchableHighlight>				
			</View>
		)
	}
}

module.exports = Dashboard;
