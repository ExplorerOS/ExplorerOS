# ExplorerOS

ExplorerOS is a JavaScript library built to facilitate web application development.
It calls jQuery APIs, 1.x/2.x/3.x depending on your needs.
It currently also calls velocityJS APIs as it's a fast animation engine. This will be soon replaced by core. 

Feel free to visit our website for more details: http://www.explorerOS.com.



How to Include
--------------

ExplorerOS is composed of three modules: Core, Framework, and Components. We are free to include any of them separately for our convenience. Here is an example to include the complete version of explorerOS.
```
<link href="ajax/lib.eos.css" rel="stylesheet" type="text/css"/>
<script src="ajax/lib.jquery.js"></script>
<script src="ajax/lib.velocity.js"></script>
<script src="ajax/lib.eos.js"></script>
```



EOS.Core
----------

How to use:
```
alert("the client is " + eos.isbrowser);
eos.fn.loadimgs([
  'ajax/lib.eos.ico.user.png',
  'ajax/lib.eos.ico.config.png',
  'http://image.brianwang.net/start.bg.jpg',
  'ajax/lib.eos.ico.exit.png'
], 3000, function() {
  alert('Loading images is done!')
});
```

Properties:

* eos.isrepdur - the pause duration of the global repetitive event
* eos.iswkpath - the filepath of web workers
* eos.isbrowser - the client browser name: ie/edge/firefox/opera/chrome/safari

Functions:

* eos.fn.loadjs(url_string, sw_integer, [callback_function])
* eos.fn.loadjss(urls_array, sw_integer， [callback_function])
* eos.fn.loadimgs(urls_array, timeout_integer, [callback_function])
* eos.fn.gettxtline(txt_string, start_integer)
* eos.fn.initDB(version_integer, upgrade_function)
* eos.fn.updateBDO(obj_string, data_array)
* eos.fn.readBDO(obj_string, key_string, process_function)
* eos.fn.wait2run(determination_function, callback_function, duration_integer)



EOS.Framework
-------------------

How to use:
```
eos = (function(eos, $) {
  eos.stl.setting = function() {
    // language setting
    eos.langbar.islangtotal = 3;
    eos.langbar.langlist[1] = '中文,&nbsp;简体中文';
    eos.langbar.langlabel[1] = 'CHS';
    eos.langbar.langlist[2] =  '日本語';
    eos.langbar.langlabel[2] = 'JPN';
    // global hotkey
    eos.hotkey.global = function(event) {};
    // menu
    eos.qlaunch.addcom('gpMaster');
    eos.qlaunch.menu.gpMaster = eos.fn.qmenugroup(function(o) {
      o.isname = 'gpMaster';
      o.isclass = 'qmenu-gpMaster';
      o.iscaption = ['Master Data', '主数据', 'マスターデータ'];
    });
    eos.qlaunch.addcom('btOrganize');
    eos.qlaunch.menu.btOrganize = eos.fn.qmenubutton(function(o) {
      o.isname = 'btOrganize';
      o.isclass = 'qmenu-btMaster';
      o.iscaption = ['Organization Structure', '组织架构', '組織構造'];
      o.click = function() {};
    });
  }
  eos.stl.start = function() {
    // property
    eos.start.chd.isstatus = 0;
    ...
    // components
    ...
  };
  return eos;
})(eos, jQuery);

jQuery(document).ready(function($) {
  eos.fn.loadjss([
    'js/mod01.js',
    'js/mod02.js',
    'js/mod02.js'
  ], 0, function() {
    eos.stl.setting();
    eos.load();
    eos.init();
    eos.stl.start();
    eos.resize();
    eos.refresh(0);
    eos.start.enter(1300);
  });
});
```

Properties:

* eos.issizeminX - the minimal width of the page
* eos.issizeminY - the height width of the page
* eos.isappmax - the maximal number of subpages

Functions:

