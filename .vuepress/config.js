module.exports = {
  title: 'Sean Williams',
  description: 'A blog about meta thinking',
  themeConfig: {
    headshot: '/img/headshot.png',
    shortBio: 'I think and write and think.',
    socialLinks: [
      { location: "https://twitter.com/jack", title: "Twitter" },
      { location: "https://github.com/jack", title: "GitHub" },
    ]
  },
  dest: "dist",
  plugins: {
    'feed': {
      canonical_base: 'https://myurl.com',
      posts_directories: ['/posts/'],
    }
  }
}