import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from "react-redux";

import ContactList from "../../components/ContactList/ContactList";

class Login extends Component {
	render() {
		return (
			<View>
				{/* <Text>
                    Name : {this.props.contact[0].name}
                </Text>
				<Text>
                    Mobile : {this.props.contact[0].mobile}
                </Text>
				<Text>
                    Name : {this.props.contact[1].name}
                </Text>
				<Text>
                    Mobile : {this.props.contact[1].mobile}
				</Text> */}
				<ContactList contacts={this.props.contact}/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		contact : state.contacts.users
	}
};


export default connect(mapStateToProps)(Login);