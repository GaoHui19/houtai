(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{717:function(e,t,a){},817:function(e,t,a){"use strict";var n=a(717);a.n(n).a},863:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(682),i=a.n(n),r={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{week:"星期一",value:54},{week:"星期二",value:48},{week:"星期三",value:33},{week:"星期四",value:67},{week:"星期五",value:59},{week:"星期六",value:97},{week:"星期天",value:75}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=new i.a.Chart({container:e,forceFit:!0,height:this.height,padding:[30,60,50,65],background:{fill:"#fff"}});a.source(t),a.scale({week:{range:[0,1]},value:{min:0,alias:"数量"}}),a.axis("value",{line:{lineWidth:1,stroke:"rgb(202,202,202)"},title:{textStyle:{fill:"#4a4a4a"}}}),a.axis("week",{tickLine:{length:-3}}),a.tooltip({crosshairs:{type:"line"}}),a.line().position("week*value"),a.point().position("week*value").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),a.render()}}},s=a(3),u=Object(s.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,o={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{week:"星期一",value:54},{week:"星期二",value:48},{week:"星期三",value:33},{week:"星期四",value:67},{week:"星期五",value:59},{week:"星期六",value:97},{week:"星期天",value:75}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=new i.a.Chart({container:e,forceFit:!0,height:this.height,padding:[30,60,50,50],background:{fill:"#fff"}});a.source(t),a.scale("value",{min:0,alias:"数量"}),a.scale("week",{range:[0,1]}),a.tooltip({crosshairs:{type:"line"}}),a.line().position("week*value").color("l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)").shape("smooth"),a.point().position("week*value").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),a.render()}}},h=Object(s.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,c={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{week:"星期一",value:54},{week:"星期二",value:48},{week:"星期三",value:33},{week:"星期四",value:67},{week:"星期五",value:59},{week:"星期六",value:97},{week:"星期天",value:75}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=new i.a.Chart({container:e,forceFit:!0,height:this.height,padding:[30,60,50,50],background:{fill:"#fff"}});a.source(t),a.scale("value",{min:0,alias:"数量"}),a.scale("week",{range:[0,1]}),a.tooltip({crosshairs:{type:"line"}}),a.line().position("week*value").shape("hv"),a.point().position("week*value").size(2),a.render()}}},d=Object(s.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,l={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{month:"Jan",city:"Tokyo",temperature:-2},{month:"Jan",city:"London",temperature:3.9},{month:"Feb",city:"Tokyo",temperature:6.9},{month:"Feb",city:"London",temperature:4.2},{month:"Mar",city:"Tokyo",temperature:9.5},{month:"Mar",city:"London",temperature:5.7},{month:"Apr",city:"Tokyo",temperature:14.5},{month:"Apr",city:"London",temperature:8.5},{month:"May",city:"Tokyo",temperature:18.4},{month:"May",city:"London",temperature:11.9},{month:"Jun",city:"Tokyo",temperature:21.5},{month:"Jun",city:"London",temperature:15.2},{month:"Jul",city:"Tokyo",temperature:25.2},{month:"Jul",city:"London",temperature:17},{month:"Aug",city:"Tokyo",temperature:26.5},{month:"Aug",city:"London",temperature:16.6},{month:"Sep",city:"Tokyo",temperature:23.3},{month:"Sep",city:"London",temperature:14.2},{month:"Oct",city:"Tokyo",temperature:18.3},{month:"Oct",city:"London",temperature:10.3},{month:"Nov",city:"Tokyo",temperature:13.9},{month:"Nov",city:"London",temperature:6.6},{month:"Dec",city:"Tokyo",temperature:9.6},{month:"Dec",city:"London",temperature:4.8}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=new i.a.Chart({container:e,forceFit:!0,height:this.height,background:{fill:"#fff"}});a.source(t),a.scale({month:{range:[0,1]}}),a.axis("temperature",{label:{formatter:function(e){return e+"°C"}}}),a.line().position("month*temperature").color("city").shape("smooth").tooltip("city*temperature",(function(e,t){return{name:e,value:t+"°C"}})),a.point().position("month*temperature").color("city").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),a.render()}}},f=Object(s.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,b=a(685),m={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{Year:2016,"Number of incidents":"13,488",Deaths:"34,676",Injuries:"39,851"},{Year:2015,"Number of incidents":"14,852",Deaths:"38,464",Injuries:"43,960"},{Year:2014,"Number of incidents":"16,860",Deaths:"43,566",Injuries:"41,061"},{Year:2013,"Number of incidents":"11,996",Deaths:"22,234",Injuries:"37,666"},{Year:2012,"Number of incidents":"8,500",Deaths:"15,436",Injuries:"25,486"},{Year:2011,"Number of incidents":"5,071",Deaths:"8,228",Injuries:"14,652"},{Year:2010,"Number of incidents":"4,822",Deaths:"7,727",Injuries:"15,860"},{Year:2009,"Number of incidents":"4,719",Deaths:"9,271",Injuries:"19,128"},{Year:2008,"Number of incidents":"4,803",Deaths:"9,135",Injuries:"18,984"},{Year:2007,"Number of incidents":"3,241",Deaths:"12,858",Injuries:"22,453"},{Year:2006,"Number of incidents":"2,749",Deaths:"9,362",Injuries:"15,551"},{Year:2005,"Number of incidents":"2,009",Deaths:"6,313",Injuries:"12,769"},{Year:2004,"Number of incidents":"1,162",Deaths:"5,718",Injuries:"11,817"},{Year:2003,"Number of incidents":"1,262",Deaths:"3,278",Injuries:"7,091"},{Year:2002,"Number of incidents":"1,332",Deaths:"4,799",Injuries:"7,103"},{Year:2001,"Number of incidents":"1,907",Deaths:"7,743",Injuries:"21,151"},{Year:2e3,"Number of incidents":"1,813",Deaths:"4,402",Injuries:"5,869"},{Year:1999,"Number of incidents":"1,395",Deaths:"3,388",Injuries:"5,341"},{Year:1998,"Number of incidents":933,Deaths:"4,688",Injuries:"8,183"},{Year:1997,"Number of incidents":"3,200",Deaths:"10,928",Injuries:"9,174"},{Year:1996,"Number of incidents":"3,056",Deaths:"6,965",Injuries:"10,781"},{Year:1995,"Number of incidents":"3,081",Deaths:"6,094",Injuries:"14,288"},{Year:1994,"Number of incidents":"3,458",Deaths:"7,691",Injuries:"7,573"},{Year:1993,"Number of incidents":747,Deaths:"2,669",Injuries:"5,600"},{Year:1992,"Number of incidents":"5,073",Deaths:"9,745",Injuries:"9,927"},{Year:1991,"Number of incidents":"4,683",Deaths:"8,429",Injuries:"7,591"},{Year:1990,"Number of incidents":"3,887",Deaths:"7,148",Injuries:"6,128"},{Year:1989,"Number of incidents":"4,323",Deaths:"8,136",Injuries:"5,512"},{Year:1988,"Number of incidents":"3,720",Deaths:"7,189",Injuries:"6,860"},{Year:1987,"Number of incidents":"3,184",Deaths:"6,476",Injuries:"5,769"},{Year:1986,"Number of incidents":"2,860",Deaths:"4,976",Injuries:"5,814"},{Year:1985,"Number of incidents":"2,915",Deaths:"7,094",Injuries:"5,130"},{Year:1984,"Number of incidents":"3,495",Deaths:"10,450",Injuries:"5,291"},{Year:1983,"Number of incidents":"2,870",Deaths:"9,444",Injuries:"4,047"},{Year:1982,"Number of incidents":"2,545",Deaths:"5,135",Injuries:"3,342"},{Year:1981,"Number of incidents":"2,585",Deaths:"4,851",Injuries:"3,337"},{Year:1980,"Number of incidents":"2,662",Deaths:"4,391",Injuries:"3,645"},{Year:1979,"Number of incidents":"2,661",Deaths:"2,100",Injuries:"2,502"},{Year:1978,"Number of incidents":"1,526",Deaths:"1,459",Injuries:"1,600"},{Year:1977,"Number of incidents":"1,319",Deaths:456,Injuries:518},{Year:1976,"Number of incidents":923,Deaths:672,Injuries:755},{Year:1975,"Number of incidents":740,Deaths:617,Injuries:617},{Year:1974,"Number of incidents":580,Deaths:542,Injuries:763},{Year:1973,"Number of incidents":473,Deaths:370,Injuries:495},{Year:1972,"Number of incidents":496,Deaths:566,Injuries:408},{Year:1971,"Number of incidents":470,Deaths:173,Injuries:82},{Year:1970,"Number of incidents":651,Deaths:171,Injuries:192}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=new i.a.Chart({container:e,forceFit:!0,height:this.height,background:{fill:"#fff"}}),n=new b.DataSet,r=n.createView().source(t);r.transform({type:"map",callback:function(e){return"string"==typeof e.Deaths&&(e.Deaths=e.Deaths.replace(",","")),e.Deaths=parseInt(e.Deaths),e.death=e.Deaths,e.year=e.Year,e}});var s=a.view();s.source(r),s.axis("year",{subTickCount:3,subTickLine:{length:3,lineWidth:1,stroke:"#bfbfbf"},tickLine:{length:6,lineWidth:1,stroke:"#bfbfbf"}}),s.axis("death",{label:{formatter:function(e){return e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}}}),s.line().position("year*death");var u=n.createView().source(r.rows);u.transform({type:"regression",method:"polynomial",fields:["year","death"],bandwidth:.1,as:["year","death"]});var o=a.view();o.axis(!1),o.source(u),o.line().position("year*death").style({stroke:"#969696",lineDash:[3,3]}).tooltip(!1),s.guide().text({content:"趋势线",position:["1970",2500],style:{fill:"#8c8c8c",fontSize:14,fontWeight:300},offsetY:-70}),a.render()}}},y=Object(s.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,p={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{date:"2012-09",buyin:7228},{date:"2012-10",buyin:7425},{date:"2012-11",buyin:7214},{date:"2012-12",buyin:7003},{date:"2013-01",buyin:6628},{date:"2013-02",buyin:6198},{date:"2013-03",buyin:5669},{date:"2013-04",buyin:5640},{date:"2013-05",buyin:5795},{date:"2013-06",buyin:5229},{date:"2013-07",buyin:4784},{date:"2013-08",buyin:4833},{date:"2013-09",buyin:4887},{date:"2013-10",buyin:4694},{date:"2013-11",buyin:4583},{date:"2013-12",buyin:4400},{date:"2014-01",buyin:4287},{date:"2014-02",buyin:3972},{date:"2014-03",buyin:4128},{date:"2014-04",buyin:3370},{date:"2014-05",buyin:3224},{date:"2014-06",buyin:3077},{date:"2014-07",buyin:2912},{date:"2014-08",buyin:2800},{date:"2014-09",buyin:2680},{date:"2014-10",buyin:2635},{date:"2014-11",buyin:2490},{date:"2014-12",buyin:2394},{date:"2015-01",buyin:2313},{date:"2015-02",buyin:2350},{date:"2015-03",buyin:2293},{date:"2015-04",buyin:2201},{date:"2015-05",buyin:2287},{date:"2015-06",buyin:2949},{date:"2015-07",buyin:2823},{date:"2015-08",buyin:3758},{date:"2015-09",buyin:3978},{date:"2015-10",buyin:4044},{date:"2015-11",buyin:4250},{date:"2015-12",buyin:4199},{date:"2016-01",buyin:4621},{date:"2016-02",buyin:4853},{date:"2016-03",buyin:4956},{date:"2016-04",buyin:4958},{date:"2016-05",buyin:5119},{date:"2016-06",buyin:5456},{date:"2016-07",buyin:5557},{date:"2016-08",buyin:5650},{date:"2016-09",buyin:6061},{date:"2016-10",buyin:6291},{date:"2016-11",buyin:6688},{date:"2016-12",buyin:6774},{date:"2017-01",buyin:7224},{date:"2017-02",buyin:7433},{date:"2017-03",buyin:7581},{date:"2017-04",buyin:7920},{date:"2017-05",buyin:8476},{date:"2017-06",buyin:8559},{date:"2017-07",buyin:8872},{date:"2017-08",buyin:8441},{date:"2017-09",buyin:9182},{date:"2017-10",buyin:9283},{date:"2017-11",buyin:9418},{date:"2017-12",buyin:9550},{date:"2018-01",buyin:9758},{date:"2018-02",buyin:9840}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(e,t){var a=["2012-09","2013-05","2014-01","2014-09","2015-05","2016-01","2016-09","2017-05","2018-02"],n=new i.a.Chart({container:e,forceFit:!0,height:this.height,background:{fill:"#fff"}});n.source(t,{date:{ticks:a}}),n.legend(!1),n.axis("buyin",!1),n.line().position("date*buyin"),n.point().position("date*buyin").size("date",(function(e){return a.indexOf(e)>=0?3:0})).label("date*buyin",(function(e,t){return a.indexOf(e)>=0?t+"万":""}),{textStyle:{fill:"#7a7a7a",fontSize:12,stroke:"white",lineWidth:2,fontWeight:300}}).style({lineWidth:2}),n.guide().line({top:!0,start:["2012-09",5396],end:["2018-02",5396],lineStyle:{stroke:"#595959",lineWidth:1,lineDash:[3,3]},text:{position:"start",style:{fill:"#8c8c8c",fontSize:12,fontWeight:300},content:"均值线 5,396万",offsetY:-5}}),n.render()}}},v={name:"LineChart",components:{ChartBase:u,ChartGradual:h,ChartLadder:d,ChartDouble:f,ChartTrend:y,ChartAverage:Object(s.a)(p,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports}},D=(a(817),Object(s.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-wrap"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("基础折线图")]),e._v(" "),a("chart-base")],1),e._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("渐变色曲线图")]),e._v(" "),a("chart-gradual")],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("阶梯图")]),e._v(" "),a("chart-ladder")],1),e._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("双折线图")]),e._v(" "),a("chart-double")],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("趋势线")]),e._v(" "),a("chart-trend")],1),e._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[e._v("均值线")]),e._v(" "),a("chart-average")],1)],1)],1)}),[],!1,null,"606d487a",null).exports)}}]);