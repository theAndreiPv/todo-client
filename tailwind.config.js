module.exports = {
  theme: {
    screens: {
      lg: '920px',
      xl: '1200px',
    },
    colors: {
      transparent: 'transparent',
      // black: '#333',
      white: '#fff',
      'white-8': 'rgba(255, 255, 255, 0.85)',
      'white-5': 'rgba(255, 255, 255, 0.55)',
      'white-4': 'rgba(255, 255, 255, 0.4)',
      // dim: '#a0aec0',
      theme: '#667fdd',
    },
    backgroundColor: (theme) => theme('colors'),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: 'rgba(0,0,0,.06)',
    }),
    textColor: (theme) => theme('colors'),
    fill: {
      current: 'currentColor',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
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
    fontFamily: {
      sans: [
        '-apple-system',
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
    },
    boxShadow: {
      default: '0 2px 11px 0 rgba(0, 0, 0, .16)',
      lg: '0 2px 6px rgba(0,0,0,.16), 0 3px 20px rgba(0,0,0,.16)',
    },
  },
};
