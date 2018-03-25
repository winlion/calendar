require.config({
	paths : {
		"jquery" :"jquery.min",
		"swiper" :"swiper-3.3.1.min",
		"ladycalendar":"ladycalendar"
	}
})
require([ 'jquery',"ladycalendar" ], function($, Calendar) {
	
	//如下代码用来渲染日历
		var opts={
			onClickDate:function(o){
			var pinfo = o.find("p");
			
		},
		onRenderDate:function(o){
			$(o).html("<p>"+$(o).html()+"</p>"); //这里完成添加p标签
			var startat = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
			var tm = parseInt(o.attr("utc"))
			if(tm== startat.getTime()){
				//$(o).html("<p class='today border7ecbed'>今</p>");
			}
			
		},
			container:$(".calendar")
		}		
     
	$(function(){
		var calendar = new  Calendar();
        calendar.init(opts);
        calendar.create(-3,3);
        opts.onClickDate($(".today").parent("td"));
	})
});