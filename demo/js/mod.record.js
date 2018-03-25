require.config({
               paths : {
               "jquery" : [ "../libs/jquery.min",
                           "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min" ],
               "util" : "util"
               }
               })
require([ 'jquery', 'util' ], function($, Util, Zepto) {
        // 计算经期
        var Health = {
        zhouqi : 28,
        xinjing : 5
        }
        var user = localStorage.getItem("user");
        if(user == "" || user == undefined || user == null){
        
        }else{
        var users = JSON.parse(user);
        Health.zhouqi = users.jqzhouqi;
        Health.xinjing = users.jqchixu;
        
        }
        Health.nextDate = function(prevDate) {
        var now = prevDate; // 当前日期
        var nowwkDay = now.getDay(); // 今天本周的第几天
        var nowDay = now.getDate(); // 当前日
        var nowMonth = now.getMonth(); // 当前月
        var nowYear = now.getFullYear(); // 当前年
        var js = new Date(nowYear, nowMonth, nowDay);
        var je = new Date(nowYear, nowMonth, nowDay + this.zhouqi
                          + this.xinjing);
        var ld = new Date(nowYear, nowMonth, nowDay + this.zhouqi
                          + this.xinjing - 14);
        var ls = new Date(nowYear, nowMonth, (nowDay + this.zhouqi
                                              + this.xinjing - 14) - 5);
        var le = new Date(nowYear, nowMonth, (nowDay + this.zhouqi
                                              + this.xinjing - 14) + 4);
        return {
        prev : now,
        ld : ld,
        js : js,
        je : je,
        ls : ls,
        le : le
        }
        }
        $(function() {
          var monthStartDate = Util.getBeginningOfMonth();
          var monthEndDate = Util.getEndOfMonth();
          
          var from = monthStartDate.getTime() - monthStartDate.getDay() * 24
          * 3600 * 1000;
          var to = monthEndDate.getTime() + (6 - monthEndDate.getDay()) * 24
          * 3600 * 1000 + 1;
          var idx = 0;
          for (var i = from; i < to; i += 3600 * 24 * 1000) {
          $(".calendar").find("tbody").find("td").eq(idx).find("p").attr(
                                                                         "date", new Date(i).getTime()).html(new Date(i).getDate());
          idx += 1;
          }
          /**
           * 渲日期
           */
          
          $(".curentdate").html(
                                Util.num2zhcn(new Date().getMonth() + 1) + "月"
                                + Util.num2zhcn(new Date().getDate()) + "日 周"
                                + Util.num2wkday(new Date().getDay()))
          
          var user = localStorage.getItem("user");
          if(user == "" || user == undefined || user == null){
          //alert("亲，登录后可记录您的心情与记事哟");
          Util.onReady();
          }else{
          var users = JSON.parse(user);
          //console.log(users.jqstartat);
          var jqs = users.jqstartat;
          var jqstartat = (new Date(users.jqstartat)).getTime();
          var jqchixu = users.jqchixu;
          var jqzhouqi = users.jqzhouqi;
          //console.log("经期开始：",(new Date(users.jqstartat)).getTime());
          var d=new Date();
          //console.log("时间1",d.toLocaleDateString())
          //月初
          var f = d.setDate(1);
          f = new Date(f);
          console.log("月初时间",d);
          
          var dDay = d.getDate(); // 当前日
          var dMonth = d.getMonth(); // 当前月
          var dYear = d.getFullYear(); // 当前年
          
          var jq1 = new Date(dYear, dMonth, dDay).getTime();
          console.log("jq1",jq1);
          console.log("jqstartat",jqstartat);
          for(var i=0;i>=0;i++){
          if(jqstartat > jq1){
          break;
          }
          //console.log("来了");
          jqstartat = jqstartat + 3600 * 24 * 1000 * jqzhouqi;
          }
          console.log("jqstartat",jqstartat);
          
          Util.ctxapi("usrprofile", "queryMyrds", {}, function(json) {
                      
                      var displayValue = [];
                      var value = [];
                      var tpls = json.data.tpl;
                      for ( var i in tpls) {
                      value.push(tpls[i].id)
                      displayValue.push(tpls[i].name);
                      }
                      var jinqirds = [];
                      var dateno = 0;
                      
                      for ( var i in json.data.rds) {
                      
                      if (json.data.rds[i].profileid == 1) {
                      
                      if (dateno < new Date(json.data.rds[i].dateno).getTime()) {
                      dateno = new Date(json.data.rds[i].dateno).getTime();
                      }
                      
                      }
                      }
                      
                      var now = new Date();
                      var r = Health.nextDate(new Date(dateno));
                      var nowtime = new Date(now.getFullYear(), now.getMonth(), now
                                             .getDate()).getTime();
                      for (var j = dateno - 3600 * 24 * 56 * 1000; j < now.getTime()
                           + 3600 * 24 * 60 * 1000
                           && dateno > 0; j += 28 * 24 * 3600 * 1000) {
                      r = Health.nextDate(new Date(j));
                      
                      $(".calendar").find("tbody").find("td").find("p").each(
                                                                             function() {
                                                                             var idx = parseInt($(this).attr("date"));
                                                                             
                                                                             if (jqstartat/1000 <= idx/1000
                                                                                 && idx/1000 <= jqstartat/1000 + 3600 * 24 * jqchixu) {
                                                                             $(this).attr("class", "font_style1");
                                                                             
                                                                             }
                                                                             if (Date.parse(new Date())/1000<= idx/1000 && idx/1000 <= jqstartat/1000 + 3600 * 24 * jqchixu) {
                                                                             $(this).attr("class", "font_style2");
                                                                             }
                                                                             if (jqstartat/1000 - 3600 * 24 * 14 <= idx/1000
                                                                                 && idx/1000 <=jqstartat/1000 - 3600 * 24 * 8) {											$(this).attr("class", "font_style3");
                                                                             $(this).attr("class", "font_style3");
                                                                             }
                                                                             
                                                                             if (parseInt($(this).attr("date")) == new Date(now
                                                                                                                            .getFullYear(), now.getMonth(), now
                                                                                                                            .getDate()).getTime(0)) {
                                                                             $(this).addClass("today");
                                                                             $(this).text('今');
                                                                             
                                                                             }
                                                                             });
                      }
                      
                      $(".calendar").find("p").each(function() {
                                                    obj = $(this);
                                                    if (parseInt($(this).attr("date")) == nowtime) {
                                                    if (obj.hasClass("font_style1")) {
                                                    $(".tiptuijian").html("当前处于月经期,要注意经期卫生,避免性事!");
                                                    } else if (obj.hasClass("font_style2")) {
                                                    $(".tiptuijian").html("当前处于月经期,要注意经期卫生,避免性事!");
                                                    } else if (obj.hasClass("font_style3")) {
                                                    $(".tiptuijian").html("当前处于排卵期,性事受孕可能性大!");
                                                    } else {
                                                    $(".tiptuijian").html("当前处于安全期,性事一般不会受孕!");
                                                    }
                                                    }
                                                    })
                      Util.onReady()
                      
                      });
          }
          })
        
        function show() {
        
        $("body").append("<div class=\"aui-mask\"/>")
        $("#dialog2").removeClass("aui-hidden");// .slideDown()
        }
        function proposal() {
        //取当前登录用户的id
        var user = localStorage.getItem("user");
        if(user == "" || user == undefined || user == null){
        $("#overdiv").show();
        $("#dialog3").show();
        $("#overdiv").click(function(){
                            $("#overdiv").hide();
                            $("#dialog3").hide();
                            });
        $(".overdiv").click(function(){
                            $("#overdiv").hide();
                            $("#dialog3").hide();
                            });
        $("#gologin").click(function(){
                            
                            location.href = "../login/login.html";
                            });
        Util.setCookie("redirect",location.href);
        return false;
        }
        $("#dialog33").show();
        $("body").append("<div class=\"aui-mask\"/>")
        
        }
        
        
        function cancel() {
        $(".aui-mask").remove();
        $("#dialog33").hide();
        $("#dialog2").addClass("aui-hidden");
        }
        $(".closer").click(function() {
                           cancel()
                           })
        $("#dlgEdit").click(function() {
                            //取当前登录用户的id
                            var user = localStorage.getItem("user");
                            if(user == "" || user == undefined || user == null){
                            $("#overdiv").show();
                            $("#dialog3").show();
                            $("#overdiv").click(function(){
                                                $("#overdiv").hide();
                                                $("#dialog3").hide();
                                                });
                            $("#gologin").click(function(){
                                                
                                                location.href = "../login/login.html";
                                                });
                            Util.setCookie("redirect",location.href);
                            return false;
                            }else{
                            event.preventDefault();
                            show();
                            }
                            
                            })
        $("#proposal").click(function() {
                             proposal()
                             });
        $(".tag-text").click(function() {
                             $(".tag-text").removeClass("active-tag");
                             $(this).addClass("active-tag");
                             });
        
        $("#saveMyRd").click(function() {
                             var data = {};
                             data.profileid = $(".tag-text.active-tag").attr("data-profileid");
                             data.memo = $("#rdMemo").val();
                             Util.ctxapi("usrprofile", "createMyrd", data, function(json) {
                                         cancel();
                                         if(json.code == 0){
                                         if(data.profileid == 1){
                                         
                                         var user = localStorage.getItem("user"); 						
                                         if(user == "" || user == undefined || user == null){
                                         
                                         }else{
                                         var users = JSON.parse(user);	
                                         var d=new Date(); 
                                         var dDay = d.getDate(); // 当前日
                                         var dMonth = d.getMonth()*1+1; // 当前月
                                         var dYear = d.getFullYear(); // 当前年
                                         users.jqstartat = dYear+"-"+dMonth+"-"+dDay+" "+"00:00:00";
                                         var o = JSON.stringify(users);
                                         localStorage.setItem("user",o);
                                         location.reload();
                                         }
                                         }
                                         }
                                         alert(json.msg);
                                         })
                             })
        
        $("#createJianyi").click(function() {
                                 var data = {};
                                 
                                 data.content = $("#jianyi").val();
                                 Util.ctxapi("jianyi", "create", data, function(json) {
                                             cancel();
                                             alert(json.msg);
                                             })
                                 })
        $(".overdiv").click(function(){
                            $("#overdiv").hide();
                            $("#dialog3").hide();
                            });
        });