# 1、首先上效果
该插件的使用效果大概是这个样子  
![登录页面](https://github.com/winlion/calendar/blob/master/GIF.gif)
# 2、如何使用
## 2.1、在requirejs中使用
### 引进css
`
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
`
### 在body中引进dom
`
<div class="calendar"></div>
`
### 引入js
`
<script type="text/javascript" data-main="js/main-lady" 	src="js/require.min.js"></script>
`
## 2.2、数据库
新建数据库名称为restgo-admin,编码为utf-8  
将restgo-admin.sql导入到数据库中  
## 2.3、初始化依赖包
使用前先使用如下指令安装指令安装文件  
go get github.com/go-sql-driver/mysql  
go get -v -u github.com/alecthomas/log4go  
go get github.com/gin-gonic/gin  
go get github.com/go-sql-driver/mysql  
go get github.com/go-xorm/xorm  
go get github.com/tommy351/gin-sessions  


## 2.4、启动
使用前先使用如下指令启动应用  
<code>
go run main.go  
</code>  
使用前先使用如下指令打包应用  
<code>
build.bat  
</code>  
# 3、FAQ
## 3.1 如何安装开发环境
如果你使用的是vscode,安装问题请访问  
https://www.cnblogs.com/Leo_wl/p/8242628.html  
go get github.com/nsf/gocode  
go get github.com/uudashr/gopkgs/cmd/gopkgs  
go get github.com/fatih/gomodifytags  
go get github.com/haya14busa/goplay/cmd/goplay  
go get github.com/derekparker/delve/cmd/dlv  

## 3.2 如何联系我
我的微信 jiepool-winlion  
我的qq 271151388