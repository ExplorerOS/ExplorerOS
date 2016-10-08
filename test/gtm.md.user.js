gtm_test();
function gtm_test() {
	eos.wait(1);
	eos.fn.readBDO('userProfile', 'admin', function(data) {
		gtm_test0(data);
	});
}
function gtm_test0(data) {
eos.newapp(-1, 1, 'User', function(app) {
	app.chd.iscaption = ['User', '用户', 'ユーザー'];
	app.chd.isthumbnail = '';
	app.chd.hotkey = function(event) {
		if (event.which===27) {
			eos.msg(3, eos.lang.app.sure_to_close, function(r) {
				r===1 && app.close();
			});
		}
	};
	
	// block Information
	app.chd.ctBlockInfo = eos.fn.container(function(c) {
		c.isname = 'ctBlockInfo';
		c.isclass = 'gtm-container-block';
	});
	app.chd.ctBlockInfo.load();
	app.chd.ttUserinfo1 = eos.fn.link(function(c) {
		c.isname = 'ttUserinfo1';
		c.isparent = app.chd.ctBlockInfo;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['User Information', '用户信息', 'ユーザー情報'];
	});
	app.chd.ttUserinfo1.load();
	app.chd.ttUserinfo2 = eos.fn.link(function(c) {
		c.isname = 'ttUserinfo2';
		c.isparent = app.chd.ctBlockInfo;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttUserinfo2.load();
	// block Information - User ID
	app.chd.ccUserid = eos.fn.container(function(c) {
		c.isname = 'ccUserid';
		c.isparent = app.chd.ctBlockInfo;
		c.isclass = 'gtm-container-component gtm-user-component';
	});
	app.chd.ccUserid.load();
	app.chd.lbUserid = eos.fn.label(function(c) {
		c.isname = 'lbUserid';
		c.isparent = app.chd.ccUserid;
		c.isclass = 'gtm-label';
		c.iscaption = ['User ID', '用户名', 'ユーザーID'];
	});
	app.chd.lbUserid.load();
	app.chd.ipUserid = eos.fn.input(function(c) {
		c.isname = 'ipUserid';
		c.isparent = app.chd.ccUserid;
		c.isclass = 'gtm-input gtm-user-input';
	});
	app.chd.ipUserid.load();
	app.chd.ipUserid.value(data.uid);
	app.chd.ipUserid.disable();
	// block Information - email
	app.chd.ccEmail = eos.fn.container(function(c) {
		c.isname = 'ccEmail';
		c.isparent = app.chd.ctBlockInfo;
		c.isclass = 'gtm-container-component gtm-user-component';
	});
	app.chd.ccEmail.load();
	app.chd.lbEmail = eos.fn.label(function(c) {
		c.isname = 'lbEmail';
		c.isparent = app.chd.ccEmail;
		c.isclass = 'gtm-label';
		c.iscaption = ['Email', '电子邮箱', 'Eメール'];
	});
	app.chd.lbEmail.load();
	app.chd.ipEmail = eos.fn.input(function(c) {
		c.isname = 'ipEmail';
		c.isparent = app.chd.ccEmail;
		c.isclass = 'gtm-input gtm-user-input';
	});
	app.chd.ipEmail.load();
	app.chd.ipEmail.value(data.email);
	// block Information - language
	app.chd.ccLanguage = eos.fn.container(function(c) {
		c.isname = 'ccLanguage';
		c.isparent = app.chd.ctBlockInfo;
		c.isclass = 'gtm-container-component gtm-user-component';
	});
	app.chd.ccLanguage.load();
	app.chd.lbLanguage = eos.fn.label(function(c) {
		c.isname = 'lbLanguage';
		c.isparent = app.chd.ccLanguage;
		c.isclass = 'gtm-label';
		c.iscaption = ['Default Language', '默认语言', 'デフォルト言語'];
	});
	app.chd.lbLanguage.load();
	app.chd.seLanguage = eos.fn.select(function(c) {
		c.isname = 'seLanguage';
		c.isparent = app.chd.ccLanguage;
		c.isclass = 'gtm-select gtm-user-select';
		c.isoption = eos.langbar.langlist;
		c.isselected = data.language;
	});
	app.chd.seLanguage.load();
	// block Authorization
	app.chd.ctBlockAuthorize = eos.fn.container(function(c) {
		c.isname = 'ctBlockAuthorize';
		c.isclass = 'gtm-container-block';
	});
	app.chd.ctBlockAuthorize.load();
	app.chd.ttAuthorize1 = eos.fn.link(function(c) {
		c.isname = 'ttAuthorize1';
		c.isparent = app.chd.ctBlockAuthorize;
		c.isclass = 'gtm-link-title';
		c.iscaption = ['Authorization', '权限管理', '権限の管理'];
	});
	app.chd.ttAuthorize1.load();
	app.chd.ttAuthorize2 = eos.fn.link(function(c) {
		c.isname = 'ttAuthorize2';
		c.isparent = app.chd.ctBlockAuthorize;
		c.isclass = 'gtm-link-line';
	});
	app.chd.ttAuthorize2.load();
	// block Authorization - User Group
	app.chd.ccUsergroup = eos.fn.container(function(c) {
		c.isname = 'ccUsergroup';
		c.isparent = app.chd.ctBlockAuthorize;
		c.isclass = 'gtm-container-component gtm-user-component';
	});
	app.chd.ccUsergroup.load();
	app.chd.lbUsergroup = eos.fn.label(function(c) {
		c.isname = 'lbUsergroup';
		c.isparent = app.chd.ccUsergroup;
		c.isclass = 'gtm-label';
		c.iscaption = ['User Group', '用户组', 'ユーザグループ'];
	});
	app.chd.lbUsergroup.load();
	app.chd.ipUsergroup = eos.fn.input(function(c) {
		c.isname = 'ipUsergroup';
		c.isparent = app.chd.ccUsergroup;
		c.isclass = 'gtm-input gtm-user-input';
	});
	app.chd.ipUsergroup.load();
	app.chd.ipUsergroup.value(data.ugroup);
	app.chd.ipUsergroup.disable();
});
}
