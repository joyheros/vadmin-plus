import { defineMock } from "./base";

export default defineMock([
  {
    url: "notices",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            key: "1",
            name: "通知",
            list: [
              {
                avatar: "./assets/images/cool.png",
                title: "李白发表新诗《将进酒》",
                datetime: "800年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "高适发表新诗《燕歌行》",
                datetime: "800年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "王维发表新诗《山居秋暝》",
                datetime: "800年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "苏轼发表新词《定风波·莫听穿林打叶声》",
                datetime: "500年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "岳飞发表新词《满江红·怒发冲冠》",
                datetime: "500年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "辛弃疾发表新词《青玉案·元夕》",
                datetime: "500年前",
                description: "",
                type: "1"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "李清照发表新词《声声慢·寻寻觅觅》",
                datetime: "500年前",
                description: "",
                type: "1"
              },
            ]
          },
          {
            key: "2",
            name: "消息",
            list: [
              {
                avatar: "./assets/images/cool.png",
                title: "孟子 回复了你",
                description: "富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。",
                datetime: "千年前",
                status: "info",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "王勃 评论了你",
                description: "老当益壮，宁移白首之心，穷且益坚，不坠青云之志。",
                datetime: "800年前",
                status: "info",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "李白 回复了你",
                description: "大鹏一日同风起，扶摇直上九万里。",
                datetime: "800年前",
                status: "info",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "李白 评论了你",
                description: "弃我去者，昨日之日不可留；乱我心者，今日之日多烦忧。长风万里送秋雁，对此可以酣高楼。",
                datetime: "800年前",
                status: "info",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "范仲淹 回复了你",
                description: "先天下之忧而忧，后天下之乐而乐。",
                datetime: "500年前",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "岳飞 回复了你",
                description: "三十功名尘与土，八千里路云和月。莫等闲、白了少年头，空悲切。",
                datetime: "500年前",
                status: "warning",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "苏轼 回复了你",
                description: "莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。",
                datetime: "500年前",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "苏轼 回复了你",
                description: "一点浩然气，千里快哉风。",
                datetime: "500年前",
                type: "2"
              },
              {
                avatar: "./assets/images/cool.png",
                title: "辛弃疾 评论了你",
                description: "众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。",
                datetime: "500年前",
                type: "2"
              },
            ]
          },
          {
            key: "3",
            name: "任务",
            list: [
              {
                avatar: "",
                title: "黄帝内经",
                description: "其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄劳作，故能形与神俱",
                datetime: "",
                extra: "实践中",
                status: "info",
                type: "3"
              },
              {
                avatar: "",
                title: "周易",
                description: "天行健，君子以自强不息，地势坤，君子以厚德载物",
                datetime: "",
                extra: "进行中",
                status: "warning",
                type: "3"
              },
              {
                avatar: "",
                title: "孟子",
                description: "道之所在，虽千万人，吾往矣",
                datetime: "",
                extra: "追随中",
                status: "danger",
                type: "3"
              },
              {
                avatar: "",
                title: "张横渠",
                description: "为天地立心，为生民立命，为往圣续绝学，为万世开太平",
                datetime: "",
                extra: "学习中",
                status: "warning",
                type: "3"
              },
              {
                avatar: "",
                title: "王阳明",
                description: "无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物",
                datetime: "",
                extra: "学习中",
                status: "info",
                type: "3"
              }
            ]
          }
        ],
        total: 21,
      },
      msg: "Success",
    },
  }
]);
