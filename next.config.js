// para modulos
// import withMdx from '@next/mdx'

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// esta configuracion es la basica
// const withMdx = require('@next/mdx')()
// module.exports = withMdx(nextConfig)

// export default withMdx(nextConfig)


// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { }

module.exports = withContentlayer(nextConfig)

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.explica.me',
        port: '',
      },
    ],
  },
}
