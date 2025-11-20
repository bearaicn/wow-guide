---
home: true
title: 首页
heroImage: /images/wow.svg
tagline: 点亮迷雾中的灯塔，为你指引艾泽拉斯的征途
actions:
  - text: 开始探索
    link: /get-started.html
    type: primary

  - text: 插件分享
    link: /plugins/
    type: secondary

features:
  - title: 全面攻略
    details: 涵盖副本攻略、职业指南、任务流程等全方位游戏内容，助你轻松应对各种挑战。
    image: /images/guide.svg
    link: /guides/
  - title: 实时更新
    details: 紧跟游戏版本更新，确保所有攻略和指南都基于最新的游戏机制和数据。
    image: /images/update.svg
    link: /updates/
  - title: 社区驱动
    details: 由资深玩家共同维护，汇聚集体智慧，分享最实用的游戏经验。
    image: /images/community.svg
    link: /community/
  - title: 新手友好
    details: 从基础操作到高级技巧，为不同水平的玩家提供合适的学习路径。
    image: /images/beginner.svg
    link: /beginner/
  - title: 多职业覆盖
    details: 包含所有职业的详细指南，帮助你找到最适合自己的游戏方式。
    image: /images/classes.svg
    link: /classes/
  - title: 跨版本兼容
    details: 同时支持经典旧世和正式服版本，满足不同玩家的需求。
    image: /images/versions.svg
    link: /versions/

classes:
  - name: 战士
    class: warrior
  - name: 法师  
    class: mage
  - name: 牧师
    class: priest
  - name: 盗贼
    class: rogue
  - name: 猎人
    class: hunter
  - name: 德鲁伊
    class: druid
  - name: 术士
    class: warlock
  - name: 圣骑士
    class: paladin
  - name: 死亡骑士
    class: deathknight

footer: 
  title: 魔兽世界灯塔
  rights: 为了艾泽拉斯 | 魔兽世界灯塔 © 2024
---

<style>
.vp-theme-container .vp-home {
  margin: 0 0;
  max-width: 100%;
  padding: var(--navbar-height) 0 0;
}
.vp-theme-container .vp-home > .vp-hero {
  display: none;
}
.vp-theme-container .vp-home > .vp-features {
  display: none;
}
.vp-theme-container .vp-home > .vp-footer {
  display: none;
}
</style>

<HomePage />