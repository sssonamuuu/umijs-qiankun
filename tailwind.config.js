
module.exports = {
  important: true,
  content: ['./src/**/*.{tsx,html}', '../../libraries/**/*.*'],
  variants: { extend: { cursor: ['hover', 'focus']} },
  corePlugins: { preflight: false },
  theme: {},
  plugins: [require('@tailwindcss/line-clamp')],
};
