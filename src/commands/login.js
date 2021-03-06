import prompt from 'prompt';
import chalk from 'chalk';
import { getPrompt } from '../libs/prompt';
import * as userActions from '../actions/user-actions';

const prompts = [
	{
		name: 'email',
		description: 'Enter your email:',
		pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		message: 'Please enter a valid email',
		required: true
	},
	{
		name: 'password',
		description: 'Enter your password:',
		message: 'Please enter your password',
		hidden: true,
		required: true
	},
];

export default async function(store) {

	prompt.start();

	prompt.message = '';
	prompt.delimiter = '';

	const {email, password} = await getPrompt(prompts);

	console.log(chalk.gray('Logging in to Toolbeam'));

	await store.dispatch(userActions.login(email, password));

	console.log('You are logged in to Toolbeam');
}
