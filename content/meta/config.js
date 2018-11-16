const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "東雪梨台福基督教會", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "東雪梨台福基督教會位於雪梨東邊的Maroubra，我們每星期六早上十點有主日禮拜和兒童主日學，歡迎大家參加！",
  siteUrl: "http://efcm.org.au",
  pathPrefix: "/about/",
  siteImage: "avatar.jpg",
  siteLanguage: "cn",
  // author
  authorName: "Ivan Pang",
  //authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "",
  infoTitleNote: "東雪梨台福",
  // manifest.json
  manifestName: "東雪梨台福基督教會網頁",
  manifestShortName: "東雪梨台福", // max 12 characters
  manifestStartUrl: "/about/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "phdshaw@gmail.com",
  // social
  authorSocialLinks: [
    //{ name: "github", url: "https://github.com/greglobinski" },
    //{ name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://www.facebook.com/groups/efcsociety/" }
  ]
};
