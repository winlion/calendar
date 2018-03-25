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
			if(pinfo.hasClass("pailuanqi")){
				$(".tiptuijian").html("当前处于排卵期,请做好安全措施哦");
			}
			if(pinfo.hasClass("anquanqi")){
				$(".tiptuijian").html("当前处于安全期,放心玩耍吧！！");
			}
			if(pinfo.hasClass("jinqi")){
				$(".tiptuijian").html("当前处于月经期,请注意保持美好心情哦！");
			}
			
			$(".curentdate").html(new Date(parseInt(o.attr("utc"))).format("MM-dd"));
			$(".calendar1").on("click","td",function(){
				$(o).find("p").removeClass("border7ecbed");
				$(this).find("p").addClass("border7ecbed");
			})
		},
		onRenderDate:function(o){
			$(o).html("<p>"+$(o).html()+"</p>"); //这里完成添加p标签
			var startat = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
			var tm = parseInt(o.attr("utc"))
			if(tm== startat.getTime()){
				$(o).html("<p class='today border7ecbed'>今</p>");
			}
			if(healthData.inJinqi(tm)){
				o.find("p").addClass("font_style1").addClass("jinqi");
			}
			/*if(healthData.inJinqiyuce(tm)){
				o.find("p").addClass("font_style6").addClass("jinqi");
			}*/
			if(healthData.inanquanqi(tm)){
				o.find("p").addClass("anquanqi");
			}
			if(healthData.inpailuan(tm)){
				o.find("p").addClass("pailuanqi").addClass("font_style4");
			}
			if(healthData.inpailuan2(tm)){
				o.find("p").addClass("font_style3");
			}
			if(healthData.atpailuan(tm)){
				o.find("p").addClass("font_style3").addClass("atpailuan");
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