* eos.load()
* eos.init()
* eos.wait(sw_integer)
* eos.msg(type_integer, msg_string, callback_function)
* eos.resize()
* eos.refresh(sw_integer)
* eos.newapp(appid_integer, single_integer, name_string, module_function)
* eos.clsapp(appid)
* eos.actapp(appid)
* eos.changelang(lanid)
* eos.remoteon(sw_integer)
* eos.fn.qmenugroup(customization_function)
* eos.fn.qmenubutton(customization_function)

Objects:

* eos.start
  * eos.start.resize(x_integer, y_integer, duration_integer, callback_function)
  * eos.start.refresh()
  * eos.start.enter(duration_integer, callback_function)
  * eos.start.exit(duration_integer, callback_function)
  * eos.start.chd - open to customization
* eos.app[i]
  * eos.app[i].resize(x_integer, y_integer, duration_integer, callback_function)
  * eos.app[i].refresh()
  * eos.app[i].show(duration_integer, callback_function)
  * eos.app[i].hide(duration_integer, callback_function)
  * eos.app[i].stepIn(duration_integer)
  * eos.app[i].stepOut(duration_integer)
  * eos.app[i].enter(duration_integer, callback_function)
  * eos.app[i].exit(duration_integer, callback_function)
  * eos.app[i].chd - open to customization
* eos.qlaunch
  * eos.qlaunch.addcom(name_string)
  * eos.qlaunch.hoverOn()
  * eos.qlaunch.hoverOff()
  * eos.qlaunch.resize(y_integer, duration_integer)
  * eos.qlaunch.refresh()
  * eos.qlaunch.show()
  * eos.qlaunch.hide()
* eos.taskbar
  * eos.taskbar.hoverOn()
  * eos.taskbar.hoverOff()
  * eos.taskbar.resize(y_integer, duration_integer)
  * eos.taskbar.refresh()
  * eos.taskbar.show()
  * eos.taskbar.hide()
* eos.user
  * eos.user.userid(uid_string)
  * eos.user.open = function() {} - open to customization
* eos.date (requires eos.wkr.date)
  * eos.date.open = function() {} - open to customization
* eos.langbar
  * eos.date.islangtotal - the number o total optional languages, open to customization
  * eos.date.langlist[i] - the name of each optional language, open to customization
  * eos.date.langlabel[i] - the label string of each optional language, open to customization
* eos.config
  * eos.config.open = function() {} - open to customization

Hotkey:

* eos.hotkey.global(event)
* app.chd.hotkey(event)

It is available to set hotkey event in global level as we as local level. To set up a global hotkey event, we can define like this:
```
eos.hotkey.global = function(event) {
  ...
};
```
To set up a local hotkey event, we can define like this:

```
app.chd.hotkey = function(event) {
  ...
};
```



EOS.Components
--------------------

