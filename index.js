;(function () {
  // ---------- 🌟 语义化ID数据源：直接用英文词作为分类标识 ----------
  const websiteData = {
    home: {
      // 我的主页
      title: '我的主页',
      icon: 'home',
      subs: {
        personal: {
          title: '个人常用',
          links: [
            { name: '哔哩哔哩', desc: '综合视频平台，动漫知识娱乐', url: 'https://www.bilibili.com' },
            { name: '抖音', desc: '短视频平台，潮流娱乐生活内容', url: 'https://www.douyin.com' },
            { name: '豆包', desc: '智能对话助手，多场景高效解答', url: 'https://www.doubao.com/' },
            { name: 'DeepSeek', desc: '国产AI助手，专业领域分析强', url: 'https://chat.deepseek.com/' },
            { name: '搜狗翻译', desc: '专业翻译平台，多语言实时互译', url: 'https://fanyi.sogou.com' },
            { name: 'GitHub', desc: '全球开源代码库，开发协作平台', url: 'https://github.com/' },
          ],
        },
        favorite: {
          title: '收藏夹',
          links: [
            { name: '国家公务员局1', desc: '国考官方平台，招考公告发布（录用公务员专题）', url: 'http://bm.scs.gov.cn/pp/gkweb/core/web/ui/business/home/gkhome.html' },
            { name: '山东公务员考试网', desc: '山东公务员招考，报名查分入口', url: 'https://gwy.sdrsks.org.cn/skbm2026.html' },
            { name: '山东人事考试信息网', desc: '山东人事考试，报名查分入口', url: 'https://hrss.shandong.gov.cn/rsks/' },
            { name: '公考雷达', desc: '公考招聘资讯，职位实时汇总', url: 'https://www.gongkaoleida.com/' },
            { name: '粉笔题库', desc: '公考教资刷题，解析考点齐全', url: 'https://www.fenbi.com/spa/tiku/' },
          ],
        },
      },
    },
    tools: {
      // 常用工具
      title: '常用工具',
      icon: 'tools',
      subs: {
        search: {
          title: '搜索引擎',
          links: [
            { name: '必应', desc: '微软旗下搜索引擎，全球信息检索', url: 'https://cn.bing.com' },
            { name: '搜狗', desc: '中文搜索引擎，输入法数据支持', url: 'https://www.sogou.com/' },
            { name: '360搜索', desc: '安全搜索引擎，隐私保护特色', url: 'https://www.so.com/' },
            { name: '百度', desc: '全球中文信息最大的搜索引擎', url: 'https://www.baidu.com' },
            { name: 'Yandex', desc: '俄罗斯最大搜索引擎，全球信息检索', url: 'https://yandex.com/' },
            { name: 'DuckDuckGo', desc: '隐私保护搜索引擎，无跟踪记录', url: 'https://duckduckgo.com/' },
            { name: 'Google', desc: '全球最大搜索引擎，信息覆盖广', url: 'https://www.google.com' },
            { name: '全能搜索', desc: '聚合搜索引擎，多平台信息检索', url: './html/search.html' },
          ],
        },
        convert: {
          title: '格式转换',
          links: [
            { name: 'Smallpdf PDF转换', desc: 'PDF全能处理，操作简洁无广告', url: 'https://smallpdf.com/cn' },
            { name: 'PDF24 Tools', desc: '多格式PDF处理，免费无需注册', url: 'https://tools.pdf24.org/zh/all-tools' },
            { name: 'iLovePDF', desc: 'PDF转换编辑，批量处理高效', url: 'https://www.ilovepdf.com/zh-cn' },
            { name: 'PDF猫', desc: 'PDF转换编辑，免费无水印', url: 'https://www.pdfmao.com/' },
            { name: 'Convertio', desc: '多格式转换，支持云端文件', url: 'https://convertio.co/zh/' },
            { name: '格式转换工具', desc: '音视频、文档格式免费转换', url: 'https://cloudconvert.com' },
            { name: '格式工厂', desc: '本地格式转换，音视频图片适配', url: 'http://www.pcfreetime.com/' },
          ],
        },
        ppt: {
          title: 'PPT模板',
          links: [
            { name: '演示文稿模板', desc: 'Canva可画PPT模板，在线编辑', url: 'https://www.canva.cn/presentations/templates/' },
            { name: 'OfficePLUS Tools', desc: '微软官方Office模板平台', url: 'https://www.officeplus.cn/' },
            { name: '优品 PPT', desc: '免费/付费PPT模板分享', url: 'https://www.ypppt.com/' },
            { name: 'HiPPTER', desc: '一站式PPT资源平台', url: 'http://www.hippter.com/' },
            { name: 'Photopea', desc: '在线图片编辑，适配PPT处理', url: 'https://www.photopea.com/' },
            { name: '51PPT 模板网', desc: '免费PPT模板下载', url: 'http://www.51pptmoban.com/' },
          ],
        },
        design: {
          title: '设计工具',
          links: [
            { name: '在线PS', desc: '稿定设计版，模板化图片编辑', url: 'https://ps.gaoding.com/' },
            { name: '美图秀秀在线版', desc: '简易修图工具，特效模板丰富', url: 'https://pc.meitu.com/' },
            { name: 'Canva可画', desc: '在线设计工具，海量模板', url: 'https://www.canva.com' },
            { name: '在线抠图软件', desc: 'AI智能抠图，一键去除背景', url: 'https://www.remove.bg/zh' },
            { name: '图片压缩', desc: '无损图片压缩，体积大幅减小', url: 'https://tinypng.com' },
            { name: '泼辣修图', desc: '专业修图工具，参数精细调节', url: 'https://www.polaxiong.com/' },
            { name: '创客贴', desc: '在线设计工具，排版海报制作', url: 'https://www.chuangkit.com/' },
          ],
        },
        efficiency: {
          title: '效率工具',
          links: [
            { name: '吾爱破解', desc: '技术交流社区，工具破解分享', url: 'https://www.52pojie.cn/' },
            { name: '站长工具', desc: '网站运维工具，SEO查询核心', url: 'https://tool.chinaz.com' },
            { name: '刘明野的工具箱', desc: '多功能在线工具，轻便实用', url: 'https://tools.liumingye.cn/' },
            { name: '锤子在线工具网', desc: '办公开发工具，一站式汇总', url: 'https://www.toolhelper.cn/' },
            { name: '在线工具', desc: '轻量工具集，开发办公适配', url: 'https://tool.lu' },
            { name: 'MSDN,我告诉你', desc: '原版系统镜像下载', url: 'https://msdn.itellyou.cn/' },
            { name: '系统之家官网', desc: '系统下载与教程分享', url: 'http://www.xitongzhijia.net/' },
            { name: '微软办公教程', desc: 'Office官方教程，答疑解惑', url: 'https://support.microsoft.com/zh-cn/' },
            { name: 'word联盟', desc: 'Word教程模板，办公技巧学习', url: 'https://www.wordlm.cn/' },
            { name: 'XMind 思维导图', desc: '专业思维导图，逻辑梳理工具', url: 'https://xmind.cn/' },
            { name: 'ProcessOn 思维导图', desc: '在线思维导图，团队协作编辑', url: 'https://www.processon.com/' },
            { name: 'draw.io 在线流程图', desc: '专业流程图绘制工具，免费开源', url: 'https://www.drawio.com/' },
            { name: 'Markdown编辑器', desc: '在线编辑，实时预览多格式导出', url: 'https://dillinger.io' },
            { name: '在线OCR', desc: '图片转文字，多语言识别精准', url: 'https://ocr.wdku.net/' },
            { name: '草料二维码', desc: '二维码生成解析，样式自定义', url: 'https://cli.im/' },
            { name: '临时邮箱', desc: '匿名临时邮箱，免注册收邮件', url: 'https://temp-mail.org/zh/' },
            { name: '在线计算器', desc: '多功能科学计算器，单位换算', url: 'https://www.calculator.net/' },
            { name: '正则工具', desc: '正则表达式测试，可视化编辑', url: 'https://regexr.com' },
            { name: 'JSON格式化', desc: 'JSON校验格式化，一键解析', url: 'https://www.json.cn/' },
            { name: 'Base64编码解码', desc: '编码转换工具，开发常用', url: 'https://base64.us/' },
            { name: '颜色拾取器', desc: 'RGB/十六进制颜色值查询', url: 'https://htmlcolorcodes.com/zh/' },
            { name: 'Emoji 大全', desc: '全品类Emoji，复制使用便捷', url: 'https://www.emojiall.com/' },
            { name: '特殊字符', desc: '特殊符号合集，一键复制粘贴', url: 'https://copypastecharacter.com' },
            { name: 'IP地址查询', desc: 'IP定位归属地，运营商查询', url: 'https://www.ip138.com/' },
            { name: '软件安装目录', desc: '软件安装教程，资源汇总分享', url: 'https://mp.weixin.qq.com/s/5kFiW1NMz8x7PoC7RHVMAA' },
          ],
        },
      },
    },
    work: {
      // 办公效率
      title: '办公效率',
      icon: 'work',
      subs: {
        doc: {
          title: '办公协作',
          links: [
            { name: '钉钉', desc: '企业级沟通，考勤审批一体化', url: 'https://www.dingtalk.com' },
            { name: '企业微信', desc: '连通微信，企业高效沟通协作', url: 'https://work.weixin.qq.com' },
            { name: '腾讯会议', desc: '腾讯系会议，高清视频协作', url: 'https://meeting.tencent.com/' },
            { name: '腾讯文档', desc: '在线协作文档，多人实时编辑', url: 'https://docs.qq.com' },
            { name: '石墨文档', desc: '轻量级在线文档，团队协作', url: 'https://shimo.im' },
            { name: '金山办公WPS', desc: '办公套件，文档协作一站式', url: 'https://www.wps.cn/' },
            { name: 'Zoom', desc: '海外视频会议，跨国协作适配', url: 'https://zoom.us/' },
          ],
        },
        email: {
          title: '邮箱服务',
          links: [
            { name: '网易163邮箱', desc: '网易经典邮箱，办公社交适配', url: 'https://mail.163.com' },
            { name: '网易126邮箱', desc: '网易轻量邮箱，简洁易操作', url: 'https://m.126.com/' },
            { name: 'QQ邮箱', desc: '腾讯系邮箱，多端同步易管理', url: 'https://mail.qq.com' },
            { name: '新浪邮箱', desc: '新浪旗下邮箱，简洁易使用', url: 'https://mail.sina.com.cn/' },
            { name: 'Foxmail', desc: '腾讯旗下，客户端邮箱工具', url: 'https://www.foxmail.com/' },
            { name: '阿里云邮箱', desc: '阿里企业邮箱，安全稳定办公', url: 'https://mail.aliyun.com/' },
            { name: '搜狐邮箱', desc: '搜狐旗下邮箱，轻量无广告', url: 'https://mail.sohu.com/' },
            { name: 'Outlook邮箱', desc: '微软邮箱，办公协同功能全', url: 'https://outlook.live.com/' },
            { name: 'Gmail', desc: '谷歌邮箱，海外办公适配性高', url: 'https://mail.google.com' },
          ],
        },
        storage: {
          title: '云存储',
          links: [
            { name: '夸克网盘', desc: '轻量云盘，极速下载倍速观影', url: 'https://pan.quark.cn/' },
            { name: '阿里云盘', desc: '高速云存储，超清观影无广告', url: 'https://www.alipan.com/' },
            { name: '蓝奏云盘', desc: '轻便云盘，免登录快速下载', url: 'https://www.lanzou.com/' },
            { name: '腾讯微云', desc: '腾讯系云盘，多端协同存储', url: 'https://www.weiyun.com' },
            { name: '百度网盘', desc: '国民级云存储，多端同步易分享', url: 'https://pan.baidu.com' },
            { name: '百度企业网盘', desc: '企业级云盘，团队权限管理全', url: 'https://pan.baidu.com/enterprise/' },
            { name: '115网盘', desc: '老牌云盘，大容量资源存储', url: 'https://115.com/' },
            { name: '天翼云盘', desc: '电信旗下云盘，安全稳定存储', url: 'https://cloud.189.cn/web/main/file/folder/-11' },
            { name: '坚果云', desc: '办公云盘，团队协作同步核心', url: 'https://www.jianguoyun.com/' },
            { name: '金山云盘', desc: '金山旗下，办公文件高效管理', url: 'https://kdocs.cn/cloud/' },
            { name: 'OneDrive', desc: '微软云盘，办公文件无缝同步', url: 'https://onedrive.live.com/' },
            { name: 'Dropbox', desc: '海外云盘，跨国协作文件同步', url: 'https://www.dropbox.com/' },
            { name: '猫狸云搜索', desc: '网盘资源检索，多平台结果汇总', url: 'https://www.maoliyun.com/' },
            { name: '千帆搜索', desc: '综合资源搜索，精准检索效率高', url: 'https://www.niceso.net/' },
            { name: '趣盘搜', desc: '网盘资源搜索，分类检索更便捷', url: 'https://pan.funletu.com/' },
            { name: '盘搜搜', desc: '全网网盘资源，一键检索下载', url: 'https://www.pansoso.com/' },
            { name: '凌风云搜索', desc: '多网盘资源聚合，检索结果丰富', url: 'https://www.lingfengyun.com/' },
            { name: '鸠摩搜书', desc: '电子书资源搜索，一键找书高效', url: 'https://www.jiumodiary.com/' },
          ],
        },
        AI: {
          title: 'AI工具',
          links: [
            { name: '豆包', desc: '智能对话助手，多场景高效解答', url: 'https://www.doubao.com/' },
            { name: 'DeepSeek', desc: '国产AI助手，专业领域分析强', url: 'https://chat.deepseek.com/' },
            { name: '通义千问', desc: '阿里云AI助手，企业级应用适配', url: 'https://www.qianwen.com/' },
            { name: '智谱清言', desc: '智谱AI对话，中文交互体验佳', url: 'https://chatglm.cn' },
            { name: '文心一言', desc: '百度AI助手，多模态能力全面', url: 'https://yiyan.baidu.com' },
            { name: 'Kimi', desc: 'Moonshot AI，长文本处理体验佳', url: 'https://kimi.moonshot.cn/' },
            { name: '元宝', desc: '字节旗下AI助手，轻量化智能交互', url: 'https://yuanbao.tencent.com/chat/' },
            { name: '讯飞星火', desc: '科大讯飞AI，语音交互优势显著', url: 'https://xinghuo.xfyun.cn/' },
            { name: 'Sora', desc: 'OpenAI旗下，文本生成视频AI工具', url: 'https://openai.com/sora' },
            { name: 'Gork', desc: 'AI代码评审工具，代码质量检测', url: 'https://gork.ai/' },
            { name: 'CodeGeeX', desc: '智谱AI编程，多语言代码生成快', url: 'https://codegeex.cn/' },
            { name: 'Trae', desc: 'AI开发助手，全栈代码生成效率高', url: 'https://www.trae.io/' },
            { name: 'Tabnine', desc: 'AI代码补全，多编辑器适配性高', url: 'https://www.tabnine.com/' },
            { name: 'Replit AI', desc: '在线编程AI，实时调试与部署', url: 'https://replit.com/ai' },
            { name: 'Fork', desc: 'Git客户端工具，代码版本管理高效', url: 'https://git-fork.com/' },
            { name: 'MidJourney', desc: 'AI绘画工具，艺术创作表现力强', url: 'https://www.midjourney.com/' },
            { name: 'Stable Diffusion', desc: '开源AI绘画，自定义创作灵活', url: 'https://stablediffusionweb.com/' },
            { name: 'DALL·E 3', desc: 'OpenAI旗下，文本生成图像AI', url: 'https://openai.com/dall-e-3' },
            { name: 'Canva AI', desc: '可画AI助手，设计排版一键生成', url: 'https://www.canva.cn/magic/' },
            { name: 'Runway ML', desc: 'AI视频编辑，文生视频/修帧高效', url: 'https://runwayml.com/' },
            { name: '秘塔写作猫', desc: '中文写作AI，纠错润色排版一体', url: 'https://xiezuocat.com/' },
            { name: 'Notion AI', desc: '笔记AI助手，总结创作一体化', url: 'https://www.notion.so/ai' },
            { name: 'Grammarly AI', desc: 'AI语法纠错，英文写作润色神器', url: 'https://www.grammarly.com/ai' },
            { name: '讯飞听见AI', desc: '语音转文字，会议记录效率高', url: 'https://www.iflyrec.com/' },
            { name: 'DeepL Translate AI', desc: 'AI翻译工具，精准度远超谷歌', url: 'https://www.deepl.com/translator' },
            { name: 'ElevenLabs', desc: 'AI语音合成，多语种音色自然', url: 'https://elevenlabs.io/' },
            { name: 'AiPPT', desc: 'AI演示文稿，一键生成专业PPT', url: 'https://www.aippt.cn/' },
            { name: '优设AI导航', desc: 'AI工具导航，一站式AI资源聚合', url: 'https://hao.uisdc.com/ai/' },
          ],
        },
        google: {
          title: '谷歌工具',
          links: [
            { name: 'Google', desc: '全球搜索引擎，信息检索核心', url: 'https://www.google.com/' },
            { name: 'Gmail邮箱', desc: '谷歌邮箱，海外办公适配性高', url: 'https://mail.google.com/' },
            { name: 'Google Play', desc: '谷歌应用商店，安卓应用下载', url: 'https://play.google.com/' },
            { name: '维基百科', desc: '全球百科全书，开放式知识库', url: 'https://zh.wikipedia.org/' },
            { name: 'Twitter', desc: '海外社交平台，实时资讯分享', url: 'https://twitter.com/' },
            { name: 'YouTube', desc: '全球综合视频平台，内容全覆盖', url: 'https://www.youtube.com/' },
            { name: 'Instagram', desc: '图片社交平台，视觉内容分享', url: 'https://www.instagram.com/' },
            { name: 'Tiktok', desc: '海外短视频平台，全球潮流内容', url: 'https://www.tiktok.com/' },
            { name: 'Netflix', desc: '海外流媒体平台，精品剧集核心', url: 'https://www.netflix.com/' },
            { name: 'Twitch', desc: '全球电竞直播，游戏互动平台', url: 'https://www.twitch.tv/' },
            { name: 'ChatGPT', desc: 'OpenAI旗下，智能对话标杆产品', url: 'https://chat.openai.com/' },
            { name: 'Gemini', desc: '谷歌多模态AI，跨模态理解能力强', url: 'https://gemini.google.com/' },
            { name: 'Grok', desc: 'X旗下AI助手，实时联网对话', url: 'https://www.grok.com/' },
            { name: 'Claude', desc: 'Anthropic旗下，长文本处理见长', url: 'https://claude.ai/' },
            { name: 'Cursor', desc: 'AI编程编辑器，代码生成调试一体', url: 'https://www.cursor.so/' },
            { name: 'Copilot', desc: '微软AI编程助手，实时代码提示', url: 'https://github.com/features/copilot' },
            { name: 'CodeLlama', desc: 'Meta开源AI，代码生成与调试', url: 'https://ai.meta.com/resources/models-and-libraries/codellama/' },
            { name: 'Telegram', desc: '海外即时通讯，加密聊天工具', url: 'https://web.telegram.org/' },
            { name: 'Facebook', desc: '全球社交平台，社群互动核心', url: 'https://www.facebook.com/' },
            { name: 'Pinterest', desc: '灵感分享平台，图片收藏核心', url: 'https://www.pinterest.com/' },
            { name: 'LinkedIn', desc: '海外职场社交，求职人脉拓展', url: 'https://www.linkedin.com/' },
            { name: 'Reddit', desc: '海外论坛社区，多元话题讨论', url: 'https://www.reddit.com/' },
            { name: 'WhatsApp', desc: '海外通讯工具，跨平台消息互通', url: 'https://www.whatsapp.com/' },
            { name: 'Snapchat', desc: '阅后即焚社交，年轻化互动工具', url: 'https://www.snapchat.com/' },
            { name: 'BBC', desc: '英国广播公司，全球新闻资讯', url: 'https://www.bbc.com/' },
            { name: 'CNN', desc: '美国有线电视，国际新闻报道', url: 'https://www.cnn.com/' },
            { name: '纽约时报', desc: '美国主流媒体，深度新闻报道', url: 'https://www.nytimes.com/' },
            { name: '路透社', desc: '国际新闻通讯社，全球资讯发布', url: 'https://www.reuters.com/' },
            { name: 'The Verge', desc: '海外科技媒体，数码资讯核心', url: 'https://www.theverge.com/' },
            { name: 'Spotify', desc: '全球音乐平台，正版曲库丰富', url: 'https://open.spotify.com/' },
            { name: 'Dropbox', desc: '海外云盘，跨国协作文件同步', url: 'https://www.dropbox.com/' },
            { name: 'Quora', desc: '海外问答社区，知识分享平台', url: 'https://www.quora.com/' },
            { name: 'Medium', desc: '海外创作平台，深度文章分享', url: 'https://medium.com/' },
            { name: 'Amazon Prime', desc: '亚马逊会员，流媒体+购物权益', url: 'https://www.amazon.com/Prime/' },
          ],
        },
      },
    },
    fun: {
      // 娱乐休闲
      title: '娱乐休闲',
      icon: 'fun',
      subs: {
        video: {
          title: '视频平台',
          links: [
            { name: '央视频', desc: '央视旗下，权威视听内容平台', url: 'https://www.yangshipin.cn/' },
            { name: '哔哩哔哩', desc: '综合视频平台，动漫知识娱乐', url: 'https://www.bilibili.com' },
            { name: '抖音', desc: '短视频平台，潮流娱乐生活内容', url: 'https://www.douyin.com' },
            { name: '快手', desc: '短视频直播，下沉市场内容生态', url: 'https://kuaishou.com' },
            { name: 'AcFun', desc: '二次元弹幕视频，泛娱乐社区', url: 'https://acfun.cn' },
            { name: '西瓜视频', desc: '中长视频平台，生活知识资讯', url: 'https://www.ixigua.com/' },
            { name: '爱奇艺iQIYI', desc: '综合视频平台，剧集综艺全覆盖', url: 'https://www.iqiyi.com/' },
            { name: '优酷', desc: '综合视频平台，精品剧集与综艺', url: 'https://www.youku.com/' },
            { name: '腾讯视频', desc: '综合视频平台，自制内容丰富', url: 'https://v.qq.com/' },
            { name: '搜狐视频', desc: '综合视频平台，自制剧特色鲜明', url: 'https://tv.sohu.com/' },
            { name: '咪咕视频', desc: '体育赛事核心，综合视频平台', url: 'https://www.miguvideo.com/' },
            { name: '乐视视频', desc: '老牌视频平台，经典影视资源', url: 'https://www.letv.com/' },
            { name: '土豆', desc: '老牌视频平台，短视频长视频兼备', url: 'https://www.tudou.com/' },
            { name: '芒果TV', desc: '湖南广电旗下，综艺剧集核心', url: 'https://www.mgtv.com/' },
            { name: 'PP视频', desc: '体育影视兼备，综合视频平台', url: 'https://www.ppvideo.com/' },
            { name: '风行视频', desc: '影视聚合平台，高清影片播放', url: 'https://www.fun.tv/' },
            { name: '人人视频', desc: '海外影视平台，美剧韩剧聚合', url: 'https://www.rr.tv/' },
            { name: '百家讲坛', desc: '央视文化讲坛，文史知识科普', url: 'http://tv.cctv.com/lm/bjjt/' },
            { name: '斗鱼直播', desc: '游戏直播为主的互动直播平台', url: 'https://douyu.com' },
            { name: '虎牙直播', desc: '电竞直播核心，泛娱乐直播平台', url: 'https://huya.com' },
            { name: '腾讯直播', desc: '腾讯旗下，电商直播核心平台', url: 'https://live.qq.com/' },
            { name: '花椒直播', desc: '泛娱乐直播，颜值才艺互动', url: 'https://www.huajiao.com/' },
            { name: '搜狐直播', desc: '搜狐旗下，娱乐资讯直播平台', url: 'https://tv.sohu.com/live/' },
            { name: 'TikTok', desc: '海外短视频平台，全球潮流内容', url: 'https://www.tiktok.com/' },
            { name: 'YouTube', desc: '全球综合视频平台，内容全覆盖', url: 'https://youtube.com' },
            { name: 'Twitch', desc: '全球电竞直播，游戏互动平台', url: 'https://twitch.tv' },
            { name: 'FreeOK', desc: '影视资源平台，各类影片聚合', url: 'https://www.freeok.mobi/' },
            { name: '茶杯狐', desc: '影视资源平台，高清影片观看', url: 'https://www.cupfox7.com/' },
            // { name: '即刻影视', desc: '影视资源平台，高清影片观看', url: 'https://nsvod.cc/' },
            { name: 'LIBVIO', desc: '影视播放平台，高清影片观看', url: 'https://www.libviohd.com/' },
            { name: '大千影视', desc: '动漫资源平台，各类动漫观看', url: 'https://www.dalvdm.cc/' },
            { name: '豌豆PRO', desc: '影视资源工具，多平台内容聚合', url: 'https://wandou.la/' },
            { name: '影视书籍推荐', desc: '影视推荐网站，经典电影电视剧', url: './html/movie.html' },
          ],
        },
        music: {
          title: '音乐平台',
          links: [
            { name: '网易云音乐', desc: '高品质音乐，乐评氛围浓厚', url: 'https://music.163.com' },
            { name: 'QQ音乐', desc: '海量正版音乐，无损音质体验', url: 'https://y.qq.com' },
            { name: '酷狗音乐', desc: '老牌音乐平台，音效功能丰富', url: 'https://www.kugou.com/' },
            { name: '酷我音乐', desc: '正版音乐库，音频节目多样', url: 'https://www.kuwo.cn/' },
            { name: '咪咕音乐', desc: '免费正版音乐，赛事主题曲库', url: 'https://music.migu.cn/' },
            { name: 'Apple Music', desc: '苹果旗下，无损杜比全景声', url: 'https://music.apple.com/' },
            { name: '虾米音乐', desc: '小众音乐库，独立音乐人阵地', url: 'https://www.xiami.com/' },
            { name: '喜马拉雅', desc: '音频平台，有声书播客为主', url: 'https://www.ximalaya.com/' },
            { name: '荔枝', desc: '音频直播平台，情感语音互动', url: 'https://www.lizhi.fm/' },
            { name: '全民K歌', desc: 'K歌平台，智能评分社交互动', url: 'https://kg.qq.com/' },
            { name: '米兔音乐', desc: '免费音乐平台，高品质音乐播放', url: 'https://www.qqmp3.vip/' },
            { name: 'Spotify', desc: '全球知名音乐平台，曲库丰富', url: 'https://open.spotify.com' },
          ],
        },
        social: {
          title: '社交社区',
          links: [
            { name: '微信', desc: '国民级社交软件，多功能生态', url: 'https://weixin.qq.com/' },
            { name: 'QQ', desc: '经典社交软件，年轻化互动生态', url: 'https://im.qq.com/' },
            { name: '小红书', desc: '生活方式分享，种草消费指南', url: 'https://www.xiaohongshu.com' },
            { name: '微博', desc: '实时热点广场，社交互动核心', url: 'https://weibo.com' },
            { name: '知乎', desc: '知识问答社区，深度内容创作', url: 'https://www.zhihu.com/' },
            { name: '贴吧', desc: '兴趣圈层社区，话题讨论阵地', url: 'https://tieba.baidu.com/' },
            { name: '天涯', desc: '老牌社区论坛，多元话题讨论', url: 'https://www.tianya.im/' },
            { name: '即刻', desc: '兴趣资讯社区，小众话题聚合', url: 'https://web.okjike.com/' },
            { name: '虎扑', desc: '体育电竞社区，直男兴趣阵地', url: 'https://www.hupu.com/' },
            { name: '脉脉', desc: '职场社交平台，行业信息交流', url: 'https://maimai.cn/' },
            { name: '豆瓣', desc: '书影音评论，文艺社区平台', url: 'https://www.douban.com' },
            { name: '豆瓣小组', desc: '细分兴趣小组，小众话题讨论', url: 'https://www.douban.com/group/' },
            { name: '今日热榜', desc: '多平台热点聚合，实时热榜', url: 'https://rebang.today/' },
            { name: '今日热榜官网', desc: '全网热榜汇总，热点实时追踪', url: 'https://tophub.today/' },
            { name: 'LOFTER', desc: '同人创作社区，兴趣内容分享', url: 'https://www.lofter.com/' },
          ],
        },
        shopping: {
          title: '购物平台',
          links: [
            { name: '淘宝', desc: '综合电商平台，品类全覆盖', url: 'https://taobao.com' },
            { name: '京东', desc: '综合电商，自营物流体验优', url: 'https://jd.com' },
            { name: '拼多多', desc: '社交电商，低价拼团模式核心', url: 'https://pinduoduo.com' },
            { name: '苏宁易购', desc: '综合电商，家电3C品类见长', url: 'https://suning.com' },
            { name: '亚马逊', desc: '全球综合电商，跨境商品丰富', url: 'https://amazon.com' },
            { name: '唯品会', desc: '品牌特卖电商，折扣正品核心', url: 'https://vip.com' },
            { name: '天猫', desc: '品质电商平台，品牌官方入驻', url: 'https://tmall.com' },
            { name: '1688批发', desc: '阿里批发平台，货源采购核心', url: 'https://1688.com' },
            { name: '美团', desc: '本地生活服务，外卖到店核心', url: 'https://meituan.com' },
            { name: '饿了么', desc: '外卖平台，餐饮配送服务为主', url: 'https://ele.me' },
            { name: '大众点评', desc: '本地生活服务，餐饮娱乐点评', url: 'https://www.dianping.com/' },
            { name: '考拉海购', desc: '跨境电商，进口商品保税直购', url: 'https://kaola.com' },
            { name: '京东全球购', desc: '京东跨境电商，海外正品采购', url: 'https://jd.hk' },
          ],
        },
        game: {
          title: '游戏平台',
          links: [
            { name: 'Steam', desc: '全球最大PC游戏平台，游戏种类丰富', url: 'https://store.steampowered.com/' },
            { name: 'Epic Games', desc: '知名游戏平台，独占游戏众多', url: 'https://www.epicgames.com/store/zh-CN/' },
            { name: 'Origin', desc: 'EA旗下游戏平台，主打体育游戏', url: 'https://www.origin.com/chn/zh-cn/store' },
            { name: 'Uplay', desc: '育碧旗下，刺客信条等IP核心', url: 'https://uplay.ubisoft.com/' },
            { name: 'WeGame', desc: '腾讯旗下，国服PC游戏平台', url: 'https://www.wegame.com/' },
            { name: '战网', desc: '暴雪旗下，魔兽炉石等游戏平台', url: 'https://www.battlenet.com.cn/' },
            { name: 'Xbox Store', desc: '微软Xbox，主机+PC游戏商城', url: 'https://www.xbox.com/zh-CN/store' },
            { name: 'PS Store', desc: '索尼PS平台，独占大作聚集地', url: 'https://store.playstation.com/' },
            { name: '任天堂eShop', desc: '任天堂官方，掌机主机游戏库', url: 'https://www.nintendo.com.hk/' },
            { name: 'TapTap', desc: '手游社区平台，正版手游下载', url: 'https://www.taptap.cn/' },
            { name: '4399', desc: '经典小游戏平台，休闲游戏多', url: 'https://www.4399.com/' },
            { name: '7k7k', desc: '经典小游戏平台，休闲游戏多', url: 'https://www.7k7k.com/' },
            { name: '游民星空', desc: '游戏资讯平台，攻略评测齐全', url: 'https://www.gamersky.com/' },
            { name: '3DMGAME', desc: '单机游戏门户，资源攻略丰富', url: 'https://www.3dmgame.com/' },
            { name: '游侠网', desc: '老牌游戏门户，补丁攻略核心', url: 'https://www.ali213.net/' },
            { name: '小霸王红白机', desc: '经典怀旧游戏，红白机复刻', url: 'https://www.yikm.net/' },
            { name: 'Poki（宝玩）', desc: '海外休闲小游戏，品类多样', url: 'https://poki.com/zh' },
          ],
        },
        other: {
          title: '其他平台',
          links: [
            { name: 'iMyShare', url: 'https://imyshare.com/' },
            { name: '书签地球', url: 'https://www.bookmarkearth.com/' },
            { name: 'Jay的资源库', url: 'https://www.lovejay.top/' },
            { name: '有意思导航', url: 'https://daohang.youyisi8.com/' },
            { name: '大哈导航', url: 'https://dh.sqst.xyz/' },
            { name: '不死鸟官网发布页', url: 'https://dalao.ru/' },
            { name: 'P站-Pixiv', url: 'https://www.huashi6.com/' },
            { name: '动漫场景截图搜索引擎', url: 'https://trace.moe/' },
            { name: 'ACG喵导航', url: 'https://www.miaoaaa.com/' },
            { name: '叽哩叽哩游戏网ACG', url: 'https://www.jiligamefun.com/' },
            { name: '动漫图片和壁纸', url: 'https://anime-pictures.net/?lang=zh_CN' },
            { name: 'WALLPAPER ABYSS', url: 'https://wall.alphacoders.com/' },
            { name: '彼岸壁纸', url: 'http://www.netbian.com/' },
            { name: '文王', url: 'https://jinqiangua.911cha.com/' },
            { name: '周易大学堂', url: 'https://zydx.top/' },
            { name: '吉祥风水网', url: 'https://www.gdjxfsw.com/pp/index.html' },
            { name: '全民万年历', url: 'https://www.qmrl888.com/' },
            { name: '万年历网', url: 'https://www.wannianli3.com/' },
          ],
        },
      },
    },
    news: {
      // 新闻资讯
      title: '新闻资讯',
      icon: 'news',
      subs: {
        party: {
          title: '党建资讯',
          links: [
            { name: '共产党员网', desc: '党建官方平台，服务党员学习与党务工作', url: 'https://www.12371.cn/' },
            { name: '求是网', desc: '求是主管，党的创新理论解读核心理论平台', url: 'https://www.qstheory.cn/' },
            { name: '学习强国', desc: '国家级理论武装平台，整合全品类学习资源', url: 'https://www.xuexi.cn/' },
            { name: '中国政府网', desc: '国家政务信息，政策文件发布', url: 'https://www.gov.cn/' },
            { name: '人民论坛网', desc: '人民日报主管，知名理论思想交流门户', url: 'https://www.rmlt.com.cn/' },
            { name: '人民网', desc: '人民日报主办，国家重点新闻网站排头兵', url: 'http://www.people.com.cn/' },
            { name: '人民日报', desc: '党中央机关报，国内权威主流核心大报', url: 'https://paper.people.com.cn/' },
            { name: '光明网', desc: '光明日报主办，思想文化领域中央新闻网', url: 'https://www.gmw.cn/' },
            { name: '光明日报', desc: '党中央机关报，侧重教科文卫理论领域', url: 'https://epaper.gmw.cn/gmrb/' },
            { name: '中国组织人事报新闻网', desc: '组织人事权威资讯发布平台', url: 'https://www.zuzhirenshi.com/' },
            { name: '中国组织人事报', desc: '组织人事类官方电子报查阅', url: 'https://www.zuzhirenshi.com/newspaper/index' },
            { name: '中国纪委国家监委网站', desc: '纪检监察权威资讯与公告', url: 'https://www.ccdi.gov.cn/' },
            { name: '中国纪检监察报', desc: '纪检监察官方电子报阅读', url: 'https://jjjcb.ccdi.gov.cn/epaper/' },
            { name: '央视网', desc: '央视主办，国家级视听融合新闻传播平台', url: 'https://www.cctv.com/' },
            { name: '央视新闻', desc: '央视官方平台，重大新闻权威首发发布', url: 'https://news.cctv.com/' },
            { name: '半月谈', desc: '新华社主办，知名权威时政民生党刊平台', url: 'http://www.banyuetan.org/' },
            { name: '闪电新闻', desc: '山东广电打造，山东本土融媒体新闻平台', url: 'https://sdxw.iqilu.com/' },
            { name: '国家法规数据库', desc: '官方法规查询，条文检索权威', url: 'https://flk.npc.gov.cn/' },
            { name: '报纸大全', desc: '各类报纸查阅，数字报刊资源', url: 'https://www.dtdjzx.gov.cn/szlib/newspaper/index.jhtml' },
          ],
        },
        general: {
          title: '综合新闻',
          links: [
            { name: '今日头条', desc: '智能推荐资讯，内容广渗透率高', url: 'https://www.toutiao.com/' },
            { name: '百度新闻', desc: '聚合全网热点，客观呈现资讯', url: 'https://news.baidu.com' },
            { name: '腾讯新闻', desc: '综合资讯平台，独家栏目资源多', url: 'https://news.qq.com' },
            { name: '新浪新闻', desc: '联动微博，实时追踪全网热点', url: 'https://news.sina.com.cn' },
            { name: '搜狐新闻', desc: '老牌新闻门户，个性订阅推资讯', url: 'https://news.sohu.com/' },
            { name: '网易新闻', desc: '有态度资讯，深度报道评论优', url: 'https://news.163.com' },
            { name: '澎湃新闻', desc: '聚焦时政，深度新媒体平台', url: 'https://www.thepaper.cn' },
            { name: '虎嗅网', desc: '商业科技，观点独到分析深', url: 'https://huxiu.com' },
            { name: '36氪', desc: '新商业媒体，解读创投与互联', url: 'https://36kr.com' },
            { name: '爱范儿', desc: '聚焦未来科技，探索趋势', url: 'https://www.ifanr.com' },
            { name: 'BBC NEWS', desc: '英国媒体，全球视野国际新闻', url: 'https://bbc.com' },
            { name: 'CNN', desc: '美国媒体，24小时全球新闻直播', url: 'https://cnn.com' },
            { name: 'TheVerge', desc: '美国科技媒体，评测科技动态', url: 'https://theverge.com' },
            { name: 'TechCrunch', desc: '美国科技博客，聚焦全球创投', url: 'https://techcrunch.com' },
            { name: '联合早报', desc: '新加坡华文媒体，亚洲视角资讯', url: 'https://www.zaobao.com.sg' },
          ],
        },
        standard: {
          title: '国家标准',
          links: [
            { name: '中国国家标准化管理委员会', desc: '国家标准化管理机构，标准化政策法规发布', url: 'http://www.sac.gov.cn/' },
            { name: '全国标准信息公共服务平台', desc: '国家标准官方查询发布平台', url: 'https://std.samr.gov.cn/' },
            { name: '国家标准全文公开', desc: '国家标准全文公开系统', url: 'https://openstd.samr.gov.cn/bzgk/gb' },
            { name: '食品伙伴网', desc: '食品行业标准，资料下载查询', url: 'http://down.foodmate.net/' },
            { name: '中国标准网', desc: '国家标准查阅，行业规范下载', url: 'https://www.china-standard.com/' },
            { name: '标准下载网', desc: '各类标准下载，格式齐全易用', url: 'http://www.bzmfxz.com/' },
            { name: '标准网', desc: '标准文献检索，多行业规范汇总', url: 'https://www.biaozhun.org/' },
          ],
        },
      },
    },
    study: {
      // 学习网站
      title: '学习网站',
      icon: 'study',
      subs: {
        tools: {
          title: '笔记工具',
          links: [
            { name: '印象笔记', desc: '老牌笔记，多端同步', url: 'https://www.yinxiang.com' },
            { name: '有道云笔记', desc: '轻量级，支持Markdown', url: 'https://note.youdao.com' },
            { name: '幕布', desc: '大纲笔记，一键转思维导图', url: 'https://mubu.com/' },
            { name: '语雀', desc: '阿里文档，知识库与协作', url: 'https://www.yuque.com/' },
            { name: '石墨文档', desc: '在线文档协作，团队办公', url: 'https://shimo.im/' },
            { name: '飞书文档', desc: '飞书生态，在线协作文档', url: 'https://www.feishu.cn/doc/' },
            { name: '腾讯文档', desc: '腾讯系文档，轻量化协作编辑', url: 'https://docs.qq.com/' },
            { name: '思源笔记', desc: '开源双链，本地云端双存储', url: 'https://b3log.org/siyuan/' },
            { name: '为知笔记', desc: '团队协作，知识管理', url: 'https://www.wiz.cn' },
            { name: 'OneNote', desc: '微软笔记，Office生态适配', url: 'https://www.onenote.com/' },
            { name: 'Notion', desc: '全能笔记，数据库与文档一体', url: 'https://www.notion.so/' },
            { name: 'Evernote', desc: '全球知名笔记，跨平台同步', url: 'https://evernote.com/' },
            { name: 'Roam Research', desc: '非线性笔记，网状管理', url: 'https://roamresearch.com/' },
            { name: 'Logseq', desc: '开源双链笔记，每日任务管理', url: 'https://logseq.com/' },
            { name: 'XMind', desc: '专业思维导图，逻辑梳理工具', url: 'https://www.xmind.cn/' },
            { name: 'ProcessOn', desc: '在线流程图，思维导图协作', url: 'https://www.processon.com/' },
            { name: 'Obsidian', desc: '本地知识库，双向链接', url: 'https://obsidian.md/' },
            { name: 'Typora', desc: 'Markdown编辑器，写作专注', url: 'https://typora.io/' },
          ],
        },
        career: {
          title: '职业教育',
          links: [
            { name: '粉笔题库', desc: '公考教资刷题，解析考点齐全', url: 'https://www.fenbi.com/spa/tiku/' },
            { name: '党的知识学习词典', desc: '党建知识查询，权威学习工具', url: 'https://www.12371.cn/special/cidian/' },
            { name: '国家法规数据库', desc: '官方法规查询，条文检索权威', url: 'https://flk.npc.gov.cn/' },
            { name: '微信读书', desc: '腾讯系阅读，海量电子书库', url: 'https://weread.qq.com/' },
            { name: '识典古籍', desc: '古籍文献查阅，数字典藏资源', url: 'https://www.shidianguji.com/' },
            { name: '古诗文网', desc: '古诗词赏析，原文译文注解全', url: 'https://www.gushiwen.cn/' },
            { name: '全历史', desc: '历史古籍查阅，时空轴可视化', url: 'https://www.allhistory.com/' },
            { name: '学信网', desc: '学籍学历查询，校招就业对接', url: 'https://www.chsi.com.cn/' },
            { name: 'NTCE考试网', desc: '中小学教师资格考试官方平台', url: 'https://ntce.neea.edu.cn' },
            { name: '中国人事考试网', desc: '全国职业资格考试官方平台', url: 'http://www.cpta.com.cn' },
            { name: '中国研究生招生信息网', desc: '考研官方报名调剂核心平台', url: 'https://yz.chsi.com.cn/' },
            { name: '中国考研网', desc: '考研资讯院校专业查询平台', url: 'https://www.chinakaoyan.com/' },
            { name: '中国知网', desc: '学术论文期刊文献检索下载', url: 'https://www.cnki.net/' },
            { name: '万方数据知识服务平台', desc: '学术文献学位论文资源库', url: 'https://www.wanfangdata.com.cn/' },
            { name: '维普网', desc: '中文科技期刊论文检索平台', url: 'https://www.cqvip.com/' },
            { name: '爱学术', desc: '免费论文文献查重工具', url: 'https://www.ixueshu.com/' },
            { name: '粉笔教育', desc: '公考教资备考，题库课程齐全', url: 'https://www.fenbi.com/' },
            { name: '中公教育', desc: '公职考试培训，招考资讯核心', url: 'https://www.offcn.com/' },
            { name: '华图教育', desc: '公考编制备考，直播课程为主', url: 'https://www.huatu.com/' },
            { name: '驾考宝典', desc: '驾照考试备考，题库模拟核心', url: 'https://www.jiakaobaodian.com/' },
            { name: '驾校一点通', desc: '驾照考试备考，题库模拟核心', url: 'https://www.jxedt.com/' },
            { name: '环球网校', desc: '多品类证书备考，课程齐全', url: 'https://www.hqwx.com/' },
            { name: '正保会计网校', desc: '财会证书备考，题库课程专业', url: 'https://www.chinaacc.com/' },
            { name: '嗨学网', desc: '建工证书备考，实操讲解核心', url: 'https://www.haixue.com/' },
            { name: '233网校', desc: '全品类证书题库，免费刷题', url: 'https://www.233.com/' },
            { name: 'Z-Library', desc: '全球最大电子书库，免费学术资源', url: 'https://z-lib.org/' },
          ],
        },
        education: {
          title: '中小学教育',
          links: [
            { name: '智慧教育公共服务平台', desc: '教育部主办，世界规模最大的教育资源中心', url: 'https://www.smartedu.cn/' },
            { name: '中小学智慧教育平台', desc: '国家中小学官方在线教育资源', url: 'https://basic.smartedu.cn/' },
            { name: '中国教育在线', desc: '综合教育资讯升学报考服务', url: 'https://www.eol.cn/' },
            { name: '第一试卷网', desc: '中小学各年级试卷免费下载', url: 'https://www.shijuan1.com/' },
            { name: '菁优网', desc: '中小学题库习题解析辅导', url: 'https://www.jyeoo.com/' },
            { name: '学科网', desc: 'K12教案试卷课件资源库', url: 'https://www.zxxk.com/' },
            { name: 'Desmos | 图形计算器', desc: '在线函数图形计算器无需安装', url: 'https://www.desmos.com/calculator/' },
            { name: '在线fooplot数学函数绘图器工具', desc: '简易数学函数图像在线绘制', url: 'http://tools.jb51.net/aideddesign/fooplot/' },
            { name: '函数图像|在线函数图像生成', desc: '国内数学函数作图工具网站', url: 'https://zuotu.91maths.com/' },
            { name: 'GeoGebra 免费数学软件', desc: '几何代数函数动态数学工具', url: 'https://www.geogebra.org/' },
          ],
        },
        code: {
          title: '编程学习',
          links: [
            { name: 'MDN 官网 ', desc: 'Web 开发权威文档，多语言教程', url: 'https://developer.mozilla.org/zh-CN/' },
            { name: 'W3School Online', desc: '全球 Web 开发学习，多语言教学', url: 'https://www.w3schools.com/' },
            { name: 'W3School 在线教程', desc: '国内 Web 技术教程，免费易上手', url: 'https://www.w3school.com.cn/' },
            { name: '菜鸟教程', desc: '全栈开发教程，实例驱动易学习', url: 'https://www.runoob.com/' },
            { name: 'GitHub', desc: '全球开源代码库，开发协作平台', url: 'https://github.com/' },
            { name: 'LeetCode', desc: '编程刷题平台，算法面试备考', url: 'https://leetcode.cn/' },
            { name: 'Stack Overflow', desc: '海外编程问答，开发者解决方案', url: 'https://stackoverflow.com/' },
            { name: '掘金', desc: '开发者社区，技术文章与实战分享', url: 'https://juejin.cn/' },
            { name: '菜鸟工具', desc: '开发实用工具，格式转换代码调试', url: 'https://c.runoob.com/' },
            { name: 'CSS Tricks', desc: 'CSS技巧与代码片段', url: 'https://css-tricks.com' },
          ],
        },
      },
    },
    job: {
      // 就业信息
      title: '就业信息',
      icon: 'job',
      subs: {
        apply: {
          title: '考试招聘',
          links: [
            { name: '国家公务员局1', desc: '国考官方平台，招考公告发布（录用公务员专题）', url: 'http://bm.scs.gov.cn/pp/gkweb/core/web/ui/business/home/gkhome.html' },
            { name: '国家公务员局2', desc: '国考官方平台，招考公告发布（公开遴选和公开选调公务员专题）', url: 'http://subb.scs.gov.cn/pp/gkweb/core/web/ui/business/home/lxhome.html' },
            { name: '山东公务员考试网', desc: '山东公务员招考，报名查分入口', url: 'https://gwy.sdrsks.org.cn/skbm2026.html' },
            { name: '公考雷达', desc: '公考招聘资讯，职位实时汇总', url: 'https://www.gongkaoleida.com/' },
            { name: '事业单位考试招聘网', desc: '事业单位招考，题库资讯齐全', url: 'https://www.shiyebian.net/' },
            { name: '山东高校毕业生就业信息网', desc: '山东高校就业，招聘对接服务', url: 'https://www.sdgxbys.cn/' },
            { name: '山东人事考试信息网', desc: '山东人事考试，报名查分入口', url: 'https://hrss.shandong.gov.cn/rsks/' },
            { name: '应届生求职网', desc: '校招核心平台，应届生岗位汇总', url: 'https://www.yingjiesheng.com/' },
            { name: '全国征兵网', desc: '征兵报名官方，政策资讯查询', url: 'https://www.gfbzb.gov.cn/' },
            { name: 'BOSS直聘校园版', desc: '校招专属平台，应届生直聊HR', url: 'https://xiaoyuan.zhipin.com/' },
            { name: '智联校园', desc: '校园招聘平台，实习校招对接', url: 'https://xiaoyuan.zhaopin.com/' },
          ],
        },
        recruit: {
          title: '社会招聘',
          links: [
            { name: 'BOSS直聘', desc: '职场招聘平台，直聊企业HR', url: 'https://www.zhipin.com' },
            { name: '智联招聘', desc: '综合招聘平台，求职资讯丰富', url: 'https://www.zhaopin.com' },
            { name: '齐鲁人才网', desc: '山东本地招聘，直播带岗核心', url: 'https://www.qlrc.com' },
            { name: '前程无忧', desc: '老牌招聘平台，名企岗位云集', url: 'https://www.51job.com' },
            { name: '猎聘网', desc: '中高端招聘，精英人才对接', url: 'https://www.liepin.com' },
            { name: '中国公共招聘网', desc: '国家公共就业，官方招聘平台', url: 'http://job.mohrss.gov.cn/' },
            { name: '中华英才网', desc: '综合求职平台，名企岗位推荐', url: 'https://www.chinahr.com' },
            { name: '58同城', desc: '综合招聘平台，蓝领岗位居多', url: 'https://quanguo.58.com/' },
            { name: '兼职猫', desc: '兼职招聘平台，短期岗位丰富', url: 'https://www.jianzimao.com/' },
            { name: '拉勾网', desc: '互联网招聘，技术岗位核心', url: 'https://www.lagou.com/' },
            { name: '脉脉', desc: '职场社交平台，内推机会丰富', url: 'https://maimai.cn/' },
          ],
        },
        resume: {
          title: '简历工具',
          links: [
            { name: '个人简历网', desc: '海量免费简历模板', url: 'https://www.gerenjianli.com' },
            { name: '简历模版_站长素材', desc: '免费简历模板下载', url: 'https://sc.chinaz.com/jianli/' },
            { name: '简历模板_花瓣', desc: '免费简历模板下载', url: 'https://huaban.com/search?q=简历' },
            { name: '超级简历', desc: '专业简历制作，模板精美', url: 'https://www.wondercv.com' },
            { name: 'Canva简历', desc: '在线设计工具，简历模板丰富', url: 'https://www.canva.com/resumes/' },
            { name: 'Enhancv', desc: '个性化简历制作，内容优化建议', url: 'https://enhancv.com/' },
            { name: 'VisualCV', desc: '在线简历制作，国际化模板', url: 'https://www.visualcv.com/' },
            { name: '极简简历', desc: '在线简历制作，简洁大气', url: 'https://www.polebrief.com/' },
          ],
        },
        assessment: {
          title: '职业测评',
          links: [
            { name: 'MBTI测试', desc: '人格类型测试', url: 'https://www.16personalities.com' },
            { name: '智联测评', desc: '专业职业测评', url: 'https://ceping.zhaopin.com' },
            { name: '霍兰德测试', desc: '职业兴趣测评', url: 'https://www.123test.com/holland-code-test/' },
            { name: 'DISC测试', desc: '行为风格测试', url: 'https://www.123test.com/disc-personality-test/' },
            { name: '九型人格测试', desc: '性格类型测试', url: 'https://www.123test.com/enneagram-personality-test/' },
          ],
        },
      },
    },
    note: {
      // 我的笔记
      title: '我的笔记',
      icon: 'note',
      subs: {
        fe: {
          title: '前端笔记',
          links: [],
        },
        python: {
          title: 'Python笔记',
          links: [],
        },
      },
    },
  }

  // ---------- 生成所有section的HTML ----------
  function buildAllSections() {
    // ----------手动添加笔记名称----------
    const FENameArr = [
      { name: '0.1.README', check: '✅️' },
      { name: '0.2.Software', check: '✅️' },
      { name: '1.1.HTML', check: '✅️' },
      { name: '1.2.CSS', check: '✅️' },
      { name: '1.3.JavaScript基础', check: '✅️' },
      { name: '1.4.JavaScript进阶', check: '🟡' },
      { name: '1.5.JavaScript WebAPIs', check: '✅️' },
      { name: '1.6.ES6', check: '🟡' },
      { name: '1.7.tools', check: '✅️' },
      { name: '2.1.CSS预处理器', check: '✅️' },
      { name: '2.2.JavaScript库', check: '🟡' },
      { name: '2.3.CSS框架', check: '🟡' },
      { name: '2.4.字体图标库', check: '✅️' },
      { name: '2.5.正则表达式', check: '✅️' },
      { name: '3.1.Nodejs', check: '✅️' },
      { name: '3.2.Ajax', check: '✅️' },
      { name: '3.3.Git', check: '✅️' },
      { name: '3.4.构建工具', check: '✅️' },
      { name: '3.5.TypeScript', check: '❌' },
      { name: '4.1.Vue', check: '😎' },
      { name: '4.2.React', check: '❌' },
      { name: '4.3.Angular', check: '❌' },
      { name: '5.1.计算机组成原理', check: '❌' },
      { name: '5.2.数据结构与算法', check: '❌' },
      { name: '5.3.操作系统', check: '❌' },
      { name: '5.4.计算机网络', check: '❌' },
    ]
    const PYNameArr = [
      { name: '01.README', check: '✅️' },
      { name: '11.python基础', check: '🟡' },
      { name: '12.python进阶', check: '🟡' },
      { name: '13.python后端开发', check: '❌' },
      { name: '14.python数据分析', check: '❌' },
      { name: '15.python爬虫', check: '❌' },
      { name: '16.python机器学习', check: '❌' },
      { name: '17.python深度学习', check: '❌' },
      { name: '08.python自然语言处理', check: '❌' },
      { name: '09.python数据可视化', check: '❌' },
      { name: '10.python自动化测试', check: '❌' },
      { name: '11.python运维', check: '❌' },
      { name: '12.python人工智能', check: '❌' },
      { name: '13.python区块链', check: '❌' },
      { name: '14.python物联网', check: '❌' },
      { name: '15.python云计算', check: '❌' },
      { name: '16.python大数据', check: '❌' },
      { name: '17.python游戏开发', check: '❌' },
      { name: '18.python移动开发', check: '❌' },
      { name: '19.python嵌入式开发', check: '❌' },
      { name: '20.python其他', check: '❌' },
    ]
    websiteData.note.subs.fe.links.push(...FENameArr.map((item) => ({ name: `${item.name}`, desc: `${item.name} ${item.check}`, url: `./notes/FE/${item.name}.md` })))
    websiteData.note.subs.python.links.push(...PYNameArr.map((item) => ({ name: `${item.name}`, desc: `${item.name} ${item.check}`, url: `./notes/python/${item.name}.md` })))
    // ----------添加完毕----------

    let htmlString = ''
    const sectionOrder = ['home', 'tools', 'work', 'fun', 'news', 'study', 'job', 'note']

    sectionOrder.forEach((sectionId) => {
      const section = websiteData[sectionId]
      if (!section) return

      // 构建子分类区块
      let subSectionsHtml = ''
      for (const [subKey, subData] of Object.entries(section.subs)) {
        const cardsHtml = subData.links
          .map(
            (link) => `
                                              <a href="${link.url}" target="_blank" class="link-card ${sectionId}">
                                                <h3>${link.name}</h3>
                                                <p>${link.desc}</p>
                                              </a>
                                            `,
          )
          .join('')

        subSectionsHtml += `
                                              <h2 class="sub-category ${sectionId}">${subData.title}</h2>
                                              <div class="link-grid" id="${sectionId}-${subKey}">${cardsHtml}</div>
                                            `
      }

      // 整个section (默认激活home)
      htmlString += `
                                            <section id="${sectionId}" class="content-section ${sectionId === 'home' ? 'active' : ''}">
                                              <div class="content-header">
                                                <h1><i class="icon icon-${section.icon}"></i>${section.title}</h1>
                                              </div>
                                              ${subSectionsHtml}
                                            </section>
                                          `
    })

    document.getElementById('dynamic-content').innerHTML = htmlString
  }

  // ---------- 获取网页背景图片
  // function getBackgroundImage() {
  //   const xhr = new XMLHttpRequest()
  //   xhr.open('GET', 'https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json', true)
  //   xhr.responseType = 'json'
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       // console.log(xhr.response)
  //       const randomIndex = Math.floor(Math.random() * xhr.response.data.length)
  //       const imageUrl = 'https://www.bing.com/' + xhr.response.data[randomIndex].url
  //       console.log(imageUrl)
  //       document.body.style.backgroundImage = `url(${imageUrl})`
  //     } else {
  //       console.error('背景图片请求失败')
  //     }
  //   }
  //   xhr.onerror = () => console.error('背景图片网络错误')
  //   xhr.send()
  // }

  // ---------- 日期时间 ----------
  function updateDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const weekdays = ['日', '一', '二', '三', '四', '五', '六']
    const weekday = weekdays[now.getDay()]
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    document.getElementById('date').innerHTML = `<i>${year}年${month}月${day}日</i> 星期${weekday}`
    document.getElementById('time').innerHTML = `<i>${hours}:${minutes}:${seconds}</i>`
  }

  // ---------- 天气 ----------
  function fetchWeather() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.seniverse.com/v3/weather/daily.json?key=SCYrvkytJze9qyzOh&location=rizhao&language=zh-Hans&unit=c', true)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const daily = xhr.response.results[0].daily[0]
        document.getElementById('weatherIcon').textContent = daily.text_day
        document.getElementById('weatherTemp').textContent = `${daily.low}~${daily.high}°C`
        document.getElementById('weatherCity').textContent = '日照'
      } else console.error('天气请求失败')
    }
    xhr.onerror = () => console.error('天气网络错误')
    xhr.send()
  }

  // ---------- 导航切换 ----------
  function initNav() {
    const navLinks = document.querySelectorAll('.sidebar nav a')

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        navLinks.forEach((l) => l.classList.remove('active'))
        link.classList.add('active')

        const targetId = link.getAttribute('data-target') // 现在是 home, tools 等语义化ID
        document.querySelectorAll('.content-section').forEach((s) => s.classList.remove('active'))
        document.getElementById(targetId)?.classList.add('active')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    })
  }

  // ---------- 启动 ----------
  window.addEventListener('DOMContentLoaded', () => {
    buildAllSections()
    // getBackgroundImage()
    updateDateTime()
    setInterval(updateDateTime, 1000)
    fetchWeather()
    initNav()
  })
})()

// 蕾丝猫https://www.lesmao.co/
// https://www.2c3b6.com/
// https://www.271nn.com/
// https://www.740oo.com/
// https://www.471mm.com/
// https://efef4.com/
// https://www.242tt.com/play/index41862-0-0.html
