import * as types from './action-types';

/////////////
// Actions //
/////////////

export function load() {
	return {
		type: types.USER_LOAD,
	};
}

export function loadUserFromPrefs(user, sessionId, number) {
	return {
		type: types.USER_LOAD_SUCCESS,
		user: user,
		session_id: sessionId,
		phone_number: number,
	};
}

export function login(email, password) {
	return {
		types: [types.USER_LOGIN, types.USER_LOGIN_SUCCESS, types.USER_LOGIN_FAIL],
		promise: client => client.post('/auth/login', {
			data: {
				email: email,
				password: password,
			}
		})
	};
}

export function logout() {
	return {
		types: [types.USER_LOGOUT, types.USER_LOGOUT_SUCCESS, types.USER_LOGOUT_FAIL],
		promise: (client, sessionId) => client.post('/user/logout', {
			data: {
				session_id: sessionId,
			}
		})
	};
}

export function logoutSuccess() {
	return {
		type: types.USER_LOGOUT_SUCCESS
	};
}

export function signup(email, password) {
	return {
		types: [types.USER_SIGNUP, types.USER_SIGNUP_SUCCESS, types.USER_SIGNUP_FAIL],
		promise: client => client.post('/auth/signup', {
			data: {
				email: email,
				password: password,
			}
		})
	};
}

export function cachePhoneNumber(number) {
	return {
		type: types.USER_CACHE_PHNUMBER,
		number: number
	};
}

//////////////////////
// Public Functions //
//////////////////////

export function isLoggedIn(state) {
	return (state.user.session_id !== null);
}

export function getSessionId(state) {
	return state.user.session_id;
}

export function getUserEmail(state) {
	return state.user.user.email;
}

export function getUserApiKey(state) {
	return state.user.user.api_key;
}

export function getCachedPhoneNumber(state) {
	return state.user.phone_number;
}
