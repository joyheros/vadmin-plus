export default {
  route: {
    home: 'Home',
    login: 'Login',
    account: 'Account',
    redirect: 'Redirect',
    error401: 'Error 401',
    error401: 'Error 403',
    error401: 'Error 404',
    error401: 'Error 500',
    system: 'System Manage',
    user: 'User Manage',
    role: 'Role Manage',
    menu: 'Menu Manage',
    dept: 'Dept Manage',
    monitor: 'System Monitor',
    security: 'Security Log',
    operation: 'Operation Log',
    syslog: 'System Log',
    document: 'Document',
    guide: 'Guide',
    apidoc: 'Api Document',
    layers: 'Multi Layer',
    layer1: 'Layer 1',
    layer21: 'Layer 2-1',
    layer22: 'Layer 2-2',
    layer31: 'Layer 3-1',
    layer32: 'Layer 3-2',
    feature: 'Feature',
    richtext: 'RichText Editor',
    markdown: 'Markdown Editor',
    upload: 'File Upload',
    download: 'File Download',
    echart: 'Map',
    help: 'Help',
    about: 'About'
  },
  login: {
    username: 'Username',
    password: 'Password',
    login: 'Login',
    captchaCode: 'Verify Code',
    capsLock: 'Caps Lock is On',
    autoLogin: 'Auto Login',
    forgot: 'Forgot Password',
    noAccount: 'Have not an account?',
    register: 'Register',
    thirdLogin: 'Other Login',
    message: {
      username: {
        required: 'Please enter Username'
      },
      password: {
        required: 'Please enter Password',
        min: 'The password can not be less than 6 digits'
      },
      captchaCode: {
        required: 'Please enter Verify Code'
      }
    }
  },
  error: {
    401: {
      title: 'No Authentication',
      description: 'Sorry, has not the permission to access the page.'
    },
    403: {
      title: 'No Access',
      description: 'Sorry, access to this resource on the server is denied.'
    },
    404: {
      title: 'Page Not Found',
      description: "Sorry, the page you're looking for cannot be accessed."
    },
    500: {
      title: 'the server is reporting an error.',
      description: 'An unexpected error occurred and your request could not be completed.'
    },
    back: 'Back Home'
  },
  footer: {
    declare:
      'This website is only for personal learning and reference, if their own use the site information to make problems, the site will not be responsible, nor undertake any legal responsibility.'
  },
  menubar: {
    home: 'Home'
  },
  navbar: {
    home: 'Home',
    logout: 'Logout',
    account: 'Account'
  },
  notice: {
    empty: 'No Message'
  },
  sizeSelect: {
    tooltip: 'Layout Size',
    default: 'Default',
    large: 'Large',
    small: 'Small',
    message: {
      success: 'Switch Layout Size Successful!'
    }
  },
  langSelect: {
    message: {
      success: 'Switch Language Successful!'
    }
  },
  settings: {
    project: 'Project Settings',
    theme: 'Theme',
    pageset: 'Page Setting',
    navigation: 'Navigation',
    themeStyle: 'Theme Style',
    themeColor: 'Theme Color',
    showTabs: 'App Tabs',
    fixHeader: 'Fixed Header',
    showLogo: 'Show Logo',
    showFooter: 'Show Footer'
  },
  layout: {
    left: 'Left Mode',
    top: 'Top Mode',
    mix: 'Mix Mode'
  },
  home: {
    hello: 'Hello, '
  }
}
