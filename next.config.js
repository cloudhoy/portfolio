/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'daisyui.com', 'i.imgur.com' ],
        unoptimized: true
    },
    output: 'export',
}

module.exports = nextConfig
