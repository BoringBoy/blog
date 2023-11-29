(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{390:function(a,t,_){"use strict";_.r(t);var s=_(7),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"关于运维工程师-你需要知道这些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于运维工程师-你需要知道这些"}},[a._v("#")]),a._v(" 关于运维工程师，你需要知道这些！")]),a._v(" "),t("h1",{attrs:{id:"运维工程师主要工作是做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运维工程师主要工作是做什么"}},[a._v("#")]),a._v(" 运维工程师主要工作是做什么？")]),a._v(" "),t("p",[a._v("总结两句话：")]),a._v(" "),t("p",[a._v("1、保障业务长期稳定运行（如网站服务器、游戏服务器等）。")]),a._v(" "),t("p",[a._v("2、保障数据安全可靠（如用户名密码、游戏数据、博客文章、交易数据等）。")]),a._v(" "),t("h2",{attrs:{id:"做一名好的运维工程师-你需要知道、做到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#做一名好的运维工程师-你需要知道、做到"}},[a._v("#")]),a._v(" 做一名好的运维工程师，你需要知道、做到：")]),a._v(" "),t("h3",{attrs:{id:"一、保障业务长期稳定运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、保障业务长期稳定运行"}},[a._v("#")]),a._v(" 一、保障业务长期稳定运行")]),a._v(" "),t("p",[a._v("出一点点差错，用户就要投诉了。")]),a._v(" "),t("h4",{attrs:{id:"_1、业务跑在什么上面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、业务跑在什么上面"}},[a._v("#")]),a._v(" 1、业务跑在什么上面？")]),a._v(" "),t("p",[a._v("网站服务器一般是apache,nginx,tomcat等。但是真正跑通流程还需要Mysql数据库来存储用户密码及其它。很多程序都要php的解析，所以LNMP、LAMP(即nginx、apache、mysql、php)环境部署是必须掌握的技能。")]),a._v(" "),t("h4",{attrs:{id:"_2、业务出了问题怎么及时知道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、业务出了问题怎么及时知道"}},[a._v("#")]),a._v(" 2、业务出了问题怎么及时知道？")]),a._v(" "),t("p",[a._v("这就需要监控软件来邮件或短信来通知你，常用的有zabbix,nagios等。报警发邮件，也得一个邮件程序呀，sendmail或postfix。")]),a._v(" "),t("h4",{attrs:{id:"_3、在家里收到报警-但服务器是内网ip-怎么也得解决问题吧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、在家里收到报警-但服务器是内网ip-怎么也得解决问题吧"}},[a._v("#")]),a._v(" 3、在家里收到报警，但服务器是内网IP，怎么也得解决问题吧？")]),a._v(" "),t("p",[a._v("在公司搭建openvpn或pptp或openswan，在家里通过VPN拨入内网，24小时解决问题…唉，半夜爬起来解决问题也没工资。")]),a._v(" "),t("h3",{attrs:{id:"二、保障数据安全可靠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、保障数据安全可靠"}},[a._v("#")]),a._v(" 二、保障数据安全可靠")]),a._v(" "),t("p",[a._v("出一点点差错，领导要找你喝茶了。")]),a._v(" "),t("h4",{attrs:{id:"_1、有时需要手动改数据库内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、有时需要手动改数据库内容"}},[a._v("#")]),a._v(" 1、有时需要手动改数据库内容？")]),a._v(" "),t("p",[a._v("所以要会基本的Mysql数据库增删查改命令。")]),a._v(" "),t("h4",{attrs:{id:"_2、万一数据库服务器硬件坏了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、万一数据库服务器硬件坏了怎么办"}},[a._v("#")]),a._v(" 2、万一数据库服务器硬件坏了怎么办？")]),a._v(" "),t("p",[a._v("需要有个备库以备不时之需，所以需要Mysql主从复制。")]),a._v(" "),t("h4",{attrs:{id:"_3、数据库要还原怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、数据库要还原怎么办"}},[a._v("#")]),a._v(" 3、数据库要还原怎么办？")]),a._v(" "),t("p",[a._v("所以需要在crond中定期全备Mysql数据，以便还原使用。如果要还原到指定时间点，还要学会Mysql增量备份与恢复。")]),a._v(" "),t("h4",{attrs:{id:"_4、如果是用户上传的图片或文件服务器坏了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、如果是用户上传的图片或文件服务器坏了怎么办"}},[a._v("#")]),a._v(" 4、如果是用户上传的图片或文件服务器坏了怎么办？")]),a._v(" "),t("p",[a._v("定时备份可能还不够，需要使用rsync加inotify来实时备份。以便任一时刻主服务器坏掉，也能保障所有图片有备份可以用来恢复。")]),a._v(" "),t("h4",{attrs:{id:"_5、小心黑客-要增加服务器安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、小心黑客-要增加服务器安全性"}},[a._v("#")]),a._v(" 5、小心黑客，要增加服务器安全性？")]),a._v(" "),t("p",[a._v("ssh轻易不能让外人访问，那么就设置只允许公司的IP或跳板机IP访问，这些都通过iptables来控制。")]),a._v(" "),t("h3",{attrs:{id:"三、大性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、大性能"}},[a._v("#")]),a._v(" 三、大性能")]),a._v(" "),t("h4",{attrs:{id:"_1、越来越多的用户来访问我们的网站-一台web服务器抗不住了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、越来越多的用户来访问我们的网站-一台web服务器抗不住了怎么办"}},[a._v("#")]),a._v(" 1、越来越多的用户来访问我们的网站，一台web服务器抗不住了怎么办？")]),a._v(" "),t("p",[a._v("那就需要多台web服务器来负担，但多台服务器之间怎么进行负载均衡呢，这就需要用到nginx反向代理或LVS+keepalived或haproxy+heartbeat了。")]),a._v(" "),t("h4",{attrs:{id:"_2、用户注册发表的文章与评论太多-一台数据库抗不住了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、用户注册发表的文章与评论太多-一台数据库抗不住了怎么办"}},[a._v("#")]),a._v(" 2、用户注册发表的文章与评论太多，一台数据库抗不住了怎么办？")]),a._v(" "),t("p",[a._v("数据库压力分为读和写，如果写抗不住，需要进行分表分库到多个服务器上。如果是读压力不够了，可以使用mysql-proxy读写分离，\n来分担读的压力。更简单方便的方法，把数据库里的内容放到内存上，这就用上memcache或redis了。")]),a._v(" "),t("h4",{attrs:{id:"_3、n多用户上传下载文件-磁盘抗不住了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、n多用户上传下载文件-磁盘抗不住了怎么办"}},[a._v("#")]),a._v(" 3、N多用户上传下载文件，磁盘抗不住了怎么办？")]),a._v(" "),t("p",[a._v("把多块磁盘做成raid，或者使用分布式存储文件系统如MFS，GlusterFS来提高磁盘的读写能力。")]),a._v(" "),t("h4",{attrs:{id:"_4、网站上好多图片-总有用户反应网站加载太慢-怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、网站上好多图片-总有用户反应网站加载太慢-怎么办"}},[a._v("#")]),a._v(" 4、网站上好多图片，总有用户反应网站加载太慢，怎么办？")]),a._v(" "),t("p",[a._v("这时可以把网站上的图片通过squid或varnish缓存到网站前端，尽可能的增加访问速度，当然，最好是购买商业的CDN加速。")]),a._v(" "),t("h4",{attrs:{id:"_5、运营商是个大难题-他们之间的带宽好像很小-联通ip访问我电信网站怎么就这么慢呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、运营商是个大难题-他们之间的带宽好像很小-联通ip访问我电信网站怎么就这么慢呢"}},[a._v("#")]),a._v(" 5、运营商是个大难题，他们之间的带宽好像很小，联通IP访问我电信网站怎么就这么慢呢？")]),a._v(" "),t("p",[a._v("这时可以使用bind自建一个DNS服务器，把网站的DNS记录指向自建DNS服务器上，配置好解析规则，以后联通IP解析到联通网站上，\n电信IP解析到电信网站上，体验就会好很多啦。")]),a._v(" "),t("h3",{attrs:{id:"四、自动化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、自动化"}},[a._v("#")]),a._v(" 四、自动化")]),a._v(" "),t("ul",[t("li",[a._v("终极目标：跑死机器，闲死人。")])]),a._v(" "),t("h4",{attrs:{id:"_1、公司新买100台服务器-公司竟然就1个移动光驱-这装系统得到什么时候"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、公司新买100台服务器-公司竟然就1个移动光驱-这装系统得到什么时候"}},[a._v("#")]),a._v(" 1、公司新买100台服务器，公司竟然就1个移动光驱，这装系统得到什么时候？")]),a._v(" "),t("p",[a._v("使用kickstart或cobbler来网络远程自动安装系统吧。")]),a._v(" "),t("h4",{attrs:{id:"_2、每次装完机要优化很多内容-什么文件描述符、端口、软件安装啊-手动操作不累死去"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、每次装完机要优化很多内容-什么文件描述符、端口、软件安装啊-手动操作不累死去"}},[a._v("#")]),a._v(" 2、每次装完机要优化很多内容，什么文件描述符、端口、软件安装啊，手动操作不累死去？")]),a._v(" "),t("p",[a._v("赶紧学会shell，将解放非常多的工作量。")]),a._v(" "),t("h4",{attrs:{id:"_3、系统装完后登陆要输入密码-这么多台啊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、系统装完后登陆要输入密码-这么多台啊"}},[a._v("#")]),a._v(" 3、系统装完后登陆要输入密码，这么多台啊？")]),a._v(" "),t("p",[a._v("使用expect吧，自动读取提示来输入密码，并执行命令。")]),a._v(" "),t("h4",{attrs:{id:"_4、要批量把新代码发布到线上服务器-怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、要批量把新代码发布到线上服务器-怎么办"}},[a._v("#")]),a._v(" 4、要批量把新代码发布到线上服务器，怎么办？")]),a._v(" "),t("p",[a._v("使用saltstack或puppet或ansible吧，绝对爽歪歪。")]),a._v(" "),t("h3",{attrs:{id:"五、其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、其他"}},[a._v("#")]),a._v(" 五、其他")]),a._v(" "),t("h4",{attrs:{id:"_1、搭整套测试环境需要5台服务器-但公司穷的只有一台空闲服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、搭整套测试环境需要5台服务器-但公司穷的只有一台空闲服务器"}},[a._v("#")]),a._v(" 1、搭整套测试环境需要5台服务器，但公司穷的只有一台空闲服务器？")]),a._v(" "),t("p",[a._v("学会xen或kvm或docker吧，虚拟出多台服务器，就能解决资源问题了。特别是docker，强烈推荐，以后某个研发人员让你部署一套新环境，分分钟帮他解决。")]),a._v(" "),t("h4",{attrs:{id:"_2、研发人员的代码控制-权限控制-总要运维人员管呀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、研发人员的代码控制-权限控制-总要运维人员管呀"}},[a._v("#")]),a._v(" 2、研发人员的代码控制，权限控制，总要运维人员管呀？")]),a._v(" "),t("p",[a._v("svn或git，这个是肯定要有的。")]),a._v(" "),t("h3",{attrs:{id:"结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结尾"}},[a._v("#")]),a._v(" 结尾：")]),a._v(" "),t("p",[a._v("现在我们在回过头来思考，运维工程师平时干些啥呢？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("1、 随时解决报警故障。")])]),a._v(" "),t("li",[t("p",[a._v("2、 业务程序更新。")])]),a._v(" "),t("li",[t("p",[a._v("3、 编写一些脚本，监控或完成其他可自动完成功能。")])]),a._v(" "),t("li",[t("p",[a._v("4、 运维架构完善，部署一些用起来更方便更可靠或性能更好的开源工具以及制定运维流程规范。")])]),a._v(" "),t("li",[t("p",[a._v("5、 打杂，如调交换机，装系统，部署新环境等。")])])]),a._v(" "),t("h2",{attrs:{id:"文章来源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章来源"}},[a._v("#")]),a._v(" 文章来源")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq1175421841/article/details/51814157",target:"_blank",rel:"noopener noreferrer"}},[a._v("csdn-King-Blog"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);