export const BREAKPOINTS = {
    mobile: 456,
    tablet: 768,
    lap: 946,
    desktop: 1440,
  }
  
  export type BreakpointKey = keyof typeof BREAKPOINTS
  
  export const mediaQuery = (key: BreakpointKey, type: 'min' | 'max' = 'min') => {
    return `@media (${type}-width: ${BREAKPOINTS[key]}px)`
  }
  