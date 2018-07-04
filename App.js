// import React, {Component} from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import Timeline from './src/components/Timeline/Timeline';


// export default class App extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<View style={styles.container1}>
// 					<View style={styles.textcontainer1}>
// 						<Text>Open up App.js to start working on your app!</Text>
// 					</View>
// 					<View style={styles.textcontainer2}>
// 						<Text>Changes you make will automatically reload.</Text>
// 					</View>
// 				</View>
// 				<View style={styles.container2}>
// 					<Timeline msg="hello user" />
// 				</View>	
// 			</View>
// 		);
// 	}
// }


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'flex-start',
// 		justifyContent: 'flex-start',
// 		flexDirection: 'column',
// 	},
// 	container1: {
// 		// flex: 1,
// 		backgroundColor: '#fff',
// 		flexDirection: 'row',
// 		height: '93%',
// 	},
// 	container2: {
// 		// flex: 1,
// 		backgroundColor: '#fff',
// 		height: '7%',
// 	},
// 	textcontainer1: {
// 		width: "50%",
// 		backgroundColor: 'yellow',
// 	},
// 	textcontainer2: {
// 		width: "50%",
// 		backgroundColor: 'green',
// 	},
// });


import { Navigation } from 'react-native-navigation';

import Authentication from './src/screens/Authentication/Login';

import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("main-page.Authentication", () => Authentication, store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'main-page.Authentication', // unique ID registered with Navigation.registerScreen
		title: 'Login', // title of the screen as appears in the nav bar (optional)
		navigatorStyle: {
			navBarHidden: false, //hide the navigation bar
		},
		// navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	},
});
