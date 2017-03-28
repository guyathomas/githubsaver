import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Profile from './Profile';

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
		color: 'black',
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
	
	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.userinfo.avatar_url}} style={styles.image}/>
				<TouchableHighlight 
					onPress={this.goToProfile.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>				
			</View>
			<View style={styles.container}>
				<Image source={{uri: this.props.userinfo.avatar_url}} style={styles.image}/>
				<TouchableHighlight 
					onPress={this.goToRepos.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>				
			</View>
			<View style={styles.container}>
				<Image source={{uri: this.props.userinfo.avatar_url}} style={styles.image}/>
				<TouchableHighlight 
					onPress={this.goToNotes.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>				
			</View>
		)
	}
}

module.exports = Dashboard;
