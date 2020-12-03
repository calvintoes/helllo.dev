// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif'],
  webpack(config, options) {
    return config;
  },
});
