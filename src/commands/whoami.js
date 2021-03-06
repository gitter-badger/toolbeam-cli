import chalk from 'chalk';

import * as userActions from '../actions/user-actions';

export default function(store) {
	console.log(`You are logged in as '${userActions.getUserEmail(store.getState())}'`);
	console.log(`API Key: ${userActions.getUserApiKey(store.getState())}`);
}
