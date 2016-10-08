gtm_test();
function gtm_test() {
eos.newapp(-1, 1, 'configuration', function(app) {

	app.chd.iscaption = ['Configuration', '设置', '設置'];
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
	
	// block - Organization
	app.chd.ttOrganize1 = eos.fn.link(function(c) {
		c.isname = 'ttOrganize1';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Organization Structure', '组织构架', '組織構造'];
	});
	app.chd.ttOrganize1.load();
	app.chd.ttOrganize2 = eos.fn.link(function(c) {
		c.isname = 'ttOrganize2';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttOrganize2.load();
	app.chd.lkCorporate = eos.fn.link(function(c) {
		c.isname = 'lkCorporate';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['Corporate Profile', '集团公司档案', '会社プロフィール'];
	});
	app.chd.lkCorporate.load();
	app.chd.lkSubsidiary = eos.fn.link(function(c) {
		c.isname = 'lkSubsidiary';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['Subsidiary Profile', '分公司档案', '子会社プロフィール'];
	});
	app.chd.lkSubsidiary.load();
	// block - User Management
	app.chd.ttUserManage0 = eos.fn.link(function(c) {
		c.isname = 'ttUserManage0';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-blank';
	});
	app.chd.ttUserManage0.load();
	app.chd.ttUserManage1 = eos.fn.link(function(c) {
		c.isname = 'ttUserManage1';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['User Managerment', '用户管理', 'ユーザ管理'];
	});
	app.chd.ttUserManage1.load();
	app.chd.ttUserManage2 = eos.fn.link(function(c) {
		c.isname = 'ttUserManage2';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttUserManage2.load();
	app.chd.lkUser = eos.fn.link(function(c) {
		c.isname = 'lkUser';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['User Profile', '用户档案', 'ユーザファイル'];
	});
	app.chd.lkUser.load();
	app.chd.lkUsergroup = eos.fn.link(function(c) {
		c.isname = 'lkUsergroup';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['User Group', '用户组', 'ユーザグループ'];
	});
	app.chd.lkUsergroup.load();
	app.chd.lkUserauthorize = eos.fn.link(function(c) {
		c.isname = 'lkUserauthorize';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['Authorization Profile', '权限管理', '権限管理'];
	});
	app.chd.lkUserauthorize.load();
	// block - Master Data
	app.chd.ttMasterData0 = eos.fn.link(function(c) {
		c.isname = 'ttMasterData0';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-blank';
	});
	app.chd.ttMasterData0.load();
	app.chd.ttMasterData1 = eos.fn.link(function(c) {
		c.isname = 'ttMasterData1';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Master Data', '主数据', '主データ'];
	});
	app.chd.ttMasterData1.load();
	app.chd.ttMasterData2 = eos.fn.link(function(c) {
		c.isname = 'ttMasterData2';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttMasterData2.load();
	app.chd.lkUnit = eos.fn.link(function(c) {
		c.isname = 'lkUnit';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['Unit of Measure', '单位管理', 'ユニット管理'];
	});
	app.chd.lkUnit.load();
	app.chd.lkCustomspro = eos.fn.link(function(c) {
		c.isname = 'lkCustomspro';
		c.isparent = app.chd.ctBlock;
		c.isclass = 'gtm-config-link';
		c.iscaption = ['Customs Profile', '海关账册管理', '税関の帳簿の管理'];
	});
	app.chd.lkCustomspro.load();

});
}
