<template>
  <section>
    <h1>
      <a href="https://github.com/Loilo/repro-nuxt-static-base">repro-nuxt-static-base</a>
    </h1>
    <p>Minimal reproduction for "nuxt generate" issues with static assets and router base</p>
    <p>This is a demo site that is served at domain root <code>/</code> in dev mode but served under <code>/demo</code> in production mode.</p>

    <hr>

    <p>The point is that you should see the Vue.js logo as well as to the Nuxt.js logo below when running in <code>dev</code> mode.<br>
    However, you will <em>not</em> see the Nuxt.js in a static build of this site.<br>
    That's because the static build sets the <code>router.base</code> to <code>/demo</code> while URLs pointing to static assets via <code>/</code> will not be adjusted.</p>

    <hr>

    <h2>The Vue Logo</h2>
    <p>This logo is located at <code>/assets/vue-logo.svg</code> and included via:</p>
    <pre>&lt;img src="~/assets/vue-logo.svg"&gt;</pre>
    <img width="150" src="~/assets/vue-logo.svg">

    <h2>The Nuxt Logo</h2>
    <p>This logo is located at <code>/static/nuxt-logo.svg</code> and included via:</p>
    <pre>&lt;img src="/nuxt-logo.svg"&gt;</pre>
    <img width="300" src="/nuxt-logo.svg" alt="Unfortunately the Nuxt logo can only be loaded in dev mode">

    <hr>

    <p>To see the broken site, run:</p>
    <pre><code>npm run generate-and-serve</code></pre>
  </section>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  line-height: 1.5;
}
code, pre {
  font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace;
}

img {
  border-radius: 5px;
  box-shadow: 0 0 0 3px #34495F;
  padding: 1em;
}

code {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
}

pre {
  background: #f5f5f5;
  padding: 0.75em;
}
</style>
