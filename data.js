// data.js 测试极简版
const suits = [
  { 
    id: "001", 
    name: "绒兔心语", 
    shortName: "兔兔",
    event: "限时五星", 
    period: "复刻2次", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
        ] 
    },
    { 
    id: "002", 
    name: "酣竹滚滚", 
    shortName: "熊熊",
    event: "限时五星", 
    period: "复刻2次", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "003", 
    name: "透明序曲", 
    shortName: "白樱",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "004", 
    name: "封印解除", 
    shortName: "红樱",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "005", 
    name: "水晶", 
    shortName: "水晶",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "006", 
    name: "帝政", 
    shortName: "帝政",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "007", 
    name: "库洛米", 
    shortName: "米",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    },
    { 
    id: "008", 
    name: "大耳狗", 
    shortName: "狗",
    event: "限时五星", 
    period: "未复刻", 
    parts: [
        { id: "hair",   name: "头" },
        { id: "dress",  name: "裙" },
        { id: "waitao",  name: "外套" },
        { id: "shangyi",  name: "上衣" },
        { id: "xiazhuang",  name: "下装" },
        { id: "wazi",  name: "袜子" },
        { id: "xiezi",  name: "鞋子" },
        { id: "maozi",  name: "帽子" },
        { id: "fashi",  name: "发饰" },
        { id: "ershi",  name: "耳饰" },
        { id: "jingshi",  name: "颈饰" },
        { id: "shouchi",  name: "手持物" }
    ] 
    }
];
