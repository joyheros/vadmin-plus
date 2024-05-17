import { defineMock } from "./base";

export default defineMock([
    {
        url: "monitor/operation/page",
        method: ["GET"],
        body: ({ params }) => {
            return {
                code: 200,
                data: [
                    {
                        id: 1,
                        username: "admin",
                        module: "系统管理",
                        summary: "菜单管理-添加菜单",
                        netip: "172.119.18.99",
                        address: "长安未央宫",
                        system: "MacOS",
                        browser: "Safari",
                        status: 1,
                        operateTime: "2024-05-05 15:09:30"
                    },
                    {
                        id: 2,
                        username: "laozi",
                        module: "系统管理",
                        summary: "角色管理-添加角色",
                        netip: "129.29.118.119",
                        address: "秦岭终南山",
                        system: "Linux",
                        browser: "Chrome",
                        status: 1,
                        operateTime: "2024-05-01 09:05:00"
                    },
                    {
                        id: 3,
                        username: "mengzi",
                        module: "系统管理",
                        summary: "用户管理-分页查询",
                        netip: "129.119.18.199",
                        address: "咸阳阿房宫",
                        system: "Windows",
                        browser: "Firefox",
                        status: 2,
                        operateTime: "2024-05-15 09:15:30"
                    },
                ],
                msg: "Success",
            };
        },
    },

    {
        url: "monitor/operation/:ids",
        method: ["DELETE"],
        body({ params }) {
          return {
            code: 200,
            data: null,
            msg: "删除角色" + params.id + "成功",
          };
        },
    },

    {
        url: "monitor/security/page",
        method: ["GET"],
        body: ({ params }) => {
            return {
                code: 200,
                data: [
                    {
                        id: 1,
                        username: "admin",
                        netip: "172.119.18.99",
                        address: "长安未央宫",
                        system: "MacOS",
                        browser: "Safari",
                        loginMode: "账户登录",
                        status: 1,
                        loginTime: "2024-05-05 15:09:30"
                    },
                    {
                        id: 2,
                        username: "laozi",
                        netip: "129.29.118.119",
                        address: "秦岭终南山",
                        system: "Linux",
                        browser: "Chrome",
                        loginMode: "第三方登录",
                        status: 2,
                        loginTime: "2024-05-01 09:05:00"
                    },
                    {
                        id: 3,
                        username: "mengzi",
                        netip: "129.119.18.199",
                        address: "咸阳阿房宫",
                        system: "Windows",
                        browser: "Firefox",
                        loginMode: "扫码登录",
                        status: 1,
                        loginTime: "2024-05-15 09:15:30"
                    },
                ],
                msg: "Success",
            };
        },
    },

    {
        url: "monitor/security/:ids",
        method: ["DELETE"],
        body({ params }) {
          return {
            code: 200,
            data: null,
            msg: "删除角色" + params.id + "成功",
          };
        },
    },

    {
        url: "monitor/syslog/page",
        method: ["GET"],
        body: ({ params }) => {
            return {
                code: 200,
                data: [
                    {
                        id: 1,
                        module: "系统管理",
                        httpAddr: "/menu",
                        httpMethod: "post",
                        netip: "172.119.18.99",
                        address: "长安未央宫",
                        system: "MacOS",
                        browser: "Safari",
                        execTime: "10ms",
                        requestTime: "2024-05-05 15:09:30"
                    },
                    {
                        id: 2,
                        module: "系统管理",
                        httpAddr: "/role",
                        httpMethod: "get",
                        netip: "129.29.118.119",
                        address: "秦岭终南山",
                        system: "Linux",
                        browser: "Chrome",
                        execTime: "20ms",
                        requestTime: "2024-05-01 09:05:00"
                    },
                    {
                        id: 3,
                        module: "系统管理",
                        httpAddr: "/user",
                        httpMethod: "delete",
                        netip: "129.119.18.199",
                        address: "咸阳阿房宫",
                        system: "Windows",
                        browser: "Firefox",
                        execTime: "200ms",
                        requestTime: "2024-05-15 09:15:30"
                    },
                    {
                        id: 4,
                        module: "系统管理",
                        httpAddr: "/role",
                        httpMethod: "update",
                        netip: "129.119.18.199",
                        address: "东海桃花岛",
                        system: "Windows",
                        browser: "Firefox",
                        execTime: "200ms",
                        requestTime: "2024-05-05 15:09:30"
                    },
                    {
                        id: 5,
                        module: "系统管理",
                        httpAddr: "/dept",
                        httpMethod: "post",
                        netip: "129.119.18.199",
                        address: "南海水晶宫",
                        system: "Linux",
                        browser: "Chrome",
                        execTime: "30ms",
                        requestTime: "2024-05-15 09:15:30"
                    },
                ],
                msg: "Success",
            };
        },
    },

    {
        url: "monitor/syslog/:ids",
        method: ["DELETE"],
        body({ params }) {
          return {
            code: 200,
            data: null,
            msg: "删除角色" + params.id + "成功",
          };
        },
    },
]);
