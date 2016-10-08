jQuery(document).ready(function($) {
	eos.fn.loadjss([
		'ajax/gtm.lang.eng.js',
		'ajax/gtm.lang.chs.js',
		'ajax/gtm.lang.jpn.js',
		'ajax/gtm.style.js'
	], 0, function() {
		console.log(eos.fn.md5.hex_md5('asdasdadsdadsada'));
		eos.stl.setting();
		eos.load();
		eos.init();
		eos.stl.start();
		eos.resize();
		eos.refresh(0);
		eos.start.enter(1300);
	});
});
