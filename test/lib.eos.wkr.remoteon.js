eos_wkr_order();function eos_wkr_order(){ajaxload("/../api/api.wechatorders.php",function(a){a=JSON.parse(a);if(a.status==="0"){postMessage(a.msg)}return setTimeout(eos_wkr_order,1000)})}function ajaxload(b,a){var c=new XMLHttpRequest();c.onreadystatechange=function(){if(c.readyState==4&&c.status==200){a(c.responseText)}};c.open("GET",b,true);c.send()};