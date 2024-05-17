export default {
  route: {
    home: '首页',
    login: '登录',
    redirect: 'Redirect',
    error401: 'Error 401',
    error401: 'Error 403',
    error401: 'Error 404',
    error401: 'Error 500',
    system: '系统管理',
    user: '用户管理',
    role: '角色管理',
    menu: '菜单管理',
    dept: '部门管理',
    monitor: '系统监控',
    security: '安全日志',
    operation: '操作日志',
    syslog: '系统日志',
    document: '系统文档',
    guide: '入门指南',
    apidoc: '接口文档',
    layers: '多级菜单',
    layer1: '菜单一级',
    layer21: '菜单二级-1',
    layer22: '菜单二级-2',
    layer31: '菜单三级-1',
    layer32: '菜单三级-2',
    feature: '常用功能',
    richtext: '富文本编辑器',
    markdown: 'Markdown',
    upload: '文件上传',
    download: '文件下载',
    echart: '地图',
    help: '帮助',
    about: '关于'
  },
  login: {
    username: '用户名',
    password: '密码',
    login: '登 录',
    captchaCode: '验证码',
    capsLock: '大写锁定已打开',
    autoLogin: '自动登录',
    forgot: '忘记密码',
    noAccount: '没有账户？',
    register: '创建账户',
    thirdLogin: '第三方登录',
    message: {
      username: {
        required: '请输入用户名'
      },
      password: {
        required: '请输入密码',
        min: '密码不能少于6位'
      },
      captchaCode: {
        required: '请输入验证码'
      }
    }
  },
  error: {
    401: {
      title: '没有访问权限',
      description: '抱歉，请先登录'
    },
    403: {
      title: '禁止访问',
      description: '抱歉，你无权访问该页面'
    },
    404: {
      title: '找不到网页',
      description: '抱歉，你访问的页面不存在'
    },
    500: {
      title: '服务器错误。',
      description: '抱歉，服务器出错了'
    },
    back: '返回首页'
  },
  footer: {
    declare: '本网站仅供个人学习与参考，如自行使用本站信息出现问题，本站概不负责，亦不承担任何法律责任。'
  },
  menubar: {
    home: '首页'
  },
  navbar: {
    home: '首页',
    logout: '退出登录',
    profile: '用户档案'
  },
  notice: {
    empty: '暂无消息'
  },
  sizeSelect: {
    tooltip: '布局大小',
    default: '默认',
    large: '大型',
    small: '小型',
    message: {
      success: '切换布局大小成功！'
    }
  },
  langSelect: {
    message: {
      success: '切换语言成功！'
    }
  },
  settings: {
    project: '项目配置',
    theme: '主题设置',
    pageset: '页面设置',
    navigation: '导航模式',
    themeStyle: '主题模式',
    themeColor: '主题颜色',
    showTabs: '开启Tabs',
    fixHeader: '固定Header',
    showLogo: '显示Logo',
    showFooter: '显示页脚'
  },
  layout: {
    left: '左侧模式',
    top: '顶部模式',
    mix: '混合模式'
  },
  home: {
    hello: '你好, '
  }
}
