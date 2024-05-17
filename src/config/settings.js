import { SizeEnum } from '../enums/SizeEnum'
import { LayoutEnum } from '../enums/LayoutEnum'
import { ThemeEnum } from '../enums/ThemeEnum'
import { LocaleEnum } from '../enums/LocaleEnum'

const { pkg } = APP_INFO

const defaultSettings = {
  title: pkg.name,
  version: pkg.version,
  fixHeader: true,
  showTabs: true,
  showLogo: true,
  showFooter: true,
  showSettings: true,
  layout: LayoutEnum.LEFT,
  theme: ThemeEnum.LIGHT,
  size: SizeEnum.DEFAULT,
  locale: LocaleEnum.ZH_CN,
  themeColor: '#409EFF'
}

export default defaultSettings
