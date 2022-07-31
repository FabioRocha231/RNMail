declare module '*.svg' {
  import Svg, { SvgProps } from 'react-native-svg'
  const content: React.FC<Svg>
  export default content
}
