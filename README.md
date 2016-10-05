# ExplorerOS

ExplorerOS is a JavaScript library built to facilitate web application development.
It calls jQuery APIs, 1.x/2.x/3.x depending on your needs.
It currently also calls velocityJS APIs as it's a fast animation engine. This will be soon replaced by core. 

Feel free to visit our website for more details: http://www.explorerOS.com.



How to Include
--------------
```
<link href="ajax/lib.eos.css" rel="stylesheet" type="text/css"/>
<script src="ajax/lib.jquery.js"></script>
<script src="ajax/lib.velocity.js"></script>
<script src="ajax/lib.eos.js"></script>
```


APIs
--------------
ExplorerOS contains three modules: Core, UI Framework, and UI Components.

APIs - Core
----------
Variables:
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

APIs - UI framework
-------------------
Variables:
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

Objects:
* eos.start
  * eos.start.isappid = -1







Safe Namespace
--------------
Please be aware that any customized variable under 'eos' is not safe. For extension of ExplorerOS, please use namespace 'eos.stl' or 'eos.xtn'.
