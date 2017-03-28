import Separator from './Helpers/Separator';
import Badge from './Badge';
import React from 'react';
import {
	View,
	Text,
	ListView,
	TextInput,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

const api = require("../Utils/api");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  button: {
    height: 60,
    backgroundColor: "#48BBEC",
    flexGrow: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: "#111",
    flexGrow: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  }
});

class Notes extends React.Component{
  constructor(props) {
    super(props);
    console.log('this.props.notes', this.props.notes)

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: "",
      error: ""
    };
  }

  handleChange(event) {
    this.setState({
      note: event.nativeEvent.text
    });
  }

  handleSubmit() {
    var note = this.state.note;
    
    this.setState({
      note: ""
    });

    api.addNote(this.props.userinfo.login, note)
      .then((data) => {
        api.getNotes(this.props.userinfo.login)
          .then((notes) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(notes)
            });
          })
      })
      .catch((error) => {
        console.error(error);
        this.setState( {error} );
      });
  }

  renderRow(rowData) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }

  footer() {
    return (
      <View style={styles.footContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange.bind(this)}
          placeholder="New Note" />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#88D4F5">

          <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userinfo={this.props.userinfo} />} />
        {this.footer()}
      </View>
    )
  }
};

Notes.propTypes = {
  userinfo: React.PropTypes.object.isRequired,
  notes: React.PropTypes.object.isRequired
};

module.exports = Notes;