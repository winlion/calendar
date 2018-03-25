# 1、首先上效果
该插件的使用效果大概是这个样子  
![登录页面](https://github.com/winlion/calendar/blob/master/GIF.gif)
# 2、如何使用
我们支持require形式，jquery插件形式和原生形式
## 2.1、在requirejs中使用
该方式对应demo\index-lady.html
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
<div class="calendar"></div>
```
### 引入js
```js
<script type="text/javascript" data-main="js/main-lady" 	src="js/require.min.js"></script>
```

## 2.2、使用jquery插件
该方式对应demo\index-jquery.html
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
该方式对应demo\index-class.html
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