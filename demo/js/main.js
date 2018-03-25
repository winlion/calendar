require.config({
	paths : {
		"jquery" :"jquery.min",
		"swiper" :"swiper-3.3.1.min",
		"ladycalendar":"ladycalendar"
	}
})
require([ 'jquery',"ladycalendar" ], function($, Calendar) {
							
		/*
		女性的排卵日期一般在下次月经来潮前的14天左右。
		下次月经来潮的第1天算起，倒数14天或减去14天就是排卵日，
		排卵日及其前5天和后4天加在一起称为排卵期。
		例如，某女的月经周期为28天，本次月经来潮的第1天在12月2日，
		那么下次月经来潮是在12月30日（12月2日加28天），
		再从12月30日减去14天，则12月16日就是排卵日。
		排卵日及其前5天和后4天，也就是12月11-20日为排卵期。
		除了月经期和排卵期，其余的时间均为安全期。
		在安全期性交可不必采用任何避孕药物和避孕工具。 
		安全期月历因个人体质变异差异极大，因此仅供参考。 
		*/
		
		/*
		jqstart0:开始时间
		jqchixu:持续时间
		jqzhouqi:周期时间
		*/
		
	var healthData={
		"laststartat":0,
		"jinqichixu":7,
		"jinqizhouqi":28,
		"times":10
	}	
	healthData.init = function(){
		var jqstart0 = parseInt(localStorage.getItem("laststartat"));
		if(!!jqstart0){
			this.laststartat = jqstart0;
		}
		var jinqichixu = parseInt(localStorage.getItem("jinqichixu"));
		
		if(!jinqichixu){
			this.jinqichixu = 7;
		}else{
			this.jinqichixu = jinqichixu;
		}
		
		var jinqizhouqi = parseInt(localStorage.getItem("jinqizhouqi"));
		if(!jinqizhouqi){
			this.jinqizhouqi = 28;
		}else{
			this.jinqizhouqi = jinqizhouqi;
		}
		
	};
	healthData.init();
	healthData.inJinqi=function(tm){
			for(var i=-this.times;i<this.times;i+=1){
				var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
				
			if(tm>=startat && tm<startat+this.jinqichixu*3600*1000*24){
					return true;
				}
			}
			return false;
		}
        
    healthData.inJinqiyuce=function(tm){
		for(var i=-this.times;i<this.times;i+=1){
			var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
			if(tm>=startat && tm<startat+this.jinqichixu*3600*1000*24){
				return true;
			}
        }
        return false;
        }
	healthData.inanquanqi=function(tm){
			return !this.inpailuan(tm) && !this.inJinqi(tm);
	}	
	healthData.inpailuan=function(tm,tb,ta){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm>=startat-5*24*3600*1000 && tm<=startat+4*24*3600*1000){
					return true;
				}
			}
			return false;
		}
		healthData.inpailuan2=function(tm,tb,ta){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm>=startat-1*24*3600*1000 && tm<=startat+1*24*3600*1000){
					return true;
				}
			}
			return false;
		}
		healthData.atpailuan=function(tm){
			var at = this.laststartat - 14*24*3600*1000;
			for(var i=-this.times;i<this.times;i+=1){
				var startat = at + i*this.jinqizhouqi*24*3600*1000;
				if(tm==startat){
					return true;
				}
			}
			return false;
		}
		healthData.atjinqistart=function(tm){
			for(var i=-this.times;i<this.times;i+=1){
				var startat = this.laststartat + i*this.jinqizhouqi*24*3600*1000;
				
			if(tm==startat){
					return true;
				}
			}
			return false;
		}
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