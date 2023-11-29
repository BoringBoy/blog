(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{394:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"linux查找命令的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux查找命令的使用"}},[s._v("#")]),s._v(" linux查找命令的使用")]),s._v(" "),a("h3",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" find")]),s._v(" "),a("ol",[a("li",[s._v("语法规则：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("find [指定目录] [选项] [指定动作]（不可调换位置）  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("[指定目录]： 所要搜索的目录及其所有子目录。默认为当前目录。")]),s._v(" "),a("li",[s._v("[选项]： 所要搜索的文件的特征。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("常用选项说明")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-name\n#按名称查找\n#根据目标文件的名称进行查找，允许使用“*”及“?”通配符; 如果名字使用通配符，需要加” “来查询\n\n-size\t\n#按文件大小查找\t\n#根据目标文件的大小进行查找 一般使用“＋”、“-”号设置超过或小于指定的大小作为查找条件 常用的容量单位包括 kB（注意 k 是小写）、MB、GB\n\n-type\t\n#按文件类型查找\t\n#根据文件的类型进行查找 文件类型包括普通文件（f）、目录（d）、块设备文件（b）、字符设备文件（c）等\n\n-nogroup\n#查无有效属组的文件，即文件的属组在/etc/groups中不存在\n-group\n#按组来查找\n\n-mtime\n#按文件更改时间来查找文件，-n指n天以内，+n指n天以前\n-atime\n#按文件访问时间来查找文件\n-ctime\n#按文件创建时间来查找文件，-n指n天以内，+n指n天以前\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#查找etc目录下所有.conf 结尾的\nfind /etc/ -name "*.conf"\n\n#查找etc目录下以字母(不区分大小写）开头，.sh结尾的文件\nfind /etc -iname "[a-z]*.sh"\n\n#查找/home下属于zhangsan的文件并列出属性\nfind /home -user zhangsan -ls\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"locate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[s._v("#")]),s._v(" locate")]),s._v(" "),a("ol",[a("li",[s._v("简介")])]),s._v(" "),a("p",[s._v("locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库(/var/lib/locatedb)，这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，所以使用locate命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("语法规则")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("locate [指定目录] [选项]（可调换位置）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('注：如果locate不存在，则执行安装命令"yum install mlocate"')]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#查找etc目录下以sh开头的文件\nlocate etc/sh\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"whereis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[s._v("#")]),s._v(" whereis")]),s._v(" "),a("ol",[a("li",[s._v("简介")])]),s._v(" "),a("blockquote",[a("p",[s._v("whereis命令只能用于程序名的搜索，而且只搜索二进制文件(参数-b)、man说明文件(参数-m)和源代码文件(参数-s)。同locate一样，查询数据库(/var/lib/locatedb)文件。所以和locate一样，查找新增加的文件前，需要先使用updatedb命令，手动更新数据库。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("语法规则")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("whereis [选项] [程序名]（不可调换位置）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"which"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[s._v("#")]),s._v(" which")]),s._v(" "),a("ol",[a("li",[s._v("简介")])]),s._v(" "),a("blockquote",[a("p",[s._v("which命令的作用是，在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("语法规则")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("which [命令名]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#which 查找pwd命令\nwhich pwd\n\n#which 查找adduser命令\nwhich adduser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("备注")])]),s._v(" "),a("blockquote",[a("p",[s._v("which是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的。所以，不同的 PATH 配置内容所找到的命令是不一样的。")])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("find查找磁盘空间，相较于locate和whereis速度较慢。")])]),s._v(" "),a("li",[a("p",[s._v("find和locate的查找单位为文件或者目录，locate其实是find -name的另一种写法。")])]),s._v(" "),a("li",[a("p",[s._v("locate和whereis都是在数据库中查找，所以新增文件无法查找到，必须先updatedb。")])]),s._v(" "),a("li",[a("p",[s._v("whereis只搜索二进制文件(参数-b)、man说明文件(参数-m)和源代码文件(参数-s)。")])]),s._v(" "),a("li",[a("p",[s._v("which和type查找的单位都是命令，type可区分命令类型。")])]),s._v(" "),a("li",[a("p",[s._v("grep查找的单位是整行信息，在一个或多个文件中搜索字符串模板，功能是分析一行信息。（功能强大）")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);