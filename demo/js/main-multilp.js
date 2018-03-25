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
			alert("你点击了" + pinfo.html());
		},
		onRenderDate:function(o){
			$(o).html("<p>"+$(o).html()+"</p>"); //这里完成添加p标签
			var startat = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
			var tm = parseInt(o.attr("utc"))
			if(tm== startat.getTime()){
				$(o).html("<p class='today border7ecbed'>今</p>");
			}
			//这里添加各种逻辑判断
		},
		container:$(".calendar")
		}		
     
	$(function(){
		//1
		var calendar = new  Calendar();
        calendar.init(opts);
        calendar.create(-3,3);
       
		//
		opts.container = $(".calendar2");
		var calendar2 = new  Calendar();
        calendar2.init(opts);
        calendar2.create(-3,3);
       
		//
		opts.container = $(".calendar3");
		var calendar3 = new  Calendar();
        calendar3.init(opts);
        calendar3.create(-3,3);
      
	})
});