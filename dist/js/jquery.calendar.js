~(function ($,Swiper) {
	Date.prototype.format = function(fmt)   
	{    
	  var o = {   
		"M+" : this.getMonth()+1,                 //月份   
		"d+" : this.getDate(),                    //日   
		"h+" : this.getHours(),                   //小时   
		"m+" : this.getMinutes(),                 //分   
		"s+" : this.getSeconds(),                 //秒   
		"q+" : Math.floor((this.getMonth()+3)/3), //季度   
		"S"  : this.getMilliseconds()             //毫秒   
	  };
		if(!fmt){
			fmt ="yyyy/MM/dd hh:mm:ss";
		}
	  if(/(y+)/.test(fmt))   
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
		if(new RegExp("("+ k +")").test(fmt))   
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
		return fmt;   
	}
	function _createtable(container,year,month){
		//获得本月开始时间
		var firstdate = new Date(year,month,1);	
		//获得下月开始时间
		var lastdate = new Date(year,month+1,0);
		//获得本月第一个星期一的时间
		var day = firstdate.getDay();
		
		var str = "";
		str  +="<div class=\"swiper-slide\">"
		str  +="<div class=\"calendar-header\">"+firstdate.getFullYear()+"年"+(firstdate.getMonth()+1)+"月</div>"
		str += "<table  class=\"calendar-table\" year=\""+year+"\" month=\""+month+"\">";
		str  +="<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>";
		str  +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		str  +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		str  +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		str  +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		str  +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		str += "</table></div>"
		//添加到dom
		container.append(str);
		//对第一天赋值
		var tds = container.find(".calendar-table[year="+year+"][month="+month+"]").find("td");
		for(var j=0,i=firstdate.getTime()-day*24*3600*1000 ;i<=lastdate.getTime()+(7-day)*24*3600*1000;j += 1,i += 24*3600*1000){
			tds.eq(j).attr("utc",i).html(new Date(i).getDate());
			//console.log(year,month,j,i,new Date(i).getDate());
		}
		return str;
	}
	function fclicktd(o){}
	function frendertd(o){}
	var _defaultopts={
		onClickDate:fclicktd,
		onRenderDate:frendertd,
		container:$(".calendar"),
		tprev:-3,
		tnext:3
	}
	
	$.fn.extend({
                "calendar": function (_opts) {
                    var container = this;
					var opts=_defaultopts;
					for(var i in _opts){
							opts[i] = _opts[i];
					}
				
					var fromdate = new Date();
					var cls = new Date().getTime();
					container.html("<div class=\"swiper-container ladycalendar-swiper-container-"+cls+"\"><div class=\"swiper-wrapper swiper-wrapper-ladycalendar-"+cls+"\" ></div></div>");
					for(var j=opts.tprev;j<=opts.tnext;j++){
					_createtable($(".swiper-wrapper-ladycalendar-"+cls),fromdate.getFullYear(),fromdate.getMonth()+j);
					}
					var mySwiper = new Swiper (".ladycalendar-swiper-container-"+cls, {"initialSlide":-opts.tprev});
					//绑定事件
					container.on("click","td",function(){	opts.onClickDate($(this));})
					//渲染dom
					container.find("td").each(function(){opts.onRenderDate($(this));});
				
                }
            });
})(jQuery,Swiper)    
