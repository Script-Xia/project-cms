const phoneCode = [
  { code: "+86", value: "中国大陆 +86" },
  { code: "+852", value: "中国香港 +852" },
  { code: "+853", value: "中国澳门 +853" },
  { code: "+886", value: "中国台湾省 +886" },
  { code: "+244", value: "安哥拉	+244" },
  { code: "+93", value: "阿富汗 +93" },
  { code: "+355", value: "阿尔巴尼亚 +355" },
  { code: "+213", value: "阿尔及利亚 +213" },
  { code: "+376", value: "安道尔共和国 +376" },
  { code: "+1264", value: "安圭拉岛 +1264" },
  { code: "+1268", value: "安提瓜和巴布达 +1268" },
  { code: "+54", value: "阿根廷 +54" },
  { code: "+374", value: "亚美尼亚 +374" },
  { code: "+247", value: "阿森松	 +247" },
  { code: "+61", value: "澳大利亚 +61" },
  { code: "+43", value: "奥地利 +43" },
  { code: "+994", value: "阿塞拜疆 +994" },
  { code: "+1242", value: "巴哈马 +1242" },
  { code: "+973", value: "巴林 +973" },
  { code: "+880", value: "孟加拉国 +880" },
  { code: "+1246", value: "巴巴多斯 +1246" },
  { code: "+375", value: "白俄罗斯 +375" },
  { code: "+32", value: "比利时 +32" },
  { code: "+501", value: "伯利兹 +501" },
  { code: "+229", value: "贝宁 +229" },
  { code: "+1441", value: "百慕大群岛 +1441" },
  { code: "+591", value: "玻利维亚 +591" },
  { code: "+267", value: "博茨瓦纳 +267" },
  { code: "+55", value: "巴西 +55" },
  { code: "+673", value: "文莱 +673" },
  { code: "+359", value: "保加利亚 +359" },
  { code: "+226", value: "布基纳法索 +226" },
  { code: "+95", value: "缅甸 +95" },
  { code: "+257", value: "布隆迪 +257" },
  { code: "+237", value: "喀麦隆 +237" },
  { code: "+1", value: "加拿大 +1" },
  { code: "+1345", value: "开曼群岛	 +1345" },
  { code: "+236", value: "中非共和国 +236" },
  { code: "+235", value: "乍得 +235" },
  { code: "+56", value: "智利 +56" },
  { code: "+57", value: "哥伦比亚 +57" },
  { code: "+242", value: "刚果 +242" },
  { code: "+682", value: "库克群岛 +682" },
  { code: "+506", value: "哥斯达黎加 +506" },
  { code: "+53", value: "古巴 +53" },
  { code: "+357", value: "塞浦路斯 +357" },
  { code: "+420", value: "捷克 +420" },
  { code: "+45", value: "丹麦 +45" },
  { code: "+253", value: "吉布提 +253" },
  { code: "+1890", value: "多米尼加共和国 +1890" },
  { code: "+593", value: "厄瓜多尔 +593" },
  { code: "+20", value: "埃及 +20" },
  { code: "+503", value: "萨尔瓦多 +503" },
  { code: "+372", value: "爱沙尼亚 +372" },
  { code: "+251", value: "埃塞俄比亚 +251" },
  { code: "+679", value: "斐济 +679" },
  { code: "+358", value: "芬兰 +358" },
  { code: "+33", value: "法国 +33" },
  { code: "+594", value: "法属圭亚那 +594" },
  { code: "+241", value: "加蓬 +241" },
  { code: "+220", value: "冈比亚 +220" },
  { code: "+995", value: "格鲁吉亚 +995" },
  { code: "+49", value: "德国 +49" },
  { code: "+233", value: "加纳 +233" },
  { code: "+350", value: "直布罗陀 +350" },
  { code: "+30", value: "希腊 +30" },
  { code: "+1809", value: "格林纳达 +1809" },
  { code: "+1671", value: "关岛 +1671" },
  { code: "+502", value: "危地马拉 +502" },
  { code: "+224", value: "几内亚 +224" },
  { code: "+592", value: "圭亚那 +592" },
  { code: "+509", value: "海地 +509" },
  { code: "+504", value: "洪都拉斯 +504" },
  { code: "+36", value: "匈牙利 +36" },
  { code: "+354", value: "冰岛 +354" },
  { code: "+91", value: "印度 +91" },
  { code: "+62", value: "印度尼西亚 +62" },
  { code: "+98", value: "伊朗 +98" },
  { code: "+964", value: "伊拉克 +964" },
  { code: "+353", value: "爱尔兰 +353" },
  { code: "+972", value: "以色列 +972" },
  { code: "+39", value: "意大利 +39" },
  { code: "+225", value: "科特迪瓦	 +225" },
  { code: "+1876", value: "牙买加 +1876" },
  { code: "+81", value: "日本 +81" },
  { code: "+962", value: "约旦 +962" },
  { code: "+855", value: "柬埔寨 +855" },
  { code: "+327", value: "哈萨克斯坦 +327" },
  { code: "+254", value: "肯尼亚 +254" },
  { code: "+82", value: "韩国 +82" },
  { code: "+965", value: "科威特 +965" },
  { code: "+331", value: "吉尔吉斯坦 +331" },
  { code: "+856", value: "老挝 +856" },
  { code: "+371", value: "拉脱维亚 +371" },
  { code: "+961", value: "黎巴嫩 +961" },
  { code: "+266", value: "莱索托 +266" },
  { code: "+231", value: "利比里亚 +231" },
  { code: "+218", value: "利比亚 +218" },
  { code: "+423", value: "列支敦士登 +423" },
  { code: "+370", value: "立陶宛 +370" },
  { code: "+352", value: "卢森堡 +352" },
  { code: "+261", value: "马达加斯加 +261" },
  { code: "+265", value: "马拉维 +265" },
  { code: "+60", value: "马来西亚 +60" },
  { code: "+960", value: "马尔代夫 +960" },
  { code: "+223", value: "马里 +223" },
  { code: "+356", value: "马耳他 +356" },
  { code: "+1670", value: "马里亚那群岛 +1670" },
  { code: "+596", value: "马提尼克	 +596" },
  { code: "+230", value: "毛里求斯 +230" },
  { code: "+52", value: "墨西哥 +52" },
  { code: "+373", value: "摩尔多瓦 +373" },
  { code: "+377", value: "摩纳哥 +377" },
  { code: "+976", value: "蒙古 +976" },
  { code: "+1664", value: "蒙特塞拉特岛 +1664" },
  { code: "+212", value: "摩洛哥 +212" },
  { code: "+258", value: "莫桑比克 +258" },
  { code: "+264", value: "纳米比亚 +264" },
  { code: "+674", value: "瑙鲁 +674" },
  { code: "+977", value: "尼泊尔 +977" },
  { code: "+599", value: "荷属安的列斯	+599" },
  { code: "+31", value: "荷兰 +31" },
  { code: "+64", value: "新西兰 +64" },
  { code: "+505", value: "尼加拉瓜 +505" },
  { code: "+227", value: "尼日尔 +227" },
  { code: "+234", value: "尼日利亚 +234" },
  { code: "+850", value: "朝鲜 +850" },
  { code: "+47", value: "挪威 +47" },
  { code: "+968", value: "阿曼 +968" },
  { code: "+92", value: "巴基斯坦 +92" },
  { code: "+507", value: "巴拿马 +507" },
  { code: "+675", value: "巴布亚新几内亚 +675" },
  { code: "+595", value: "巴拉圭 +595" },
  { code: "+51", value: "秘鲁 +51" },
  { code: "+63", value: "菲律宾 +63" },
  { code: "+48", value: "波兰 +48" },
  { code: "+689", value: "法属玻利尼西亚 +689" },
  { code: "+351", value: "葡萄牙 +351" },
  { code: "+1787", value: "波多黎各 +1787" },
  { code: "+974", value: "卡塔尔 +974" },
  { code: "+262", value: "留尼旺 +262" },
  { code: "+40", value: "罗马尼亚 +40" },
  { code: "+7", value: "俄罗斯 +7" },
  { code: "+1758", value: "圣卢西亚 +1758" },
  { code: "+1784", value: "圣文森特岛 +1784" },
  { code: "+684", value: "东萨摩亚(美) +684" },
  { code: "+685", value: "西萨摩亚	 +685" },
  { code: "+378", value: "圣马力诺 +378" },
  { code: "+239", value: "圣多美和普林西比 +239" },
  { code: "+966", value: "沙特阿拉伯 +966" },
  { code: "+221", value: "塞内加尔 +221" },
  { code: "+248", value: "塞舌尔 +248" },
  { code: "+232", value: "塞拉利昂 +232" },
  { code: "+65", value: "新加坡 +65" },
  { code: "+421", value: "斯洛伐克 +421" },
  { code: "+386", value: "斯洛文尼亚 +386" },
  { code: "+677", value: "所罗门群岛 +677" },
  { code: "+252", value: "索马里 +252" },
  { code: "+27", value: "南非 +27" },
  { code: "+34", value: "西班牙 +34" },
  { code: "+94", value: "斯里兰卡 +94" },
  { code: "+1784", value: "圣文森特 +1784" },
  { code: "+249", value: "苏丹 +249" },
  { code: "+597", value: "苏里南 +597" },
  { code: "+268", value: "斯威士兰 +268" },
  { code: "+46", value: "瑞典 +46" },
  { code: "+41", value: "瑞士 +41" },
  { code: "+963", value: "叙利亚 +963" },
  { code: "+992", value: "塔吉克斯坦 +992" },
  { code: "+255", value: "坦桑尼亚 +255" },
  { code: "+66", value: "泰国 +66" },
  { code: "+228", value: "多哥 +228" },
  { code: "+676", value: "汤加 +676" },
  { code: "+1809", value: "特立尼达和多巴哥 +1809" },
  { code: "+216", value: "突尼斯 +216" },
  { code: "+90", value: "土耳其 +90" },
  { code: "+993", value: "土库曼斯坦 +993" },
  { code: "+256", value: "乌干达 +256" },
  { code: "+380", value: "乌克兰 +380" },
  { code: "+971", value: "阿拉伯联合酋长国 +971" },
  { code: "+44", value: "英国 +44" },
  { code: "+1", value: "美国 +1" },
  { code: "+598", value: "乌拉圭 +598" },
  { code: "+233", value: "乌兹别克斯坦 +233" },
  { code: "+58", value: "委内瑞拉 +58" },
  { code: "+84", value: "越南 +84" },
  { code: "+967", value: "也门 +967" },
  { code: "+381", value: "南斯拉夫 +381" },
  { code: "+263", value: "津巴布韦 +263" },
  { code: "+243", value: "扎伊尔 +243" },
  { code: "+260", value: "赞比亚 +260" }
]

export default phoneCode
