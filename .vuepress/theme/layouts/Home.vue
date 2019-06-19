<template>
  <main class="theme-container">
    <img class="cover-image" :src="$site.themeConfig.headshot"/>
    <h1 class="page-title"> {{$site.title}} </h1>
    <h2 class="page-subtitle"> {{$site.themeConfig.shortBio}} </h2>
    <div class="page-links">
      <a href="/rss.xml">RSS</a> 
      <a v-for="link in $site.themeConfig.socialLinks" :href="link.location">{{link.title}}</a>
    </div>
    <Content class="page-content"/>
    <div>⚙︎</div>
    <article class="article-preview" v-for="post in blogPosts" :key="post.key">
      <h1 class="article-preview__title"> {{post.title}} </h1>
      <div class="article-preview__tags">
        <span>{{post.frontmatter['author']}}</span> • 
        <span>{{post.frontmatter['date']}}</span> • 
        <span>{{post.frontmatter['topic']}}</span>
      </div>
      <p class="article-preview__text"> {{post.frontmatter['preview-text']}} </p>
      <a :href="post.path" class="article-preview__link"> Read → </a>
    </article>
  </main>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$site.pages.filter(page => page.path.includes('/posts/'))
    }
  }
}
</script>


<style lang="sass" scoped>
main
  text-align: center
  max-width: 720px
  margin: 0 auto

.cover-image
  width: 120px
  border-radius: 50%

.page-subtitle
  font-size: 1rem
  font-weight: 200
  margin: -0.4em 0 0.8em 0

.page-links
  margin: .6em 0

.page-links > *
  margin: 0 .2em

.page-content
  text-align: left

.page-content /deep/ h1:first-child
  display: none

.article-preview
  margin: 1rem 0
  text-align: left

.article-preview__tags
  margin: -0.2em 0 0.4em 0
  font-size: 0.8rem
  color: #3f4259

.article-preview__text
  margin: 0

.article-preview__link
  font-size: 0.8rem
  color: #4d565e
</style>
