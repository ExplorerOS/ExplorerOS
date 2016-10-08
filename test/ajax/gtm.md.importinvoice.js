gtm_importinvoice();
function gtm_importinvoice() {
eos.newapp(-1, 1, 'importinvoice', function(app) {

	app.chd.iscaption = ['Import Invoice', '进口发票', '輸入インボイス'];
	app.chd.isthumbnail = '';
	app.chd.hotkey = function(event) {
		if (event.which===27) {
			eos.msg(3, eos.lang.app.sure_to_close, function(r) {
				r===1 && app.close();
			});
		}
	};
	
	// block
	app.chd.ctBlock = eos.fn.container(function(c) {
		c.isname = 'ctBlock';
		c.isclass = 'gtm-container-block';
	});
	app.chd.ctBlock.load();
	
	// block - title
	app.chd.ttOverview1 = eos.fn.link(function(c) {
		c.isname = 'ttOverview1';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Overview', '概要', '概要'];
	});
	app.chd.ttOverview1.load();
	app.chd.ttOverview2 = eos.fn.link(function(c) {
		c.isname = 'ttOverview2';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttOverview2.load();
	
	// block - buttons
	app.chd.ccButtons = eos.fn.container(function(c) {
		c.isname = 'ccButtons';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-container-component gtm-importinvoice-ccButtons';
	});
	app.chd.ccButtons.load();
	app.chd.btView = eos.fn.button(function(c) {
		c.isname = 'btView';
		c.isparent = app.chd.ccButtons;
		c.isclass = 'gtm-importinvoice-buttons';
		c.iscaption = ['View', '查看', 'ビュー'];
		c.click = function() {eos.wait(1);eos.fn.loadjs('http://ajax.brianwang.net/gtm.md.importinvoiceview.js', 0, eos.wait)};
	});
	app.chd.btView.load();
	app.chd.btNew = eos.fn.button(function(c) {
		c.isname = 'btNew';
		c.isparent = app.chd.ccButtons;
		c.isclass = 'gtm-importinvoice-buttons';
		c.iscaption = ['New', '新建', '新しいです'];
	});
	app.chd.btNew.load();
	app.chd.btCopy = eos.fn.button(function(c) {
		c.isname = 'btCopy';
		c.isparent = app.chd.ccButtons;
		c.isclass = 'gtm-importinvoice-buttons';
		c.iscaption = ['Copy', '复制', 'コピー'];
	});
	app.chd.btCopy.load();
	app.chd.btEdit = eos.fn.button(function(c) {
		c.isname = 'btEdit';
		c.isparent = app.chd.ccButtons;
		c.isclass = 'gtm-importinvoice-buttons';
		c.iscaption = ['Edit', '编辑', '編集'];
	});
	app.chd.btEdit.load();
	app.chd.btFreeze = eos.fn.button(function(c) {
		c.isname = 'btFreeze';
		c.isparent = app.chd.ccButtons;
		c.isclass = 'gtm-importinvoice-buttons';
		c.iscaption = ['Freeze', '冻结', 'フリーズ'];
	});
	app.chd.btFreeze.load();
	
	// block - grid
	app.chd.gdInvoice = eos.fn.grid(function(c) {
		c.isname = 'gdInvoice';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-grid gtm-importinvoice-grid';
		c.dataobj = ['invno', 'invtype', 'docstatus', 'supplier', 'excountry', 'incoterm', 'currency', 'amount'];
		c.datasource = [
			{invno:'1609308', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609309', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609310', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609311', invtype:'commercial', docstatus:'pending', supplier:'Flextronics Technology vietnam Ltd', excountry:'VN', incoterm:'CIF', currency:'VDN', amount:'1,000,000'},
			{invno:'1609312', invtype:'commercial', docstatus:'pending', supplier:'Flextronics Technology vietnam Ltd', excountry:'VN', incoterm:'CIF', currency:'VDN', amount:'1,099,990'},
			{invno:'1609313', invtype:'commercial', docstatus:'pending', supplier:'Flextronics Technology vietnam Ltd', excountry:'VN', incoterm:'CIF', currency:'VDN', amount:'100,555,800'},
			{invno:'1609314', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'100,700'},
			{invno:'1609315', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'100,400'},
			{invno:'1609316', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'203,000'},
			{invno:'1609317', invtype:'sample', docstatus:'approved', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'1000'},
			{invno:'1609318', invtype:'sample', docstatus:'approved', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'1000'},
			{invno:'1609319', invtype:'sample', docstatus:'approved', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'1000'},
			{invno:'1609320', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609321', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609322', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'10,000'},
			{invno:'1609323', invtype:'commercial', docstatus:'pending', supplier:'Atom Tech Japan Ltd', excountry:'JP', incoterm:'FOB', currency:'JPY', amount:'58,000,000'},
			{invno:'1609324', invtype:'commercial', docstatus:'pending', supplier:'Atom Tech Japan Ltd', excountry:'JP', incoterm:'FOB', currency:'JPY', amount:'900,000'},
			{invno:'1609325', invtype:'commercial', docstatus:'pending', supplier:'Atom Tech Japan Ltd', excountry:'JP', incoterm:'FOB', currency:'JPY', amount:'7,096,000'},
			{invno:'1609326', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'50,000'},
			{invno:'1609327', invtype:'commercial', docstatus:'pending', supplier:'Unicomm Tech US Ltd', excountry:'USA', incoterm:'FOB', currency:'USD', amount:'70,000'}
		];
		c.isheader = [[['Invoice Number', '发票号码', '請求書番号'], 'c', 200], [['Invoice Type', '发票类型', '請求書の種類'], 'c', 150], [['Document Status', '文档状态', '文書ステータス'], 'c', 150], [['Supplier', '供应商', 'サプライヤー'], 'c', 250], [['Export Country', '出口国', '輸出国'], 'c', 150], [['incoterm', '成交方式', 'インコタームズ'], 'c', 100], [['Currency', '币制', '通貨'], 'c', 100], [['Total Amount', '总金额', '総量'], 'n', 200]];
		c.isrecmax = 20;
	});
	app.chd.gdInvoice.load();
	app.chd.gdInvoice.wait(1);
	app.chd.gdInvoice.redata();
	app.chd.gdInvoice.wait();

});
}
