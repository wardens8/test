```javascript
// 编程
const websiteCode = {
  // 软件安装
  ruanjian: [
    { name: 'VsCode', url: 'https://code.visualstudio.com/' },
    { name: 'Vscode网页版', url: 'https://vscode.dev/' },
    {
      name: 'Visual Studio',
      url: 'https://visualstudio.microsoft.com/zh-hans/vs/',
    },
    { name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/' },
    { name: 'HBuilderX', url: 'https://www.dcloud.io/' },
    { name: 'Markdown', url: 'https://markdown.p2hp.com/index.html' },
    { name: 'Postman', url: 'https://www.postman.com/' },
    { name: 'python', url: 'https://www.python.org/' },
    { name: 'PyCharm', url: 'https://www.jetbrains.com/pycharm/' },
    { name: 'JetBrains', url: 'https://www.jetbrains.com/' },
    { name: 'codepen', url: 'https://codepen.io/' },
  ],
  // 前端导航
  daohang: [
    { name: 'github', url: 'https://github.com/' },
    { name: 'gitee', url: 'https://gitee.com/' },
    { name: '程序员导航', url: 'http://cxy521.com/' },
    { name: '马哥导航', url: 'https://www.mgnav.com/' },
    { name: '无涯教程', url: 'https://www.learnfk.com/' },
    {
      name: '大佬博客',
      url: 'https://github.com/timqian/chinese-independent-blogs/',
    },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { name: '力扣LeetCode', url: 'https://leetcode.cn' },
    { name: '思否', url: 'https://segmentfault.com' },
    { name: '稀土掘金', url: 'https://juejin.cn' },
    { name: 'edX', url: 'https://www.edx.org/' },
    { name: '我要自学网', url: 'https://www.51zxw.net/' },
  ],
  // 文档
  wendang: [
    { name: 'MDN', url: 'https://developer.mozilla.org' },
    { name: '菜鸟教程', url: 'https://www.runoob.com' },
    { name: 'w3school在线教程', url: 'https://www.w3school.com.cn/' },
    { name: 'W3Schools', url: 'https://w3schools.com' },
    { name: 'JS中文手册', url: 'http://shouce.jb51.net/jscript/index.html' },
    { name: 'overAPI', url: 'https://overapi.com/' },
    // -----
    { name: 'Less官网', url: 'https://lesscss.org/' },
    { name: 'Less_BS', url: 'https://less.bootcss.com/' },
    { name: 'Less中文网', url: 'https://lesscss.cn/' },
    { name: 'Sass官网', url: 'https://sass-lang.com/' },
    { name: 'Sass_BS', url: 'https://sass.bootcss.com/' },
    { name: 'Sass中文网', url: 'https://www.sass.hk/' },
    { name: 'Stylus官网', url: 'https://stylus-lang.com/' },
    { name: 'Stylus_BS', url: 'https://stylus.bootcss.com/' },
    { name: 'Stylus中文网', url: 'https://www.stylus-lang.cn/' },
    // -----
    { name: 'jQuery官网', url: 'https://jquery.com/' },
    { name: 'jQuery中文网', url: 'https://jqueryjs.cn/' },
    { name: 'jQuery中文文档', url: 'http://jquery3.yanzhihui.com/index.html' },
    { name: 'jQuery插件库', url: 'https://www.jq22.com/' },
    { name: 'jQuery之家', url: 'http://www.htmleaf.com/' },
    { name: 'jQuery网页特效', url: 'https://www.17sucai.com/' },
    // -----
    { name: 'Bootstrap英文官网', url: 'https://getbootstrap.com/' },
    { name: 'Bootstrap中文官网', url: 'https://www.bootcss.com/' },
    { name: 'Bootstrap中文手册', url: 'https://www.bootstraph.com/' },
    { name: 'LayUI', url: 'https://layui.dev/' },
    { name: 'easyUI', url: 'https://www.jeasyui.cn/' },
    { name: 'TailwindCSS官网', url: 'https://tailwindcss.com/' },
    { name: 'TailwindCSS中文文档', url: 'https://www.tailwindcss.cn/' },
    { name: 'Day.js官网', url: 'https://day.js.org/' },
    { name: 'Day.js中文网', url: 'https://dayjs.fenxianglu.cn/' },
    { name: 'chart.js官网', url: 'https://www.chartjs.org/' },
    { name: 'chart.js中文文档', url: 'https://chartjs.bootcss.com/' },
    { name: 'Echarts官网', url: 'https://echarts.apache.org/en/index.html' },
    { name: 'Echarts中文网', url: 'https://echarts.apache.org/zh/index.html' },
    { name: 'Swiper英文官网', url: 'https://swiperjs.com/' },
    { name: 'Swiper中文官网', url: 'https://www.swiper.com.cn/' },
    { name: 'Font Awesome', url: 'https://fontawesome.com/v4/' },
    { name: 'ES6入门教程', url: 'https://es6.ruanyifeng.com/' },
    // -----
    { name: 'Node.js官网', url: 'https://nodejs.org/en' },
    { name: 'Node.js中文网', url: 'https://nodejs.cn/' },
    { name: 'npm官网', url: 'https://www.npmjs.com/' },
    { name: 'npm中文网', url: 'https://npm.nodejs.cn/' },
    { name: 'Express官网', url: 'https://expressjs.com/' },
    { name: 'Express中文网', url: 'https://www.expressjs.com.cn/' },
    { name: 'axios中文网', url: 'http://www.axios-js.com/' },
    { name: 'Mock.js', url: 'http://mockjs.com/' },
    { name: 'Git官网', url: 'https://git-scm.com/' },
    { name: 'Git的使用', url: 'https://zhuanlan.zhihu.com/p/359108193' },
    { name: 'Docusaurus官网', url: 'https://docusaurus.io/' },
    { name: 'Docusaurus中文网', url: 'https://www.docusaurus.cn/' },
    { name: 'Webpack官网', url: 'https://webpack.js.org/' },
    { name: 'Webpack中文网', url: 'https://www.webpackjs.com/' },
    { name: 'babel英文官网', url: 'https://babeljs.io/' },
    { name: 'babel中文官网', url: 'https://www.babeljs.cn/' },
    { name: 'Vite英文官网', url: 'https://vite.dev/' },
    { name: 'Vite中文官网', url: 'https://cn.vitejs.dev/' },
    { name: 'Vite中文网', url: 'https://vitejs.cn/' },
    { name: 'Grunt', url: 'https://www.gruntjs.net/' },
    { name: 'gulp.js', url: 'https://www.gulpjs.com.cn/' },
    { name: 'rollup.js', url: 'https://www.rollupjs.com/' },
    { name: 'Parcel', url: 'https://www.parceljs.cn/' },
    { name: 'TypeScript官网', url: 'https://www.typescriptlang.org/' },
    { name: 'TypeScript中文网', url: 'https://www.tslang.cn/' },
    { name: 'TypeScript_node', url: 'https://ts.nodejs.cn/' },
    // -----
    { name: 'React', url: 'https://react.docschina.org/' },
    { name: 'React中文文档', url: 'https://zh-hans.react.dev/' },
    { name: 'madewithreact', url: 'https://madewithreactjs.com/' },
    // -----
    { name: 'Vue2英文官网', url: 'https://v2.vuejs.org/' },
    { name: 'Vue2中文官网', url: 'https://v2.cn.vuejs.org/' },
    { name: 'Vue3英文官网', url: 'https://vuejs.org/' },
    { name: 'Vue3中文官网', url: 'https://cn.vuejs.org/' },
    { name: 'VueCLI', url: 'https://cli.vuejs.org/zh/' },
    {
      name: 'vue.config.js配置参考',
      url: 'https://zhuanlan.zhihu.com/p/354740692/',
    },
    { name: 'VueRouter', url: 'https://router.vuejs.org/zh/' },
    { name: 'madewithvue', url: 'https://madewithvuejs.com/' },
    {
      name: '为什么要先commit，然后pull，最后再push？而不是commit然后直接push',
      url: 'https://blog.csdn.net/Sweet__Cat/article/details/79397629?utm_source=blogxgwz2',
    },
    {
      name: '后端的vue笔记',
      url: 'https://zhuanlan.zhihu.com/p/408366155/',
    },
    { name: 'uni-app官网', url: 'https://uniapp.dcloud.io/' },
    {
      name: '微信小游戏制作工具',
      url: 'https://gamemaker.weixin.qq.com/#/',
    },
    { name: 'ElementUI', url: 'https://element.eleme.cn/#/zh-CN/' },
    {
      name: 'vue-element-admin',
      url: 'https://panjiachen.github.io/vue-element-admin/',
    },
    {
      name: '推荐几个VUEUI组件库',
      url: 'https://blog.csdn.net/qq_48960335/article/details/124685062',
    },
    {
      name: '推荐几个移动端前端UI框架',
      url: 'https://zhuanlan.zhihu.com/p/160908549',
    },
    // -----
    { name: 'Angular英', url: 'https://angular.io/' },
    { name: 'Angular汉', url: 'https://angular.cn/' },
  ],
  // CDN
  cdn: [
    { name: 'jsdelivrCDN', url: 'https://www.jsdelivr.com/' },
    { name: 'BootCDN', url: 'https://www.bootcdn.cn/' },
    { name: 'StaticfileCDN', url: 'https://staticfile.org/' },
    { name: 'cdnjs', url: 'https://cdnjs.com/' },
  ],
  // API
  api: [
    { name: '接口大全', url: 'https://www.free-api.com/' },
    { name: '搏天api', url: 'https://api.btstu.cn/' },
    {
      name: 'fangzesheng/free-api:收集免费的接口服务,做一个api的搬运工',
      url: 'https://github.com/fangzesheng/free-api',
    },
    { name: '免费API', url: 'https://api.aa1.cn/' },

    { name: '星辰API', url: 'https://api.xcboke.cn/' },
    { name: '网易云音乐API', url: 'http://iwenwiki.com:3000/' },
  ],
  // 小工具
  gongju: [
    {
      name: 'Quicker软件您的指尖工具箱-Quicker',
      url: 'https://getquicker.net/',
    },
    {
      name: 'freefq/free:翻墙、免费翻墙、免费科学上网、免费节点、免费梯子、免费ss/v2ray/trojan节点、蓝灯、谷歌商店、翻墙梯子',
      url: 'https://github.com/freefq/free',
    },
    { name: '王亚赛', url: 'https://wangyasai.github.io/' },

    { name: 'loading效果网', url: 'https://loading.io/' },
    { name: 'Neumorphism.io', url: 'https://neumorphism.io/' },
    { name: 'cssdeck', url: 'https://cssdeck.com/' },
  ],
}
```
