function gtm_desktop() {
eos.newapp(0, 0, 'desktop', function(o) {
	o.chd.iscaption = ['desktop', '桌面', 'デスクトップ'];
	o.chd.isthumbnail = '';
	o.chd.isid = 'desktop';
	o.chd.isparentid = o.isid;
	o.chd.isappid = o.isappid;
	o.chd.load = function() {
		o.sele.bdy.append("<div id='desktop'></div>");
		o.chd.sele = {};
		o.chd.sele.slf = $('#desktop');
		o.chd.sele.slf
			.css('width', $(window).width()+'px')
			.css('height', $(window).height()+'px')
		;
	};
	o.chd.init = function() {
		$(function() {
			$('#desktop').vectorMap({map:'world_mill'});
		});
		$(window).on('resize', function() {
			var w = $(window).width() + 'px';
			var h = $(window).height() + 'px';
			o.chd.sele.slf.velocity({width:w, height:h}, 1);
		});
	};
	o.chd.load();
	o.chd.init();
});
}
