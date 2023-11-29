(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{317:function(s,a,e){s.exports=e.p+"assets/img/compare.83617f0e.png"},412:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch-索引、文档管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-索引、文档管理"}},[s._v("#")]),s._v(" ElasticSearch 索引、文档管理")]),s._v(" "),a("h2",{attrs:{id:"与常规关系型数据库的映射关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与常规关系型数据库的映射关系"}},[s._v("#")]),s._v(" 与常规关系型数据库的映射关系")]),s._v(" "),a("p",[a("img",{attrs:{src:e(317),alt:"与Myql的对照关系"}})]),s._v(" "),a("h2",{attrs:{id:"索引管理-结合kibana使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引管理-结合kibana使用"}},[s._v("#")]),s._v(" 索引管理(结合Kibana使用)")]),s._v(" "),a("h3",{attrs:{id:"查看索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看索引"}},[s._v("#")]),s._v(" 查看索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#查看所有索引\nGET _cat/indices?v\n\n#查看指定索引\nGET indexName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"创建索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[s._v("#")]),s._v(" 创建索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("PUT indexName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"删除索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除索引"}},[s._v("#")]),s._v(" 删除索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DELETE indexName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"判断索引存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断索引存在"}},[s._v("#")]),s._v(" 判断索引存在")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#200表示存在,404表示不存在\nhead indexName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"文档管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档管理"}},[s._v("#")]),s._v(" 文档管理")]),s._v(" "),a("h3",{attrs:{id:"创建文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文档"}},[s._v("#")]),s._v(" 创建文档")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 可用put/post创建，其中put需要指定索引唯一id,post不用\nput indexName/_doc/index_id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"查询文档数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询文档数据"}},[s._v("#")]),s._v(" 查询文档数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 根据索引id查询索引数据\nGET indexName/_doc/index_id\n\n# 查询所有索引数据\nGET indexName/_search\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"修改文档数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改文档数据"}},[s._v("#")]),s._v(" 修改文档数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("POST indexName/_doc/index_id\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("注意事项：修改时，要在原有基础上修改，而不能只指定单个key的修改，否则生效后，原先其它key会被舍弃。")]),s._v(" "),a("p",[s._v("即：如果原有key:id,name,age等，如果希望修改age,也需要将id,name 等Post过去修改，否则最后的数据只会保留age.")])]),s._v(" "),a("h3",{attrs:{id:"删除文档数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文档数据"}},[s._v("#")]),s._v(" 删除文档数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DELETE indexName/_doc/index_id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"文档搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档搜索"}},[s._v("#")]),s._v(" 文档搜索")]),s._v(" "),a("h3",{attrs:{id:"分词查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分词查询"}},[s._v("#")]),s._v(" 分词查询")]),s._v(" "),a("ul",[a("li",[s._v("简单条件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET indexName/_search\n{\n    "Query":{\n        "match": {\n            "key" : "value"\n        }\n    }\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v('此处会有分词匹配效果，假设key.value="hello world",则会将\'hello\' 和\'world\'分为两个词，即匹配目标文档中包含 key.value="hello"和key.value="world"的数据，而不会将"hello world"视为一个整体')]),s._v(" "),a("ul",[a("li",[s._v("完整匹配")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET indexName/_search\n{\n    "Query":{\n        "term":{\n            "key":{\n                "value" :"text"\n            }\n        }\n    }\n\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v('此处会有完全匹配效果，假设key.value="hello world"，则ES会将"hello world"视为一个整体进行查找')]),s._v(" "),a("ul",[a("li",[s._v("对查询结果的字段进行限制")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 假如文档数据中含有多个key值，分别为key0...key10,如果仅需要展示部分key，则利用"_source"属性进行限制\n\nGET indexName/_search\n{\n    "_source": [key1,key2..]\n    "Query":{\n        "term":{\n            "key":{\n                "value" :"text"\n            }\n        }\n    }\n\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);