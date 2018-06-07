let defaultcity = '上海'
try {
	if(localstorage.city){
		defaultcity = localstorage.city
	}
} catch(e) {}

export default {
	city: defaultcity
}