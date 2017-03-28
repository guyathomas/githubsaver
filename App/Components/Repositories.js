import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight
} from 'react-native';
import Badge from './Badge';
import Separator from './Helpers/Separator'
import Web from './Helpers/Web'

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
		fontSize: 18,
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


class Repositories extends React.Component{
	constructor(props) {
		super(props)
	}

	openPage(url) {
		console.log('this url was passed to openPage', url)
		this.props.navigator.push({
			component: Web,
			title: 'Web View',
			passProps: {url}
		})
	}

	render() {
		console.log('this.props', this.props)
		const repos = this.props.repos;
		const list = repos.map((item, i) => {
			const description = item.description ? <Text style={styles.description}>{item.description}</Text> : <View />
			return (
				<View key={i}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, item.html_url)}
							underlayColor='transparent'>
							<Text style={styles.name}>{item.name}</Text>
						</TouchableHighlight>
						<Text style={styles.stars}>Stars: {item.stargazers_count}</Text>
						{description}
					</View>
					<Separator />
				</View>
				)
		})
		return (
			<ScrollView style={styles.container}>
				<Badge userinfo={this.props.userinfo} />
				{list}
			</ScrollView>
			)
	}
}

Repositories.propTypes = {
	userinfo: React.PropTypes.object.isRequired,
	repos: React.PropTypes.array.isRequired
}

module.exports = Repositories;
