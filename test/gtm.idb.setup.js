eos.fn.initDB(2016092701, function(db) {
	if (!db.objectStoreNames.contains('userProfile')) {
		var store = db.createObjectStore('userProfile', {keyPath:"uid"});
		store.add({uid:'admin', email:'mail@brianwang.net', language:0, ugroup:'Administrators'});
	}
});


