import { defineConfig } from "vitepress";

export default defineConfig({
  title: "中文技术文档写作规范",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  base: "/document-style-guide/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars.githubusercontent.com/u/212184878",
      },
    ],
  ],
  themeConfig: {
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    editLink: {
      pattern:
        "https://github.com/lyh-docs/document-style-guide/edit/main/docs/:path",
      text: "在 GitHub 编辑",
    },
    sidebar: [
      {
        text: "",
        items: [
          { text: "标题", link: "/title" },
          { text: "文本", link: "/text" },
          { text: "段落", link: "/paragraph" },
          { text: "数值", link: "/number" },
          { text: "标点符号", link: "/marks" },
          { text: "文档体系", link: "/structure" },
          { text: "参考链接", link: "/reference" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lyh-docs/document-style-guide",
      },
    ],
  },
});
