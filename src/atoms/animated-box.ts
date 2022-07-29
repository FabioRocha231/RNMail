import * as React from 'react'
import { createBox } from '@shopify/restyle'
import { Theme } from '@/themes'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { ViewProps } from 'react-native'

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View)

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>
export default AnimatedBox
