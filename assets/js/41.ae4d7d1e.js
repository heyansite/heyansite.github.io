(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{661:function(s,t,e){s.exports=e.p+"assets/img/1-1.f1f9e7d3.jpg"},662:function(s,t,e){s.exports=e.p+"assets/img/1-2.343f2ca5.jpg"},663:function(s,t,e){s.exports=e.p+"assets/img/1-3.e3c925d3.jpg"},664:function(s,t,e){s.exports=e.p+"assets/img/1-4.e6e99653.jpg"},665:function(s,t,e){s.exports=e.p+"assets/img/1-5.a744ae87.jpg"},893:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"从0到1搭建个人网站-此网站为例（技术篇）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从0到1搭建个人网站-此网站为例（技术篇）"}},[s._v("#")]),s._v(" 从0到1搭建个人网站-此网站为例（技术篇）")]),s._v(" "),a("p",[s._v("本文旨在记录本网站的技术实现思路，也给一些毫无头绪的人一点启发，所以"),a("font",{attrs:{color:"red"}},[s._v("不涉及过多的技术选型、技术细节，也不会探究各方面的合理性")]),s._v("。总的来说就是在学习过程中，酌情使用感兴趣的技术搭建个人网站。")],1),s._v(" "),a("p",[s._v("关于建个人网站，需要服务器、域名等相关细节，请参考另外一篇文章 “"),a("a",{attrs:{href:"https://heyan.site:8001/start/BuildThisSiteNonTech.html",target:"_self",rel:"noopener noreferrer"}},[s._v("从0到1搭建个人网站-此网站为例（非技术篇）")]),s._v("”。")]),s._v(" "),a("h2",{attrs:{id:"基本技术框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本技术框架"}},[s._v("#")]),s._v(" "),a("strong",[s._v("基本技术框架")])]),s._v(" "),a("ul",[a("li",[s._v("前端：Vue框架")]),s._v(" "),a("li",[s._v("后端：Springboot")]),s._v(" "),a("li",[s._v("数据库：MongoDB/MySql")]),s._v(" "),a("li",[s._v("博客系统：Vuepress")]),s._v(" "),a("li",[s._v("其他：Docker，Nginx")]),s._v(" "),a("li",[s._v("云服务器：阿里云centos7.x")])]),s._v(" "),a("p",[s._v("整体基于基本的前后端分离实现，初期因为没有数据交互，前端只是静态的html模板封装成了简单的Vue项目（选择Vue，不是因为熟悉，恰恰是因为不熟悉，而blog又想选用同系列的Vueperss，就自然而然的用上了它，也算是接触下这个框架）；后端使用Springboot，就不说了，作为微服务的基础，内嵌tomcat，上手也是简单快捷；数据库方面，暂时打算需要用到的时候就选用当前最热门的开源Sql或Nosql产品就ok了，作为个人网站，也只会在项目中简单的使用，无需考虑过多；博客系统，选用Vuepress（不要问为什么，你可以选择Jekyll、Hexo、Hugo等... 我就是看上这个了），这里我会封装博客系统作为一个单独的服务，在主页面提供跳转链接（在同一台云服务器，用不同的端口部署单独的nginx）；最后一点就是，不管是前端、后端还是博客系统，最终部署上服务器，都会是单独的docker容器。")]),s._v(" "),a("h2",{attrs:{id:"实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[s._v("#")]),s._v(" "),a("strong",[s._v("实现思路")])]),s._v(" "),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("p",[s._v("至于个人主页界面，建议多到网上看看风格，找一个喜欢的，然后有时间、有技术、有审美的可以手撸一个网站；又或者像我一样找个免费的模板，下下来修修改改（我的主页是基于 http://sc.chinaz.com/mobandemo.aspx?downloadid=201931409414 修改的）。")]),s._v(" "),a("p",[s._v("当然，下载的模板是纯html+css的；后期要扩展会很局限，所以就把这个封装到了框架里面，这样功能结构会比较清晰。")]),s._v(" "),a("p",[s._v("如下图，我把原主页html的各个模块拆成单独的home component，修改起来会方便很多。（这里关于如何搭建Vue工程之类的，可以参考网上教程，我也会在后续的blog中慢慢补上）")]),s._v(" "),a("div",{staticStyle:{display:"flex"}},[a("img",{staticStyle:{display:"block"},attrs:{src:e(661),alt:"目录结构",align:"left"}})]),s._v("\n同时将原模板下的assets放到了src目录下，在Home.vue下引用即可\n"),a("div",{staticStyle:{display:"flex"}},[a("img",{staticStyle:{display:"block"},attrs:{src:e(662),alt:"Home.vue",align:"left"}})]),s._v("\n至于修改样式什么的就仁者见仁了，这里不细说。\n"),a("p",[s._v("个人网站的雏形大概有了。这个时候你可以部署到服务器上访问，对外展示你的第一个personal page!")]),s._v(" "),a("h3",{attrs:{id:"前端部署上云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端部署上云服务器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("前端部署上云服务器")])]),s._v(" "),a("h4",{attrs:{id:"服务器端部署准备："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端部署准备："}},[s._v("#")]),s._v(" 服务器端部署准备：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("服务器端本地安装docker环境       "),a("em",[s._v("具体可参考")]),s._v("："),a("a",{attrs:{href:"https://heyan.site:8001/start/CentosDockerInstall.html",target:"_self",rel:"noopener noreferrer"}},[s._v("CentOS云服务器安装Docker环境")])])]),s._v(" "),a("li",[a("p",[s._v("pull nginx镜像")])]),s._v(" "),a("li",[a("p",[s._v("创建nginx容器")]),s._v(" "),a("ul",[a("li",[s._v("这里首先创建工作目录nginx_homepage, 然后cd到目录创建nginx的基本目录(/conf.d / html / logs 以及配置文件ngnix.conf)")]),s._v(" "),a("li",[s._v("创建容器时，映射服务器文件夹到docker的镜像工作文件夹，同时映射80端口。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --name nginx_homepage -itd -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80     \n-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/html:/usr/share/nginx/html     \n-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/nginx.conf:/etc/nginx/nginx.conf     \n-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/conf.d:/etc/nginx/conf.d     \n-v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/logs:/var/log/nginx     \nnginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("p",[s._v("(具体Docker Nginx的部署，也可以参考: "),a("a",{attrs:{href:"https://heyan.site:8001/DevOps/Docker/DockerCase_Nginx.html",target:"_self",rel:"noopener noreferrer"}},[s._v("Docker Case - Nginx 基本部署")]),s._v(")")]),s._v(" "),a("h4",{attrs:{id:"本地部署准备："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地部署准备："}},[s._v("#")]),s._v(" "),a("strong",[s._v("本地部署准备：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("build项目")]),s._v(" "),a("p",[s._v("vue项目build后会在项目下生成dist目录，此目录下就是build出来的文件")]),s._v(" "),a("div",{staticStyle:{display:"flex"}},[a("img",{staticStyle:{display:"block"},attrs:{src:e(663),alt:"dist",align:"left"}})])]),s._v(" "),a("li",[a("p",[s._v("本地docker测试")]),s._v(" "),a("p",[s._v('虽然前端部署可以跳过本步骤，但还是建议进行本地测试。（参看下面"说明"部分）')]),s._v(" "),a("p",[s._v("在本地docker环境中创建如上服务器端同样的容器，建议同样的工作目录，以及同样的镜像版本。将dist目录下的文件拷贝至nginx工作目录的html文件夹下。")]),s._v(" "),a("p",[s._v("测试网站\thttp://localhost/")])]),s._v(" "),a("li",[a("p",[s._v("上传文件")]),s._v(" "),a("p",[s._v("本地测试通过后，将本地的nginx_home完全copy到云服务器的相同目录下就可以了（之前服务器上nginx已经启动）；如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /xxxxxx/nginx_homepage/* root@heyan.site:/home/nginx_homepage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("测试网站\thttp://heyan.site/")]),s._v(" "),a("div",{staticStyle:{display:"flex"}},[a("img",{staticStyle:{display:"block"},attrs:{src:e(664),alt:"home",align:"left"}})])])]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[s._v("说明")]),s._v("：因为是前端项目，所以本质上可以跳过本地创建docker容器的步骤而直接上传dist目录到服务器端的html文件夹。但如果是后台项目，例如我们的springboot项目，其实最终部署流程会是：首先push本地镜像到远程Registry，然后服务器端要做的就是pull部署的镜像文件 ("),a("em",[s._v("具体可参考")]),s._v("："),a("a",{attrs:{href:"https://heyan.site:8001/start/PushLocalImageToAliyun.html",target:"_self",rel:"noopener noreferrer"}},[s._v("发布本地镜像到阿里云服务器")]),s._v(")。所以在一开始，前端我们也最好老老实实的搭建本地环境。")],1),s._v(" "),a("p",[s._v("到这里，你已经迈出了第一步，有了自己的静态网站。这也是这篇文章所有关于前端方面的。")]),s._v(" "),a("h3",{attrs:{id:"后端以及数据库端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端以及数据库端"}},[s._v("#")]),s._v(" 后端以及数据库端")]),s._v(" "),a("p",[s._v("这两部分暂时空缺，初期，这个网站只做静态内容的展示，还用不到后端的数据交互。等需要的时候，再补...")]),s._v(" "),a("p",[s._v("几点说明：")]),s._v(" "),a("p",[s._v("虽然目前个人网站用不到，但还是建议自己去demo个后端springboot程序走一套开发部署流程，等要的时候，就可以无缝直接上了！主要包括:")]),s._v(" "),a("ul",[a("li",[s._v("后端接口开发")]),s._v(" "),a("li",[s._v("前端开发，调用后端接口")]),s._v(" "),a("li",[s._v("数据库基础")]),s._v(" "),a("li",[s._v("Springboot的docker部署")])]),s._v(" "),a("p",[s._v("前三点是纯开发，不说了。最后一个会在docker相关blog中给一个小demo。")]),s._v(" "),a("h3",{attrs:{id:"vuepress博客系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress博客系统"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Vuepress博客系统")])]),s._v(" "),a("p",[s._v("博客系统可以作为前端系统的一部分，也可做一个服务独立出来，这里我选择后者，方便单独维护。")]),s._v(" "),a("p",[s._v("至于Vuepress的基本使用，可以参考官网：https://vuepress.vuejs.org/zh/guide/")]),s._v(" "),a("p",[s._v("Vuepress的部署完全同前端部署，创建单独的工作目录nginx_blog，映射8001端口。部署好后，可以单独访问，主页中涉及博客相关会跳转到这个地址；同时blog右上角有链接‘Site Home’跳回主页。")]),s._v(" "),a("div",{staticStyle:{display:"flex"}},[a("img",{staticStyle:{display:"block"},attrs:{src:e(665),alt:"blog site",align:"left"}})]),s._v("\nVuepress的侧边栏、标题栏的配置也是基于官网介绍，根据各自的需求设置层级就行了，就不详细介绍了。\n"),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" "),a("strong",[s._v("总结")])]),s._v(" "),a("p",[s._v("个人网站，初期涉及的内容、知识点会比较简单，等未来有机会加入项目，再慢慢深入。作为起点，能有一个可扩展的框子是最重要的，这个东西就跟技术本身一样，有始却没有终。")])])}),[],!1,null,null,null);t.default=r.exports}}]);