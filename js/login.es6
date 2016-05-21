let login = (username, password) => {
	if(username !== 'admin' || password !== 'secure'){
		console.log('Bad login');
	}
}

//login('admin', 'fake');
export { login }