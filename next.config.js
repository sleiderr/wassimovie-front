/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  env: {
    imdbPhotoURL : "https://image.tmdb.org/t/p/original",
    backURL : "http://10.144.57.12:8080",
    logoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-white.png",
    blackLogoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo.png",
    smallLogoURL : "https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-small.png"
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};