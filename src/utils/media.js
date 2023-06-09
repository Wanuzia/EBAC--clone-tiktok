import style from './styles'

const media = {
  phone: `(max-width: ${style.screen.xxs})`,
  mobile: `(max-width: ${style.screen.sm})`,
  maxMobile: `(max-width: ${style.screen.mm})`,
  tablet: `(min-width: ${style.screen.xs})`,
  desktop: `(min-width: ${style.screen.desktop})`,
  sm: `(min-width: ${style.screen.sm})`,
  mm: `(min-width: ${style.screen.mm})`,
  md: `(min-width: ${style.screen.md})`,
  lg: `(min-width: ${style.screen.lg})`,
}

export default media