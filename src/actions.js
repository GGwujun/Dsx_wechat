export const actions = {
	initData: ({
		dispatch
	}) => dispatch('INIT_DATA'),
	sendMessage: ({
		dispatch
	}, content) => dispatch('SEND_MESSAGE', content),
	selectSession: ({
		dispatch
	}, id) => dispatch('SELECT_SESSION', id),
	search: ({
		dispatch
	}, value) => dispatch('SET_FILTER_KEY', value)
};