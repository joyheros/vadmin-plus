import { defineMock } from "./base";

export default defineMock([
  {
    url: "users/me",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        userId: 1,
        nickname: "管理员",
        username: "admin",
        email: "admin@mail.com",
        mobile: "13512345678",
        avatar: "@/assets/avatar.png",
        roles: ["admin"],
        perms: [
          "sys:menu:delete",
          "sys:dept:edit",
          "sys:menu:add",
          "sys:user:add",
          "sys:role:edit",
          "sys:dept:delete",
          "sys:user:edit",
          "sys:user:delete",
          "sys:user:reset_pwd",
          "sys:dept:add",
          "sys:role:delete",
          "sys:menu:edit",
          "sys:role:add",
        ],
      },
      msg: "Success",
    },
  },

  {
    url: "users/page",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            username: "admin",
            nickname: "管理员",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "admin@mail.com",
            status: 1,
            deptId: 1,
            deptName: "国文馆",
            roleIds: [1],
            roleName: "管理员",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 2,
            username: "laozi",
            nickname: "太上老君",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "laozi@mail.com",
            status: 1,
            deptId: 1,
            deptName: "国文馆",
            roleIds: [2],
            roleName: "馆长",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 3,
            username: "mengzi",
            nickname: "亚圣",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "mengzi@mail.com",
            status: 1,
            deptId: 2,
            deptName: "稷下学宫",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 4,
            username: "libai",
            nickname: "青莲居士",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "libai@mail.com",
            status: 1,
            deptId: 3,
            deptName: "唐诗阁",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 5,
            username: "sushi",
            nickname: "东坡居士",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "sushi@mail.com",
            status: 1,
            deptId: 4,
            deptName: "宋词阁",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 6,
            username: "sunsimiao",
            nickname: "药王",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "sunsimiao@mail.com",
            status: 1,
            deptId: 5,
            deptName: "国医堂",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 7,
            username: "wangwei",
            nickname: "摩诘居士",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "wangwei@mail.com",
            status: 1,
            deptId: 6,
            deptName: "田园派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 8,
            username: "gaoshi",
            nickname: "高常侍",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "gaoshi@mail.com",
            status: 1,
            deptId: 7,
            deptName: "边塞派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 9,
            username: "wangchangling",
            nickname: "王江宁",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "wangchangling@mail.com",
            status: 1,
            deptId: 7,
            deptName: "边塞派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 10,
            username: "xinqiji",
            nickname: "稼轩",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "xinqiji@mail.com",
            status: 1,
            deptId: 8,
            deptName: "豪放派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 11,
            username: "yuefei",
            nickname: "岳武穆",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "xinqiji@mail.com",
            status: 1,
            deptId: 8,
            deptName: "豪放派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 12,
            username: "liqingzhao",
            nickname: "易安居士",
            mobile: "13512345678",
            gender: 2,
            genderLabel: "淑女",
            avatar: "@/assets/avatar.png",
            email: "liqingzhao@mail.com",
            status: 1,
            deptId: 9,
            deptName: "婉约派",
            roleIds: [3],
            roleName: "博士",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 13,
            username: "songlian",
            nickname: "宋潜溪",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "songlian@mail.com",
            status: 1,
            deptId: 1,
            deptName: "国文馆",
            roleIds: [4],
            roleName: "太学生",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 14,
            username: "yangshi",
            nickname: "程门立雪",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "yangshi@mail.com",
            status: 1,
            deptId: 1,
            deptName: "国文馆",
            roleIds: [4],
            roleName: "太学生",
            createTime: "2024-04-15 09:30:45",
          },
          {
            id: 15,
            username: "sunjing",
            nickname: "悬梁苦读",
            mobile: "13512345678",
            gender: 1,
            genderLabel: "君子",
            avatar: "@/assets/avatar.png",
            email: "sunjing@mail.com",
            status: 1,
            deptId: 1,
            deptName: "国文馆",
            roleIds: [4],
            roleName: "太学生",
            createTime: "2024-04-15 09:30:45",
          },
        ],
        total: 15,
      },
      msg: "Success",
    },
  },

  // 新增用户
  {
    url: "users",
    method: ["POST"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "新增用户" + body.nickname + "成功",
      };
    },
  },

  // 获取用户表单数据
  {
    url: "users/:userId/form",
    method: ["GET"],
    body: ({ params }) => {
      return {
        code: 200,
        data: userMap[params.userId],
        msg: "Success",
      };
    },
  },
  // 修改用户
  {
    url: "users/:userId",
    method: ["PUT"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "修改用户" + body.nickname + "成功",
      };
    },
  },

  // 删除用户
  {
    url: "users/:userId",
    method: ["DELETE"],
    body({ params }) {
      return {
        code: 200,
        data: null,
        msg: "删除用户" + params.id + "成功",
      };
    },
  },

  // 重置密码
  {
    url: "users/:userId/password",
    method: ["PATCH"],
    body({ query }) {
      return {
        code: 200,
        data: null,
        msg: "重置密码成功，新密码为：" + query.password,
      };
    },
  },
]);