How to use:
```
test();
function test() {
  eos.wait(1);
  eos.fn.readBDO('userProfile', 'admin', function(data) {
    test0(data);
  });
}
function test0(data) {
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
      c.isclass = 'c-container-block';
    });
    app.chd.ctBlockInfo.load();
    // block Information - User ID
    app.chd.ccUserid = eos.fn.container(function(c) {
      c.isname = 'ccUserid';
      c.isparent = app.chd.ctBlockInfo;
      c.isclass = 'c-container-component c-user-component';
    });
    app.chd.ccUserid.load();
    app.chd.lbUserid = eos.fn.label(function(c) {
      c.isname = 'lbUserid';
      c.isparent = app.chd.ccUserid;
      c.isclass = 'c-label';
      c.iscaption = ['User ID', '用户名', 'ユーザーID'];
    });
    app.chd.lbUserid.load();
    app.chd.ipUserid = eos.fn.input(function(c) {
      c.isname = 'ipUserid';
      c.isparent = app.chd.ccUserid;
      c.isclass = 'c-input c-user-input';
    });
    app.chd.ipUserid.load();
    app.chd.ipUserid.value(data.uid);
    app.chd.ipUserid.disable();
    // block Information - email
    app.chd.ccEmail = eos.fn.container(function(c) {
      c.isname = 'ccEmail';
      c.isparent = app.chd.ctBlockInfo;
      c.isclass = 'c-container-component c-user-component';
    });
    app.chd.ccEmail.load();
    app.chd.lbEmail = eos.fn.label(function(c) {
      c.isname = 'lbEmail';
      c.isparent = app.chd.ccEmail;
      c.isclass = 'c-label';
      c.iscaption = ['Email', '电子邮箱', 'Eメール'];
    });
    app.chd.lbEmail.load();
    app.chd.ipEmail = eos.fn.input(function(c) {
      c.isname = 'ipEmail';
      c.isparent = app.chd.ccEmail;
      c.isclass = 'c-input c-user-input';
    });
    app.chd.ipEmail.load();
    app.chd.ipEmail.value(data.email);
    // block Information - language
    app.chd.ccLanguage = eos.fn.container(function(c) {
      c.isname = 'ccLanguage';
      c.isparent = app.chd.ctBlockInfo;
      c.isclass = 'c-container-component c-user-component';
    });
    app.chd.ccLanguage.load();
    app.chd.lbLanguage = eos.fn.label(function(c) {
      c.isname = 'lbLanguage';
      c.isparent = app.chd.ccLanguage;
      c.isclass = 'c-label';
      c.iscaption = ['Default Language', '默认语言', '既定の言語'];
    });
    app.chd.lbLanguage.load();
    app.chd.seLanguage = eos.fn.select(function(c) {
      c.isname = 'seLanguage';
      c.isparent = app.chd.ccLanguage;
      c.isclass = 'c-select gtm-user-select';
      c.isoption = eos.langbar.langlist;
      c.isselected = data.language;
    });
    app.chd.seLanguage.load();
  });
}
```

Funtions:

* eos.fn.container(customization1_function, [customization2_function])
* eos.fn.label(customization1_function, [customization2_function])
* eos.fn.input(customization1_function, [customization2_function])
* eos.fn.button(customization1_function, [customization2_function])
* eos.fn.grid(customization1_function, [customization2_function])
* eos.fn.wait(customization1_function, [customization2_function])

Components public properties & functions:

* isname - the name of this object
* isparent - the parent object
* isclass - the css class name
* load()
* init()
* unload()
* hoverOn()
* hoverOff()
* click(event)
* dblclick(event)
* mousedown(event)
* mouseup(event)
* mousemove(event)
* keydown(event)
* keyup(event)
* keypress(event)
* resize(x, y, t)
* refresh()

Components private properties & functions:

* container
  * ismovable - true/false
* label
  * iscaption - an array contains strings for different languages
* input
  * istype - text/password/checkbox/radio/file/...
  * islength - the number of the maximal length
  * getfocus()
  * losefocus()
  * setfocus()
  * enable()
  * disable()
  * value([s])
* button
  * iscaption - an array contains strings for different languages
  * getfocus()
  * losefocus()
  * setfocus()
  * enable()
  * disable()
* grid
  * isclassHead - the css class name for header
  * isclassCell - the css class name for cell
  * dataobj - an array contains data object names
  * datasource - an array of data
  * isheader - an array of setting of header ([name, type, width])
  * isrecmax - the number if maximal records shown
  * iscolorhover - the color when the line is hovered, default '#e7e7e7'
  * iscolorselect - the color when the line is selected, default '#bbeae3'
  * iscolorhovers - the color when the selected line is hovered, default '#a9d5cf'
  * ispage - the current page number of data
  * wait(sw)
  * redata()
  * getSelect()



Safe Namespace
--------------
Please be aware that any customized variable under 'eos' is not safe. For extension of ExplorerOS, please use namespace 'eos.stl' or 'eos.xtn'.
