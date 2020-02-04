module.exports = {
  title: 'Getting Started with DreamFactory',
  description: 'A hands-on introduction to the powerful DreamFactory API generation platform',
  themeConfig: {
    logo: '/images/mark-white.png',
    displayAllHeaders: true,
    author: 'DreamFactory Documentation Team',
  	nav: [
      { text: 'Home', link: '/' },
      { text: 'DreamFactory.com', link: 'https://www.dreamfactory.com/' },
      { text: 'Contact', link: 'https://www.dreamfactory.com/demo' },
      { text: 'Sales', link: 'https://www.dreamfactory.com/contact' },
      { text: 'Free Hosted Trial', link: 'https://genie.dreamfactory.com/register' },
    ]
  },
  ga: 'UA-40461579-9',
  plugins: {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
  }
}
