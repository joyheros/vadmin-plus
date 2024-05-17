import { defineMock } from "./base";

export default defineMock([
  {
    url: "roles/options",
    method: ["GET"],
    body: {
      code: 200,
      data: [
        {
          value: 1,
          label: "管理员",
        },
        {
          value: 2,
          label: "馆长",
        },
        {
          value: 3,
          label: "博士",
        },
        {
          value: 4,
          label: "太学生",
        },
        {
          value: 5,
          label: "游客",
        },
      ],
      msg: "Success",
    },
  },

  {
    url: "roles/page",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            name: "管理员",
            code: "admin",
            status: 1,
            sort: 2,
            createTime: "2024-04-15 09:30:45",
            updateTime: "2024-05-01 15:45:30",
          },
          {
            id: 2,
            name: "馆长",
            code: "curator",
            status: 1,
            sort: 3,
            createTime: "2024-04-15 09:30:45",
            updateTime: "2024-05-01 15:45:30",
          },
          {
            id: 3,
            name: "博士",
            code: "professor",
            status: 1,
            sort: 2,
            createTime: "2024-04-15 09:30:45",
            updateTime: "2024-05-01 15:45:30",
          },
          {
            id: 4,
            name: "太学生",
            code: "scholar",
            status: 1,
            sort: 2,
            createTime: "2024-04-15 09:30:45",
            updateTime: "2024-05-01 15:45:30",
          },
          {
            id: 5,
            name: "游客",
            code: "guest",
            status: 1,
            sort: 2,
            createTime: "2024-04-15 09:30:45",
            updateTime: "2024-05-01 15:45:30",
          }
        ],
        total: 5,
      },
      msg: "Success",
    },
  },

  // 新增角色
  {
    url: "roles",
    method: ["POST"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "新增角色" + body.name + "成功",
      };
    },
  },

  // 获取角色表单数据
  {
    url: "roles/:id/form",
    method: ["GET"],
    body: ({ params }) => {
      return {
        code: 200,
        data: roleMap[params.id],
        msg: "Success",
      };
    },
  },
  // 修改角色
  {
    url: "roles/:id",
    method: ["PUT"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "修改角色" + body.name + "成功",
      };
    },
  },

  // 删除角色
  {
    url: "roles/:id",
    method: ["DELETE"],
    body({ params }) {
      return {
        code: 200,
        data: null,
        msg: "删除角色" + params.id + "成功",
      };
    },
  },
  // 获取角色拥有的菜单ID
  {
    url: "roles/:id/menuIds",
    method: ["GET"],
    body: ({ params }) => {
      return {
        code: 200,
        data: [
          1, 2, 31, 32, 33, 88, 3, 70, 71, 72, 4, 73, 75, 74, 5, 76, 77, 78, 6,
          79, 81, 84, 85, 86, 87, 40, 41, 26, 30, 20, 21, 22, 23, 24, 89, 90,
          91, 36, 37, 38, 39, 93, 94, 95, 97, 102, 89, 90, 91, 93, 94, 95, 97,
          102, 103, 104,
        ],
        msg: "Success",
      };
    },
  },
  // 保存角色菜单
  {
    url: "roles/:id/menus",
    method: ["PUT"],
    body: {
      code: 200,
      data: null,
      msg: "Success",
    },
  },
]);

// 角色映射表数据
const roleMap = {
  1: {
    id: 1,
    name: "管理员",
    code: "admin",
    status: 1,
    sort: 2,
    createTime: "2024-04-15 09:30:45",
    updateTime: "2024-05-01 15:45:30",
  },
  2: {
    id: 2,
    name: "馆长",
    code: "curator",
    status: 1,
    sort: 3,
    createTime: "2024-04-15 09:30:45",
    updateTime: "2024-05-01 15:45:30",
  },
  3: {
    id: 3,
    name: "博士",
    code: "professor",
    status: 1,
    sort: 2,
    createTime: "2024-04-15 09:30:45",
    updateTime: "2024-05-01 15:45:30",
  },
  4: {
    id: 4,
    name: "太学生",
    code: "scholar",
    status: 1,
    sort: 2,
    createTime: "2024-04-15 09:30:45",
    updateTime: "2024-05-01 15:45:30",
  },
  5: {
    id: 5,
    name: "游客",
    code: "guest",
    status: 1,
    sort: 2,
    createTime: "2024-04-15 09:30:45",
    updateTime: "2024-05-01 15:45:30",
  },
};
