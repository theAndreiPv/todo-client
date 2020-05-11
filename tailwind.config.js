module.exports = {
  purge: false,
  theme: {
    screens: {
      lg: { max: '1020px' },
      sm: { max: '920px' },
    },
    colors: {
      transparent: 'transparent',
      dim: 'rgb(253,253,253)',
      error: '#ff3180',
      black: {
        10: 'rgba(0, 0, 0, .12)',
        20: 'rgba(0, 0, 0, .24)',
        30: 'rgba(0,0,0,.36)',
        50: 'rgba(0,0,0,.54)',
        80: 'rgba(0,0,0,.85)',
      },
      white: {
        40: 'rgba(255,255,255,.4)',
        50: 'rgba(255,255,255,.55)',
        80: 'rgba(255,255,255,.85)',
        default: '#fff',
      },
      theme: {
        6: 'rgba(102,131,222,.06)',
        8: 'rgba(46,73,136,.08)',
        10: 'rgba(102,131,222,.12)',
        default: '#667fdd',
        accent: '#476ad8',
      },
    },
    backgroundColor: (theme) => theme('colors'),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: 'rgba(0,0,0,.06)',
      accent: 'rgba(102,131,222,.54)',
    }),
    textColor: (theme) => theme('colors'),
    fill: {
      current: 'currentColor',
    },
    spacing: {
      px: '1px',
      '2px': '2px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
    maxWidth: {
      100: '25rem',
    },
    minHeight: (theme) => ({
      0: '0',
      full: '100%',
      screen: '100vh',
      ...theme('spacing'),
    }),
    fontSize: {
      1: '0.625rem', // 10px
      2: '0.687rem', // 11px
      3: '0.75rem', // 12px
      4: '0.812rem', // 13px
      5: '0.875rem', // 14px
      6: '1rem', // 16px
      7: '1.125rem', // 18px
      8: '1.25rem', // 20px
      9: '1.375rem', // 22px
      10: '1.5rem', // 24px
      11: '1.625rem', // 26px
      12: '1.75rem', // 28px
    },
    lineHeight: {
      normal: '1.5',
      6: '1.5rem', // 24px
    },
    fontFamily: {
      primary: [
        '-apple-system',
        '"Helvetica Neue"',
        'Microsoft Yahei',
        'sans-serif',
      ],
      secondary: [
        'Arial',
        '"Helvetica Neue"',
        'Microsoft Yahei',
        'sans-serif',
      ],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    borderRadius: {
      default: '4px',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
    },
    boxShadow: {
      default: '0 2px 11px 0 rgba(0, 0, 0, .16)',
      lg: '0 2px 6px rgba(0,0,0,.16), 0 3px 20px rgba(0,0,0,.16)',
    },
    transitionDuration: {
      300: '300ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      opacity: 'opacity',
      background: 'background-color',
    },
    transitionTimingFunction: {
      linear: 'linear',
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
};
