import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';
import Badge from './Badge'

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	rowContainer: {
		padding: 10
	},
	rowTitle: {
		color: '#48BBEC'
	},
	rowContent: {
		fontSize: 19
	}
})

class Profile extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	getRowTitle(item) {
		const spacedWord = item.replace('_',' ');
		return spacedWord[0] ? spacedWord[0].toUpperCase() + spacedWord.slice(1) : spacedWord[0]
	}

	render() {
		const userinfo = this.props.userinfo;
		const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
			debugger;
		const list = topicArr.map((item, index) => {
			if (!userinfo[item]) {
				return (<View key={index} />);
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}>{this.getRowTitle.bind(this, item)}</Text>
							<Text style={styles.rowContent}>{userinfo[item]} </Text>
						</View>
					</View>
				)
			}
		})
		return (
			<ScrollView style={styles.container}>
				<Badge userinfo={this.props.userinfo}/>
			</ScrollView>
		)
	}
}

module.exports = Profile;
