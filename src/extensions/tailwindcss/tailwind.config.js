module.exports = {
    theme: {
        extend: {
          fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['Open Sans'],
            'nunito': ['nunito', 'sans-serif'],
            'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
          }
        }
    },

    prefix:  'tw-',
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.js',
    ],

    variants: {
      extend: {
      }
    },
    plugins: []
}
