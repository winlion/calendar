# 1、首先上效果
一个页面多个控件效果如下
![一个页面多个控件效果](https://github.com/winlion/calendar/blob/master/multilp.png)
一个页面单个控件效果如下
![一个页面多个控件效果](https://github.com/winlion/calendar/blob/master/single.png)
# 2、如何使用
我们支持require形式，jquery插件形式和原生形式
## 2.1、在requirejs中使用
该方式对应demo\index-sigle.html,使用方式如下
### 引进css
```html
<link rel="stylesheet" type="text/css" href="css/record.css" />
<link rel="stylesheet" type="text/css" href="css/swiper-3.3.1.min.css" />
```
### 在body中引进dom
```html
<div class="calendar"></div>
```
### 引入js
```js
<script type="text/javascript" data-main="js/main-lady" 	src="js/require.min.js"></script>
```

## 2.2、使用jquery插件
该方式对应demo\index-jquery.html,使用方式如下
### 引进css
```html
<link rel="stylesheet" type="text/css" href="css/record.css" />
<link rel="stylesheet" type="text/css" href="css/swiper-3.3.1.min.css" />
```
### 在body中引进dom
```html
<div class="calendar" id="test01"></div>
			<div class="calendar" id="test02">	</div>		
				<div class="calendar" id="test03">	</div>		
				<div class="calendar" id="test04">	</div>		
```
### 引入js 并初始化
```js
<script type="text/javascript"  	src="js/jquery.min.js"></script>
<script type="text/javascript"  	src="js/swiper-3.3.1.min.js"></script>
<script type="text/javascript"  	src="js/jquery.calendar.js"></script>
<script>
$(function(){
	$("#test01").calendar();
	$("#test02").calendar();
	$("#test03").calendar();
	$("#test04").calendar();
})
</script>

```



## 2.3、使用原生js
该方式对应demo\index-class.html,使用方式如下
### 引进css
```html
<link rel="stylesheet" type="text/css" href="css/record.css" />
<link rel="stylesheet" type="text/css" href="css/swiper-3.3.1.min.css" />
```
### 在body中引进dom
```html
<div class="calendar" id="test01"></div>
			<div class="calendar" id="test02">	</div>		
				<div class="calendar" id="test03">	</div>		
				<div class="calendar" id="test04">	</div>		
```
### 引入js 并初始化
```js
<script type="text/javascript"  	src="js/jquery.min.js"></script>
<script type="text/javascript"  	src="js/swiper-3.3.1.min.js"></script>
<script type="text/javascript"  	src="js/calendar.js"></script>
<script>
$(function(){
	var opts = {
		onClickDate:function(o){console.log("click",o)},
		onRenderDate:function(o){console.log("render",o)},
		container:$(".calendar"),
		tprev:-3,
		tnext:3
		}
	opts.container = $("#test01");
	var calendar1 = new  Calendar(opts);
	opts.container = $("#test02");
	var calendar2 = new  Calendar(opts);
	opts.container = $("#test03");
	var calendar3 = new  Calendar(opts);
	opts.container = $("#test04");
	var calendar4 = new  Calendar(opts);
})
</script>

```
# 3、插件在经期助手上的应用
使用效果如下
![一个页面多个控件效果](https://github.com/winlion/calendar/blob/master/Gif.gif)
该方式对应demo\index-lady.html,使用方式如下
### 引进css
```html
<link rel="stylesheet" type="text/css" href="css/record.css" />
<link rel="stylesheet" type="text/css" href="css/swiper-3.3.1.min.css" />
<style>
.calendar {
	background-color: white;
	padding-bottom: 5%;
	padding-top: 5%;
}
.calendar-header{
	text-align:center;
}

.today {
	border: 2px solid #7ecbed;
	background-color: #f69;
	color: white;
	line-height: 20px;
	font-family: 微软雅黑;
}
.jinqi {
	background-color: #f1608d;
	color: white;
}
.anquanqi{
	background-color: #FFC1C1;
	color: white;
}

.atpailuan  {
	background-color: #48A1FB;
	color: white;
}

.pailuanqi {
	background-color: #48A1FB;
	color: white;
}



</style>
```
### 在body中引进dom
```html
		<div class="calendar">
				
			</div>
		<p class="pailuanqi">这种表示排卵期</p>
		<p class="anquanqi">这种表示安全期</p>
		<p class="jinqi">这种表示经期</p>
		
		<H1>加微信号jiepool-winlion,获取源代码</H1>
```
### 引入js 并初始化
```js
<script type="text/javascript"  	src="js/jquery.min.js"></script>
<script type="text/javascript"  	src="js/swiper-3.3.1.min.js"></script>
<script type="text/javascript"  	src="js/calendar.js"></script>
<script>
$(function(){
	var opts = {
		onClickDate:function(o){console.log("click",o)},
		onRenderDate:function(o){console.log("render",o)},
		container:$(".calendar"),
		tprev:-3,
		tnext:3
		}
	opts.container = $("#test01");
	var calendar1 = new  Calendar(opts);
	opts.container = $("#test02");
	var calendar2 = new  Calendar(opts);
	opts.container = $("#test03");
	var calendar3 = new  Calendar(opts);
	opts.container = $("#test04");
	var calendar4 = new  Calendar(opts);
})
</script>

```