/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  env: {
    imdbPhotoURL : "https://image.tmdb.org/t/p/original",
    backURL : "http://wassimovie.com/api",
    logoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-white.png",
    blackLogoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo.png",
    smallLogoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-small.png"
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};