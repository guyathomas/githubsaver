import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PropTypes,
  TextInput,
  ActivityIndicatorIOS,
  TouchableHighlight
} from 'react-native';
import api from '../Utils/api'
import Dashboard from './Dashboard'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#48BBEC'
  },
  title: {
  	color: 'white',
  	fontSize: 25,
  	// textAlign: 'center'
  },
  searchInput: {
  	height: 50,
  	padding: 4,
  	marginRight: 5,
  	fontSize: 23,
  	borderWidth: 1,
  	borderColor: 'white',
  	borderRadius: 8,
  	color: 'white',
  	textAlign:'center'
  },
  button: {
  	height: 45,
  	flexDirection: 'row',
  	backgroundColor: 'white',
  	borderColor: 'white',
  	borderWidth: 1,
  	borderRadius: 8,
  	marginBottom: 10,
  	marginTop: 10,
  	alignSelf: 'stretch',
  	justifyContent: 'center'
  },
  buttonText: {
  	fontSize: 18,
  	color: '#111',
  	alignSelf: 'center'
  }
});

class Main extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			isLoading: '',
			error: ''
		}
	}

	handleChange(e) {
		this.setState({ username: e.nativeEvent.text });
	}

	handleSubmit(e) {
		this.setState({
			isLoading: true
		})

		api.getBio(this.state.username)
		.then((res) => {
			if (res.message === 'Not Found') {
				this.setState({
					error: 'User not found',
					isLoading: false
				})
			} else {
				this.props.navigator.push({
					title: res.name || 'Select an option',
					component: Dashboard,
					passProps: {userinfo: res}
				})
				this.setState({
					isLoading: false,
					username: ''
				})
			}
		})
	}

	componentDidMount() {
		console.log('Component mounted')
	}
	render() {
		return (
			<View style={styles.mainContainer}>
			  <Text style={styles.title}>Search for a Github User</Text>
			  <TextInput 
			  	style={styles.searchInput}
			  	value={this.state.username}
			  	onChange={this.handleChange.bind(this)}
			  />
			  <TouchableHighlight
			  	style={styles.button} 
			  	onPress={this.handleSubmit.bind(this)}
			  	underlayColor="white">
			  	<Text style={styles.buttonText}>SEARCH</Text>
			  </TouchableHighlight>
			</View>
		)
	}
}

module.exports = Main;
