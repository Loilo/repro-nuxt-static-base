module.exports = {
  mode: 'universal',

  router: {
    // Use the '/demo' base in production builds
    base:  process.env.NODE_ENV === 'production' ? '/demo' : '/'
  },

  generate: {
    dir: 'demo'
  }
}