// 用户映射表数据
const userMap = {
  1: {
    id: 1,
    username: "admin",
    nickname: "管理员",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "admin@mail.com",
    status: 1,
    deptId: 1,
    roleIds: [1],
  },
  2: {
    id: 2,
    username: "laozi",
    nickname: "太上老君",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "laozi@mail.com",
    status: 1,
    deptId: 1,
    roleIds: [2],
  },
  3: {
    id: 3,
    username: "mengzi",
    nickname: "亚圣",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "mengzi@mail.com",
    status: 1,
    deptId: 2,
    roleIds: [3],
  },
  4: {
    id: 4,
    username: "libai",
    nickname: "青莲居士",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "libai@mail.com",
    status: 1,
    deptId: 3,
    roleIds: [3],
  },
  5: {
    id: 5,
    username: "sushi",
    nickname: "东坡居士",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "sushi@mail.com",
    status: 1,
    deptId: 4,
    roleIds: [3],
  },
  6: {
    id: 6,
    username: "sunsimiao",
    nickname: "药王",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "sunsimiao@mail.com",
    status: 1,
    deptId: 5,
    roleIds: [3],
  },
  7: {
    id: 7,
    username: "wangwei",
    nickname: "摩诘居士",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "wangwei@mail.com",
    status: 1,
    deptId: 6,
    roleIds: [3],
  },
  8: {
    id: 8,
    username: "gaoshi",
    nickname: "高常侍",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "gaoshi@mail.com",
    status: 1,
    deptId: 7,
    roleIds: [3],
  },
  9: {
    id: 9,
    username: "wangchangling",
    nickname: "王江宁",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "wangchangling@mail.com",
    status: 1,
    deptId: 7,
    roleIds: [3],
  },
  10: {
    id: 10,
    username: "xinqiji",
    nickname: "稼轩",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "xinqiji@mail.com",
    status: 1,
    deptId: 8,
    roleIds: [3],
  },
  11: {
    id: 11,
    username: "yuefei",
    nickname: "岳武穆",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "xinqiji@mail.com",
    status: 1,
    deptId: 8,
    roleIds: [3],
  },
  12: {
    id: 12,
    username: "liqingzhao",
    nickname: "易安居士",
    mobile: "13512345678",
    gender: 2,
    avatar: "@/assets/avatar.png",
    email: "liqingzhao@mail.com",
    status: 1,
    deptId: 9,
    roleIds: [3],
  },
  13: {
    id: 13,
    username: "songlian",
    nickname: "宋潜溪",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "songlian@mail.com",
    status: 1,
    deptId: 1,
    roleIds: [4],
  },
  14: {
    id: 14,
    username: "yangshi",
    nickname: "程门立雪",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "yangshi@mail.com",
    status: 1,
    deptId: 1,
    roleIds: [4],
  },
  15: {
    id: 15,
    username: "sunjing",
    nickname: "悬梁苦读",
    mobile: "13512345678",
    gender: 1,
    avatar: "@/assets/avatar.png",
    email: "sunjing@mail.com",
    status: 1,
    deptId: 1,
    roleIds: [4],
  },
};
