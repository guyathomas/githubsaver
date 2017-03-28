import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

const styles = {
	container: {
		flex:1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column'
	}
}

class Web extends React.Component{

	render() {
		console.log('This link will open at .url', this.props)
		return(
			<View style={styles.container}>
				<WebView source={{uri: this.props.url}} />
			</View>
			)
	}
}

Web.propTypes = {
	url: React.PropTypes.string.isRequired
}

module.exports = Web;
