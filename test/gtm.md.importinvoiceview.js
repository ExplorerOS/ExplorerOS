gtm_importinvoiceview();
function gtm_importinvoiceview() {
	var data = eos.app[eos.isappnow].chd.gdInvoice.getSelect();
	if (data.length>0) {
		data = eos.app[eos.isappnow].chd.gdInvoice.datasource[data[0]];
		gtm_importinvoiceview0(data);
	}
}
function gtm_importinvoiceview0(data) {
eos.newapp(-1, 0, 'importinvoiceview', function(app) {
	app.chd.iscaption = ['Import Invoice', '进口发票', '輸入インボイス'];
	var xlen = app.chd.iscaption.length;
	for (var i=0; i<xlen; i++) {
		app.chd.iscaption[i] = app.chd.iscaption[i] + ' - ' + data.invno;
	}
	app.chd.isthumbnail = '';
	app.chd.hotkey = function(event) {
		if (event.which===27) {
			eos.msg(3, eos.lang.app.sure_to_close, function(r) {
				r===1 && app.close();
			});
		}
	};
	
	// block Overview
	app.chd.ctBlockOverview = eos.fn.container(function(c) {
		c.isname = 'ctBlockOverview';
		c.isclass = 'gtm-container-block';
	});
	app.chd.ctBlockOverview.load();
	// block Overview - title
	app.chd.ttOverview1 = eos.fn.link(function(c) {
		c.isname = 'ttOverview1';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Overview', '概要', '概要'];
	});
	app.chd.ttOverview1.load();
	app.chd.ttOverview2 = eos.fn.link(function(c) {
		c.isname = 'ttOverview2';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttOverview2.load();
	// block Overview - Invoice Number
	app.chd.ccInvno = eos.fn.container(function(c) {
		c.isname = 'ccInvno';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccInvno.load();
	app.chd.lbInvno = eos.fn.label(function(c) {
		c.isname = 'lbInvno';
		c.isparent = app.chd.ccInvno;
		c.isclass = 'gtm-label';
		c.iscaption = ['Invoice Number', '发票号', '請求書番号'];
	});
	app.chd.lbInvno.load();
	app.chd.ipInvno = eos.fn.input(function(c) {
		c.isname = 'ipInvno';
		c.isparent = app.chd.ccInvno;
		c.isclass = 'gtm-input';
	});
	app.chd.ipInvno.load();
	app.chd.ipInvno.value(data.invno);
	// block Overview - Invoice Type
	app.chd.ccInvtype = eos.fn.container(function(c) {
		c.isname = 'ccInvtype';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccInvtype.load();
	app.chd.lbInvtype = eos.fn.label(function(c) {
		c.isname = 'lbInvtype';
		c.isparent = app.chd.ccInvtype;
		c.isclass = 'gtm-label';
		c.iscaption = ['Invoice Type', '发票类型', '請求書の種類'];
	});
	app.chd.lbInvtype.load();
	app.chd.ipInvtype = eos.fn.input(function(c) {
		c.isname = 'ipInvtype';
		c.isparent = app.chd.ccInvtype;
		c.isclass = 'gtm-input';
	});
	app.chd.ipInvtype.load();
	app.chd.ipInvtype.value(data.invtype);
	// block Overview - Document Status
	app.chd.ccDocstatus = eos.fn.container(function(c) {
		c.isname = 'ccDocstatus';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccDocstatus.load();
	app.chd.lbDocstatus = eos.fn.label(function(c) {
		c.isname = 'lbDocstatus';
		c.isparent = app.chd.ccDocstatus;
		c.isclass = 'gtm-label';
		c.iscaption = ['Document Status', '文档状态', '文書ステータス'];
	});
	app.chd.lbDocstatus.load();
	app.chd.ipDocstatus = eos.fn.input(function(c) {
		c.isname = 'ipDocstatus';
		c.isparent = app.chd.ccDocstatus;
		c.isclass = 'gtm-input';
	});
	app.chd.ipDocstatus.load();
	app.chd.ipDocstatus.value(data.docstatus);
	// block Overview - Supplier
	app.chd.ccSupplier = eos.fn.container(function(c) {
		c.isname = 'ccSupplier';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccSupplier.load();
	app.chd.lbSupplier = eos.fn.label(function(c) {
		c.isname = 'lbSupplier';
		c.isparent = app.chd.ccSupplier;
		c.isclass = 'gtm-label';
		c.iscaption = ['Supplier', '供应商', 'サプライヤー'];
	});
	app.chd.lbSupplier.load();
	app.chd.ipSupplier = eos.fn.input(function(c) {
		c.isname = 'ipSupplier';
		c.isparent = app.chd.ccSupplier;
		c.isclass = 'gtm-input';
	});
	app.chd.ipSupplier.load();
	app.chd.ipSupplier.value(data.supplier);
	// block Overview - Export Country
	app.chd.ccExcountry = eos.fn.container(function(c) {
		c.isname = 'ccExcountry';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccExcountry.load();
	app.chd.lbExcountry = eos.fn.label(function(c) {
		c.isname = 'lbExcountry';
		c.isparent = app.chd.ccExcountry;
		c.isclass = 'gtm-label';
		c.iscaption = ['Export Country', '出口国', '輸出国'];
	});
	app.chd.lbExcountry.load();
	app.chd.ipExcountry = eos.fn.input(function(c) {
		c.isname = 'ipExcountry';
		c.isparent = app.chd.ccExcountry;
		c.isclass = 'gtm-input';
	});
	app.chd.ipExcountry.load();
	app.chd.ipExcountry.value(data.excountry);
	// block Overview - Incoterm
	app.chd.ccIncoterm = eos.fn.container(function(c) {
		c.isname = 'ccIncoterm';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccIncoterm.load();
	app.chd.lbIncoterm = eos.fn.label(function(c) {
		c.isname = 'lbIncoterm';
		c.isparent = app.chd.ccIncoterm;
		c.isclass = 'gtm-label';
		c.iscaption = ['incoterm', '成交方式', 'インコタームズ'];
	});
	app.chd.lbIncoterm.load();
	app.chd.ipIncoterm = eos.fn.input(function(c) {
		c.isname = 'ipIncoterm';
		c.isparent = app.chd.ccIncoterm;
		c.isclass = 'gtm-input';
	});
	app.chd.ipIncoterm.load();
	app.chd.ipIncoterm.value(data.incoterm);
	// block Overview - Currency
	app.chd.ccCurrency = eos.fn.container(function(c) {
		c.isname = 'ccCurrency';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccCurrency.load();
	app.chd.lbCurrency = eos.fn.label(function(c) {
		c.isname = 'lbCurrency';
		c.isparent = app.chd.ccCurrency;
		c.isclass = 'gtm-label';
		c.iscaption = ['Currency', '币制', '通貨'];
	});
	app.chd.lbCurrency.load();
	app.chd.ipCurrency = eos.fn.input(function(c) {
		c.isname = 'ipCurrency';
		c.isparent = app.chd.ccCurrency;
		c.isclass = 'gtm-input';
	});
	app.chd.ipCurrency.load();
	app.chd.ipCurrency.value(data.currency);
	// block Overview - Amount
	app.chd.ccAmount = eos.fn.container(function(c) {
		c.isname = 'ccAmount';
		c.isparent = app.chd.ctBlockOverview;
		c.isclass = 'gtm-container-component';
	});
	app.chd.ccAmount.load();
	app.chd.lbAmount = eos.fn.label(function(c) {
		c.isname = 'lbAmount';
		c.isparent = app.chd.ccAmount;
		c.isclass = 'gtm-label';
		c.iscaption = ['Total Amount', '总金额', '総量'];
	});
	app.chd.lbAmount.load();
	app.chd.ipAmount = eos.fn.input(function(c) {
		c.isname = 'ipAmount';
		c.isparent = app.chd.ccAmount;
		c.isclass = 'gtm-input';
	});
	app.chd.ipAmount.load();
	app.chd.ipAmount.value(data.amount);
	
	// block Items
	app.chd.ctBlockItems = eos.fn.container(function(c) {
		c.isname = 'ctBlockItems';
		c.isclass = 'gtm-container-block';
	});
	app.chd.ctBlockItems.load();
	// block Overview - title
	app.chd.ttItems1 = eos.fn.link(function(c) {
		c.isname = 'ttItems1';
		c.isparent = app.chd.ctBlockItems;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Items', '物料', 'マテリアル'];
	});
	app.chd.ttItems1.load();
	app.chd.ttItems2 = eos.fn.link(function(c) {
		c.isname = 'ttItems2';
		c.isparent = app.chd.ctBlockItems;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttItems2.load();
	app.chd.gdInvoice = eos.fn.grid(function(c) {
		c.isname = 'gdInvoice';
		c.isparent = app.chd.ctBlockItems;
		c.isclass = 'gtm-grid gtm-importinvoiceview-grid';
		c.dataobj = ['seqno', 'partno', 'descript', 'coo', 'up', 'qty', 'uom', 'amount', 'netwght'];
		c.datasource = [
			{seqno:'10', partno:'ingh-6005325', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'},
			{seqno:'20', partno:'ingh-6005326', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'},
			{seqno:'30', partno:'ingh-6005328', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'},
			{seqno:'40', partno:'ingh-6005566', descript:'IC Central Controller', coo:'USA', up:'180.00000', qty:'1,000', uom:'PCS', amount:'180,000', netwght:'240.00'},
			{seqno:'50', partno:'ingh-6005577', descript:'IC Central Controller', coo:'USA', up:'183.00000', qty:'2,000', uom:'PCS', amount:'183,000', netwght:'242.00'},
			{seqno:'60', partno:'ingh-6005567', descript:'IC Central Controller', coo:'USA', up:'174.00000', qty:'1,000', uom:'PCS', amount:'174,000', netwght:'251.00'},
			{seqno:'70', partno:'ingh-6005326', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'},
			{seqno:'80', partno:'ingh-6005326', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'},
			{seqno:'90', partno:'ingh-6005326', descript:'PCB 4layers', coo:'JP', up:'53.00000', qty:'10,000', uom:'PCS', amount:'530,000', netwght:'280.00'}
		];
		c.isheader = [[['Sequence Number', '序列号', 'シーケンス番号'], 'n', 100], [['part Number', '物料号', '部品番号'], 'c', 200], [['description', '物料描述', '部品記述'], 'c', 250], [['Country of Origin', '原产国', '原産国'], 'c', 250], [['Unit Price', '单价', '単価'], 'n', 150], [['quantity', '数量', '数量'], 'n', 150], [['Unit', '单位', '単位'], 'c', 100], [['Total Amount', '总金额', '総量'], 'n', 200], [['Net Weight', '净重', '正味重量'], 'n', 150]];
		c.isrecmax = 20;
	});
	app.chd.gdInvoice.load();
	app.chd.gdInvoice.wait(1);
	app.chd.gdInvoice.redata();
	app.chd.gdInvoice.wait();
	
	// process focusit
	app.chd.focusit = function() {
		app.chd.ipInvno.setfocus();
	};
});
}
