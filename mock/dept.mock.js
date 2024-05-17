import { defineMock } from "./base";

export default defineMock([
  {
    url: "dept/options",
    method: ["GET"],
    body: {
      code: 200,
      data: [
        {
          value: 1,
          label: "国文馆",
          children: [
            {
              value: 2,
              label: "稷下学宫",
            },
            {
              value: 3,
              label: "唐诗阁",
              children: [
                {
                  value: 6,
                  label: "田园派",
                },
                {
                  value: 7,
                  label: "边塞派",
                },
              ]
            },
            {
              value: 4,
              label: "宋词阁",
              children: [
                {
                  value: 8,
                  label: "豪放派",
                },
                {
                  value: 9,
                  label: "婉约派",
                },
              ]
            },
            {
              value: 5,
              label: "国医堂",
            },
          ],
        },
      ],
      msg: "Success",
    },
  },

  {
    url: "dept",
    method: ["GET"],
    body: {
      code: 200,
      data: [
        {
          id: 1,
          parentId: 0,
          name: "国文馆",
          sort: 1,
          status: 1,
          children: [
            {
              id: 2,
              parentId: 1,
              name: "稷下学宫",
              sort: 1,
              status: 1,
              children: [],
              createTime: "2024-04-15 09:30:45",
              updateTime: "2024-05-01 15:45:30",
            },
            {
              id: 3,
              parentId: 1,
              name: "唐诗阁",
              sort: 1,
              status: 1,
              children: [
                {
                  id: 6,
                  parentId: 3,
                  name: "田园派",
                  sort: 1,
                  status: 1,
                  children: [],
                  createTime: "2024-04-15 09:30:45",
                  updateTime: "2024-05-01 15:45:30",
                },
                {
                  id: 7,
                  parentId: 3,
                  name: "边塞派",
                  sort: 1,
                  status: 1,
                  children: [],
                  createTime: "2024-04-15 09:30:45",
                  updateTime: "2024-05-01 15:45:30",
                },
              ],
              createTime: "2024-04-15 09:30:45",
              updateTime: "2024-05-01 15:45:30",
            },
            {
              id: 4,
              parentId: 1,
              name: "宋词阁",
              sort: 1,
              status: 1,
              children: [
                {
                  id: 8,
                  parentId: 4,
                  name: "豪放派",
                  sort: 1,
                  status: 1,
                  children: [],
                  createTime: "2024-04-15 09:30:45",
                  updateTime: "2024-05-01 15:45:30",
                },
                {
                  id: 9,
                  parentId: 4,
                  name: "婉约派",
                  sort: 1,
                  status: 1,
                  children: [],
                  createTime: "2024-04-15 09:30:45",
                  updateTime: "2024-05-01 15:45:30",
                },
              ],
              createTime: "2024-04-15 09:30:45",
              updateTime: "2024-05-01 15:45:30",
            },
            {
              id: 5,
              parentId: 1,
              name: "国医堂",
              sort: 1,
              status: 1,
              children: [],
              createTime: "2024-04-15 09:30:45",
              updateTime: "2024-05-01 15:45:30",
            },
          ],
          createTime: "2024-04-15 09:30:45",
          updateTime: "2024-05-01 15:45:30",
        },
      ],
      msg: "Success",
    },
  },

  // 新增部门
  {
    url: "dept",
    method: ["POST"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "新增部门" + body.name + "成功",
      };
    },
  },

  // 获取部门表单数据
  {
    url: "dept/:id/form",
    method: ["GET"],
    body: ({ params }) => {
      return {
        code: 200,
        data: deptMap[params.id],
        msg: "Success",
      };
    },
  },

  // 修改部门
  {
    url: "dept/:id",
    method: ["PUT"],
    body({ body }) {
      return {
        code: 200,
        data: null,
        msg: "修改部门" + body.name + "成功",
      };
    },
  },

  // 删除部门
  {
    url: "dept/:id",
    method: ["DELETE"],
    body({ params }) {
      return {
        code: 200,
        data: null,
        msg: "删除部门" + params.id + "成功",
      };
    },
  },
]);

// 部门映射表数据
const deptMap = {
  1: {
    id: 1,
    name: "古文馆",
    parentId: 0,
    status: 1,
    sort: 1,
  },
  2: {
    id: 2,
    name: "稷下学宫",
    parentId: 1,
    status: 1,
    sort: 1,
  },
  3: {
    id: 3,
    name: "唐诗阁",
    parentId: 1,
    status: 1,
    sort: 1,
  },
  4: {
    id: 4,
    name: "宋词阁",
    parentId: 1,
    status: 1,
    sort: 1,
  },
  5: {
    id: 5,
    name: "国医堂",
    parentId: 1,
    status: 1,
    sort: 1,
  },
  6: {
    id: 6,
    name: "田园派",
    parentId: 3,
    status: 1,
    sort: 1,
  },
  7: {
    id: 7,
    name: "边塞派",
    parentId: 3,
    status: 1,
    sort: 1,
  },
  8: {
    id: 8,
    name: "豪放派",
    parentId: 5,
    status: 1,
    sort: 1,
  },
  9: {
    id: 9,
    name: "婉约派",
    parentId: 4,
    status: 1,
    sort: 1,
  },
};
