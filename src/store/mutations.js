export default {
	changeCity(state,city){
		state.city = city
		try {
			localstorage.city = city
		} catch(e) {}
	}
}