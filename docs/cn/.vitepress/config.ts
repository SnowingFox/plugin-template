import { defineConfig } from "vitepress";
import { version } from "../package.json";
import {
  contributing,
  discord,
  font,
  ogImage,
  ogUrl,
  releases,
  twitter,
  vitestDescription,
  vitestName,
} from "../docs-data";
import { coreTeamMembers } from "../src/contributors";

export default defineConfig({
  title: vitestName,
  description: vitestDescription,
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: `${coreTeamMembers
          .map((c) => c.name)
          .join(", ")} and ${vitestName} contributors`,
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node",
      },
    ],
    ["meta", { property: "og:title", content: vitestName }],
    ["meta", { property: "og:description", content: vitestDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: vitestName }],
    ["meta", { name: "twitter:description", content: vitestDescription }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { href: font, rel: "stylesheet" }],
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  themeConfig: {
    repo: "vitest-dev/docs-cn",
    logo: "/logo.svg",
    docsDir: "",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "?????????????????????",

    algolia: {
      appId: "ZTF29HGJ69",
      apiKey: "9c3ced6fed60d2670bb36ab7e8bed8bc",
      indexName: "vitest",
      // searchParameters: {
      //   facetFilters: ['tags:en']
      // }
    },
    nav: [
      { text: "??????", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "??????", link: "/config/" },
      // { text: 'Plugins', link: '/plugins/' },
      {
        text: `v${version}`,
        items: [
          {
            text: "????????????",
            link: releases,
          },
          {
            text: "????????????",
            link: contributing,
          },
        ],
      },
      {
        text: "Discord",
        link: discord,
      },
      {
        text: "Twitter",
        link: twitter,
      },
      {
        text: "????????????",
        items: [
          {
            text: "English",
            link: ogUrl,
          },
          {
            text: "????????????",
            link: "/",
          },
        ],
      },
    ],

    sidebar: {
      "/config/": "auto",
      "/api/": "auto",
      // '/plugins': 'auto',
      // catch-all fallback
      "/": [
        {
          text: "??????",
          children: [
            {
              text: "??????",
              link: "/guide/why",
            },
            {
              text: "????????????",
              link: "/guide/",
            },
            {
              text: "??????",
              link: "/guide/features",
            },
            {
              text: "CLI",
              link: "/guide/cli"
            },
            {
              text: "????????????",
              link: "/guide/mocking",
            },
            /* TODO
            {
              text: 'Using Plugins',
              link: '/guide/using-plugins'
            },
            */
            {
              text: "??????????????????",
              link: "/guide/in-source",
            },
            {
              text: '????????????',
              link: '/guide/test-context',
            },
            {
              text: 'IDE ??????',
              link: '/guide/ide',
            },
            {
              text: '??????',
              link: '/guide/debugging',
            },
            {
              text: "???????????????????????????",
              link: "/guide/comparisons",
            },
            {
              text: "????????????",
              link: "/guide/migration",
            },
          ],
        },
      ],
    },
  },
});
