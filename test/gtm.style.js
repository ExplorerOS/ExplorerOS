eos = (function(eos, $) {



/* setting */
eos.stl.setting = function() {
	// language
	eos.langbar.islangtotal = 3;
	eos.langbar.langlist[1] = '中文,&nbsp;简体中文';
	eos.langbar.langlabel[1] = 'CHS';
	eos.langbar.langlist[2] =  '日本語';
	eos.langbar.langlabel[2] = 'JPN';
	
	// hotkey
	eos.hotkey.global = function(event) {};
	
	// menu
	// menu - master data
	eos.qlaunch.addcom('gpMaster');
	eos.qlaunch.menu.gpMaster = eos.fn.qmenugroup(function(o) {
		o.isname = 'gpMaster';
		o.isclass = 'gtm-qmenu-gpMaster';
		o.iscaption = ['Master Data', '主数据', '主データ'];
	});
	eos.qlaunch.addcom('btOrganize');
	eos.qlaunch.menu.btOrganize = eos.fn.qmenubutton(function(o) {
		o.isname = 'btOrganize';
		o.isclass = 'gtm-qmenu-btMaster';
		o.iscaption = ['Organization Structure', '组织架构', '組織アーキテクチャー'];
		o.click = function() {
			eos.wait();
			eos.msg(2, [
				'No authority to access!',
				'没有权限！',
				'権限がない'
			]);
		};
	});
	eos.qlaunch.addcom('btPartner');
	eos.qlaunch.menu.btPartner = eos.fn.qmenubutton(function(o) {
		o.isname = 'btPartner';
		o.isclass = 'gtm-qmenu-btMaster';
		o.iscaption = ['Business Partner', '合作伙伴', 'ビジネスパートナー'];
		o.click = function() {
			eos.wait();
			eos.msg(1, [
				'No authority to access!',
				'没有权限！',
				'権限がない'
			]);
		};
	});
	eos.qlaunch.addcom('btProduct');
	eos.qlaunch.menu.btProduct = eos.fn.qmenubutton(function(o) {
		o.isname = 'btProduct';
		o.isclass = 'gtm-qmenu-btMaster';
		o.iscaption = ['Product Master', '产品主数据', '製品マスタデータ'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCProfile');
	eos.qlaunch.menu.btCProfile = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCProfile';
		o.isclass = 'gtm-qmenu-btMaster';
		o.iscaption = ['Product Customs Profile', '产品海关档案', '製品税関ファイル'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	// menu - Customs Declaration
	eos.qlaunch.addcom('gpDeclaration');
	eos.qlaunch.menu.gpDeclaration = eos.fn.qmenugroup(function(o) {
		o.isname = 'gpDeclaration';
		o.isclass = 'gtm-qmenu-gpDeclaration';
		o.iscaption = ['Customs Declaration', '海关申报', '税関申告'];
	});
	eos.qlaunch.addcom('btIInvoice');
	eos.qlaunch.menu.btIInvoice = eos.fn.qmenubutton(function(o) {
		o.isname = 'btIInvoice';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Import Invoice', '进口发票', '輸入インボイス'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.importinvoice.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btIBol');
	eos.qlaunch.menu.btIBol = eos.fn.qmenubutton(function(o) {
		o.isname = 'btIBol';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Import Bill of Lading', '进口提运单', '輸入品船荷証券'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btIDecalre');
	eos.qlaunch.menu.btIDecalre = eos.fn.qmenubutton(function(o) {
		o.isname = 'btIDecalre';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Import Declaration', '进口申报', '輸入申告'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEInvoice');
	eos.qlaunch.menu.btEInvoice = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEInvoice';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Export Invoice', '出口发票', '輸出インボイス'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEBol');
	eos.qlaunch.menu.btEBol = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEBol';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Export Bill of Lading', '出口提运单', '輸出船荷証券'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEDecalre');
	eos.qlaunch.menu.btEDecalre = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEDecalre';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Export Declaration', '出口申报', '輸出申告'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btITemporary');
	eos.qlaunch.menu.btITemporary = eos.fn.qmenubutton(function(o) {
		o.isname = 'btITemporary';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Temporary Import', '暂时进口', '一時的な輸入'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btETemporary');
	eos.qlaunch.menu.btETemporary = eos.fn.qmenubutton(function(o) {
		o.isname = 'btETemporary';
		o.isclass = 'gtm-qmenu-btIDeclaration';
		o.iscaption = ['Temporary Export', '暂时出口', '一時的な輸出'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	// menu - EBook Managerment
	eos.qlaunch.addcom('gpEBook');
	eos.qlaunch.menu.gpEBook = eos.fn.qmenugroup(function(o) {
		o.isname = 'gpEBook';
		o.isclass = 'gtm-qmenu-gpEBook';
		o.iscaption = ['EBook Managerment', '电子账册管理', '電子帳簿の管理'];
	});
	eos.qlaunch.addcom('btEBscope');
	eos.qlaunch.menu.btEBscope = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEBscope';
		o.isclass = 'gtm-qmenu-btEBook';
		o.iscaption = ['Business Scope', '经营范围', '経営範囲'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEMantain');
	eos.qlaunch.menu.btEMantain = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEMantain';
		o.isclass = 'gtm-qmenu-btEBook';
		o.iscaption = ['EBook Maintenance', '电子账册维护', '電子帳簿のメンテナンス'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btERegister');
	eos.qlaunch.menu.btERegister = eos.fn.qmenubutton(function(o) {
		o.isname = 'btERegister';
		o.isclass = 'gtm-qmenu-btEBook';
		o.iscaption = ['EBook Registeration', '电子账册备案', '电子账册备案'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEDomestic');
	eos.qlaunch.menu.btEDomestic = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEDomestic';
		o.isclass = 'gtm-qmenu-btEBook';
		o.iscaption = ['Domestic Sales', '内销', '内销'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btEReconcile');
	eos.qlaunch.menu.btEReconcile = eos.fn.qmenubutton(function(o) {
		o.isname = 'btEReconcile';
		o.isclass = 'gtm-qmenu-btEBook';
		o.iscaption = ['EBook Reconciliation', '电子账册核销', '电子账册核销'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	// menu - Content Maintenance
	eos.qlaunch.addcom('gpContent');
	eos.qlaunch.menu.gpContent = eos.fn.qmenugroup(function(o) {
		o.isname = 'gpContent';
		o.isclass = 'gtm-qmenu-gpContent';
		o.iscaption = ['Content Maintenance', '内容维护', 'コンテンツのメンテナンス'];
	});
	eos.qlaunch.addcom('btIncoterm');
	eos.qlaunch.menu.btIncoterm = eos.fn.qmenubutton(function(o) {
		o.isname = 'btIncoterm';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Incoterm', '成交方式', 'インコタームズ'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btHScode');
	eos.qlaunch.menu.btHScode = eos.fn.qmenubutton(function(o) {
		o.isname = 'btHScode';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['HS Code', '商品编码', 'HSコード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCTmode');
	eos.qlaunch.menu.btCTmode = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCTmode';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Trade Mode Code', '贸易方式编码', 'トレードモードのコード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCTransport');
	eos.qlaunch.menu.btCTransport = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCTransport';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Transportation Code', '运输方式编码', '交通機関コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCTaxcollect');
	eos.qlaunch.menu.btCTaxcollect = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCTaxcollect';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Tax Collection Code', '征税性质编码', '税コレクションコード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCPayment');
	eos.qlaunch.menu.btCPayment = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCPayment';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Payment Code', '付款方式编码', '支払コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCIncoterm');
	eos.qlaunch.menu.btCIncoterm = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCIncoterm';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Customs Incoterm', '海关成交方式', '税関インコタームズ'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCLocation');
	eos.qlaunch.menu.btCLocation = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCLocation';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Customs Location Code', '关区代码', '税関場所コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCUsage');
	eos.qlaunch.menu.btCUsage = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCUsage';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Usage Code'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCCurrency');
	eos.qlaunch.menu.btCCurrency = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCCurrency';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Currency Code', '币值代码', '通貨コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCUnit');
	eos.qlaunch.menu.btCUnit = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCUnit';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Unit Code', '单位代码', '単位コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCCountry');
	eos.qlaunch.menu.btCCountry = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCCountry';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Country Code', '国家代码', '国コード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btCEntity');
	eos.qlaunch.menu.btCEntity = eos.fn.qmenubutton(function(o) {
		o.isname = 'btCEntity';
		o.isclass = 'gtm-qmenu-btContent';
		o.iscaption = ['Entity Code', '企业性质代码', 'エンティティコード'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	// menu - User Managerment
	eos.qlaunch.addcom('gpUserManage');
	eos.qlaunch.menu.gpUserManage = eos.fn.qmenugroup(function(o) {
		o.isname = 'gpUserManage';
		o.isclass = 'gtm-qmenu-gpUserManage';
		o.iscaption = ['User Managerment', '用户管理', 'ユーザー管理'];
	});
	eos.qlaunch.addcom('btUser');
	eos.qlaunch.menu.btUser = eos.fn.qmenubutton(function(o) {
		o.isname = 'btUser';
		o.isclass = 'gtm-qmenu-btUserManage';
		o.iscaption = ['User Profile', '用户档案', 'ユーザファイル'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btUsergroup');
	eos.qlaunch.menu.btUsergroup = eos.fn.qmenubutton(function(o) {
		o.isname = 'btUsergroup';
		o.isclass = 'gtm-qmenu-btUserManage';
		o.iscaption = ['User Group', '用户组', 'ユーザグループ'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	eos.qlaunch.addcom('btAuthorize');
	eos.qlaunch.menu.btAuthorize = eos.fn.qmenubutton(function(o) {
		o.isname = 'btAuthorize';
		o.isclass = 'gtm-qmenu-btUserManage';
		o.iscaption = ['Authorization Profile', '权限管理', '権限管理'];
		o.click = function() {eos.fn.loadjs('ajax/gtm.md.test.js', 0, eos.wait)};
	});
	
	// open
	eos.user.open = function() {eos.fn.loadjs('ajax/gtm.md.user.js', 0, eos.wait)};
	eos.config.open = function() {eos.fn.loadjs('ajax/gtm.md.config.js', 0, eos.wait)};
	
	// remoteon command
	eos.remoteon.command = function(s) {
		if (s==='Desktop' || s==='desktop' || s==='桌面') {eos.actapp(0)}
	};
};



/* start */
eos.stl.start = function() {
	// background
	eos.start.sele.slf.append("<div id='gtm-start-background'><img src='http://image.brianwang.net/start.bg.jpg' /></div>");
	
	// property
	eos.start.chd.isstatus = 0;
	eos.start.chd.isvalid = 0;
	
	// component loginwin
	eos.start.chd.loginwin = eos.fn.container(function(o) {
		o.isname = 'loginwin';
		o.isclass = 'gtm-start-loginwin';
		o.ismovable = true;
	});
	eos.start.chd.loginwin.load();
	// component uidl
	eos.start.chd.uidl = eos.fn.label(function(o) {
		o.isname = 'uidl';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-uidl';
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.velocity({opacity:1}, t)
			;
		};
		o.hide = function(t) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
			}});
		};
	});
	eos.start.chd.uidl.load();
	// component uidi
	eos.start.chd.uidi = eos.fn.input(function(o) {
		o.isname = 'uidi';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-uidi';
		o.keydown = function(event) {
			event.which===13 && eos.start.chd.pwi.setfocus();
			eos.start.chd.invalida.hide(100);
		};
		o.losefocus = function() {
			
		};
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.velocity({opacity:1}, t)
			;
		};
		o.hide = function(t) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
			}});
		};
	});
	eos.start.chd.uidi.load();
	// component pwl
	eos.start.chd.pwl = eos.fn.label(function(o) {
		o.isname = 'pwl';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-pwl';
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.velocity({opacity:1}, t)
			;
		};
		o.hide = function(t) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
			}});
		};
	});
	eos.start.chd.pwl.load();
	// component pwi
	eos.start.chd.pwi = eos.fn.input(function(o) {
		o.isname = 'pwi';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-pwi';
		o.istype = 'password';
		o.islength = 30;
		o.keydown = function(event) {
			if (event.which===13) {
				eos.start.chd.submitb.click();
				eos.start.islocked = true;
				eos.start.chd.submitb.setfocus();
			} else if (event.which===9) {
				event.preventDefault();
				eos.start.chd.uidi.setfocus();
			}
			eos.start.chd.invalida.hide(100);
		};
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.velocity({opacity:1}, t)
			;
		};
		o.hide = function(t) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
			}});
		};
	});
	eos.start.chd.pwi.load();
	// component submitb
	eos.start.chd.submitb = eos.fn.button(function(o) {
		o.isname = 'submitb';
		o.isparent = eos.start.chd.loginwin;
		o.iscaption[0] = '&crarr;';
		o.isclass = 'gtm-start-submitb';
		o.click = function() {
			eos.start.chd.validateid();
		};
		o.keydown = function(event) {
			if (event.which===9) {
				event.preventDefault();
				eos.start.chd.uidi.setfocus();
			}
		};
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.velocity({opacity:1}, t)
			;
		};
		o.hide = function(t) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
			}});
		};
	});
	eos.start.chd.submitb.load();
	// component invalida
	eos.start.chd.invalida = eos.fn.link(function(o) {
		o.isname = 'invalida';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-invalida';
		o.iscaption = ['ID/password invalid!'];
		o.show = function(t) {
			o.sele.slf
				.css('visibility', 'visible')
				.addClass('gtm-start-invalida-ani')
				.velocity('stop')
				.velocity({opacity:1}, {duration:t, complete:function() {
					o.hide(300);
				}})
			;
		};
		o.hide = function(t) {
			o.sele.slf
				.velocity('stop')
				.velocity({opacity:0}, {duration:t, complete:function() {
					o.sele.slf
						.removeClass('gtm-start-invalida-ani')
						.css('visibility', 'hidden')
						.css('opacity', '1');
					;
				}})
			;
		};
	});
	eos.start.chd.invalida.load();
	// component loadinga
	eos.start.chd.loadinga = eos.fn.link(function(o) {
		o.isname = 'loadinga';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-loadinga';
		o.iscaption = ['Validating your ID, please wait...'];
		o.show = function(t, fn) {
			o.sele.slf.velocity({opacity:1}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'visible');
				typeof fn==='function' && fn();
			}});
		};
		o.hide = function(t, fn) {
			o.sele.slf.velocity({opacity:0}, {duration:t, complete:function() {
				o.sele.slf.css('visibility', 'hidden');
				typeof fn==='function' && fn();
			}});
		};
	});
	eos.start.chd.loadinga.load();
	eos.start.chd.loadinga.hide(1);
	// component wait
	eos.start.chd.wait = eos.fn.wait(function(o) {
		o.isname = 'wait';
		o.isparent = eos.start.chd.loginwin;
		o.isclass = 'gtm-start-wait';
		o.isclassSpot = 'gtm-start-wait-i'
	});
	eos.start.chd.wait.load();
	
	// process focusit
	eos.start.chd.focusit = function() {
		eos.start.chd.uidi.setfocus();
	};
	// process validateid
	eos.start.chd.validateid = function() {
		eos.start.islocked = true;
		eos.start.chd.uidl.hide(60);
		eos.start.chd.uidi.hide(60);
		eos.start.chd.pwl.hide(60);
		eos.start.chd.pwi.hide(60);
		eos.start.chd.submitb.hide(60);
		eos.start.chd.invalida.hide(60);
		eos.start.chd.loadinga.show(180);
		eos.start.chd.wait.show();
		
		if (eos.start.chd.uidi.value()==='admin' && eos.start.chd.pwi.value()==='admin') {
			eos.start.chd.isvalid = 1;
			eos.user.userid('admin');
			if (eos.start.chd.isstatus===1) {
				eos.start.chd.loadingc();
			} else {
				eos.start.chd.loadinga.iscaption = ['Loading system components...'];
				eos.start.chd.loadinga.refresh();
			}
		} else {
			setTimeout(function() {
				eos.start.chd.loadinga.hide(130, function() {
					eos.start.islocked = false;
					eos.start.chd.pwi.setfocus();
				});
				eos.start.chd.wait.hide();
				eos.start.chd.invalida.show(5000);
				eos.start.chd.uidl.show(130);
				eos.start.chd.uidi.show(130);
				eos.start.chd.pwl.show(130);
				eos.start.chd.pwi.show(130);
				eos.start.chd.submitb.show(130);
			}, 1000);
		}
	};
	// process loading
	eos.start.chd.loading = function() {
		eos.fn.loadimgs([
			'ajax/lib.eos.ico.user.png',
			'ajax/lib.eos.ico.config.png',
			'ajax/lib.eos.ico.exit.png',
			'http://image.brianwang.net/app.bg.png'
		], 3000, eos.start.chd.loading1);
	};
	eos.start.chd.loading1 = function() {
		eos.fn.loadjss([
			'ajax/gtm.idb.setup.js',
			'ajax/lib.jvectormap.js',
			'ajax/lib.jvectormap.worldmill.js',
			'ajax/gtm.md.desktop.js'
		], 0, eos.start.chd.loading2);
	};
	eos.start.chd.loading2 = function() {
		eos.fn.wait2run(function() {
			return (typeof eos.idb.name!=='undefined' && eos.idb.name==='explorerOS');
		}, eos.start.chd.loadingc, 5000);
	};
	eos.start.chd.loadingc = function() {
		eos.start.chd.isstatus = 1;
		if (eos.start.chd.isvalid===1) {
			eos.start.chd.loadinga.iscaption = ['Initialize system environment...'];
			eos.start.chd.loadinga.refresh();
			setTimeout(eos.start.chd.complete, 1300);
		}
	};
	eos.start.chd.loading();
	
	// process complete
	eos.start.chd.complete = function() {
		eos.start.exit(360, function() {
			eos.qlaunch.show();
			eos.taskbar.show();
			//eos.remoteon(1);
			gtm_desktop();
		});
	};
	
};



return eos;
})(eos, jQuery);
