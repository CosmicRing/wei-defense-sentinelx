# Moon Party 素材替换说明

这个站点现在是数据驱动的静态组件结构。日常替换素材和文案优先改：

```text
src/data/site-content.mjs
```

## 替换月球小镇主地图

1. 把新地图图片放进 `assets/`，例如：

```text
assets/moon-town-map-v2.png
```

2. 修改 `src/data/site-content.mjs`：

```js
assets: {
  mapImage: "assets/moon-town-map-v2.png",
  mapAlt: "新的地图描述"
}
```

3. 如果新地图里建筑位置不同，同步改 `locations` 里的坐标：

```js
{
  id: "bakery",
  x: 59,
  y: 25
}
```

`x` 和 `y` 是相对于首屏地图容器的百分比坐标。

## 调整交互主体轮廓

每个地点的高亮轮廓也在 `locations` 中：

```js
outline: "M52 15 C58 10 69 11 ..."
```

这是 SVG path，使用 `viewBox="0 0 100 100"` 的百分比坐标。换地图后，如果建筑外形不同，改对应地点的 `outline` 即可，不需要改组件代码。

## 替换居民、商品和新闻

这些内容也在同一个配置文件：

```text
residents
route
districts
products
journal
```

组件会自动根据数据重新渲染页面。

## 组件文件分工

```text
src/components/layout.mjs          头部、侧边菜单、搜索、页脚
src/components/map-explorer.mjs    地图、热点、SVG 主体轮廓高亮
src/components/content-sections.mjs 居民、路线、产品、新闻内容区
src/components/overlays.mjs        菜单、搜索、Ask me 交互
src/components/motion.mjs          GSAP 和 ScrollTrigger 动效
src/main.mjs                       页面组装入口
```
