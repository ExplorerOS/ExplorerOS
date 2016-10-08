gtm_test();
function gtm_test() {
eos.newapp(-1, 0, 'test', function(app) {

	app.chd.iscaption[0] = 'test' + app.isappid;
	app.chd.iscaption[1] = '测试' + app.isappid;
	app.chd.iscaption[2] = 'テスト' + app.isappid;
	app.chd.isthumbnail = '';
	app.chd.hotkey = function(event) {
		if (event.which===27) {
			eos.msg(3, eos.lang.app.sure_to_close, function(r) {
				r===1 && app.close();
			});
		}
	};
	
	// block01
	app.chd.container0100 = eos.fn.container(function(c) {
		c.isname = 'container0100';
		c.isclass = 'gtm-container-block';
	});
	app.chd.container0100.load();
	
	app.chd.title1 = eos.fn.link(function(c) {
		c.isname = 'title1';
		c.isparent = app.chd.container0100;
		c.isclass = 'gtm-link-title';
		c.iscaption[0] = 'title1';
		c.iscaption[1] = '标题1';
		c.iscaption[2] = '標題1';
	});
	app.chd.title1.load();
	
	app.addcom('line1');
	app.chd.line1 = eos.fn.link(function(c) {
		c.isname = 'line1';
		c.isparent = app.chd.container0100;
		c.isclass = 'gtm-link-line';
	});
	app.chd.line1.load();
	
	// block01 component01
	app.chd.container0101 = eos.fn.container(function(c) {
		c.isname = 'container0101';
		c.isparent = app.chd.container0100;
		c.isclass = 'gtm-container-component';
	});
	app.chd.container0101.load();
	
	app.chd.input1 = eos.fn.input(function(c) {
		c.isname = 'input1';
		c.isparent = app.chd.container0101;
		c.isclass = 'gtm-input';
	});
	app.chd.input1.load();
	
	// block01 component02
	app.chd.container0102 = eos.fn.container(function(c) {
		c.isname = 'container0102';
		c.isparent = app.chd.container0100;
		c.isclass = 'gtm-container-component';
	});
	app.chd.container0102.load();
	
	app.chd.input2 = eos.fn.input(function(c) {
		c.isname = 'input2';
		c.isparent = app.chd.container0102;
		c.isclass = 'gtm-input';
	});
	app.chd.input2.load();
	
	// block02
	app.chd.container0200 = eos.fn.container(function(c) {
		c.isname = 'container0200';
		c.isclass = 'gtm-container-block';
	});
	app.chd.container0200.load();
	
	app.chd.grid1 = eos.fn.grid(function(c) {
		c.isname = 'grid1';
		c.isparent = app.chd.container0200;
		c.isclass = 'gtm-grid';
		c.dataobj = ['colu1', 'colu2', 'colu3', 'colu4', 'colu5'];
		c.datasource = [
			{colu1: '001', colu2: '002', colu3: '003', colu4: '004', colu5: 005},
			{colu1: '011', colu2: '012', colu3: '013', colu4: '014', colu5: 015},
			{colu1: '021', colu2: '022', colu3: '023', colu4: '024', colu5: 025},
			{colu1: '031', colu2: '032', colu3: '033', colu4: '034', colu5: 035},
			{colu1: '041', colu2: '042', colu3: '043', colu4: '044', colu5: 045},
			{colu1: '051', colu2: '052', colu3: '053', colu4: '054', colu5: 055},
			{colu1: '061', colu2: '062', colu3: '063', colu4: '064', colu5: 065},
			{colu1: '071', colu2: '072', colu3: '073', colu4: '074', colu5: 075},
			{colu1: '081', colu2: '082', colu3: '083', colu4: '084', colu5: 085},
			{colu1: '091', colu2: '092', colu3: '093', colu4: '094', colu5: 095},
			{colu1: '101', colu2: '102', colu3: '103', colu4: '104', colu5: 105},
			{colu1: '111', colu2: '112', colu3: '113', colu4: '114', colu5: 115}
		]
		c.isheader = [[['colu1', '列1', 'コラム1'], 'c', 290], [['colu2', '列2', 'コラム2'], 'c', 310], [['colu3', '列3', 'コラム3'], 'c', 180], [['colu4', '列4', 'コラム4'], 'c', 270], [['colu5', '列5', 'コラム5'], 'n', 320]];
	});
	app.chd.grid1.load();
	app.chd.grid1.wait(1);
	app.chd.grid1.redata();
	app.chd.grid1.wait();

});
}
