# WEI Defense

WEI Defense 是一个基于 Next.js 的自主安保基础设施官网原型，主题围绕无人机巡防、炼油厂/关键基础设施防护、分层响应、指挥中心与数字孪生任务流。

当前项目已经从早期静态页升级为 Next.js 应用。请使用本地开发服务器访问，不要再用根目录的 `index.html` 作为主入口。

## 当前状态

- 主站首页：`/`
- SentinelX 任务流程页：`/sentinelx`
- Open Graph API：`/api/og`
- 遗留/实验页面：`/lanyard`
- 本地开发地址：`http://127.0.0.1:3000`

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React
- Three.js / React Three Fiber 相关依赖
- Vercel Analytics

## 快速开始

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

打开：

```text
http://127.0.0.1:3000
```

构建检查：

```bash
npx tsc --noEmit
npm run build
```

注意：`package.json` 里目前有 `npm run lint`，但项目没有安装 `eslint`，所以该命令会失败，除非后续补上 ESLint 配置与依赖。

## 页面结构

### 首页 `/`

文件：`app/page.tsx`

主要内容：

- Hero：炼油厂安全任务主视觉
- Solutions：油气、低空安全、多域防御解决方案
- Product Lines：HU / XQ / YL / Dock / XJ / SentinelX OS 产品体系
- Platform：指挥中心、数字孪生、多域数据融合
- Case Solution：炼油厂分层响应链路
- Framework：无人机安保任务状态机
- CTA：联系与方案构建入口

首页支持查询参数切换语言：

```text
/?lang=en
/?lang=zh
/?lang=ar
/?lang=la
/?lang=sl
```

### SentinelX `/sentinelx`

文件：`app/sentinelx/page.tsx`

用途：

- 展示 SentinelX / 铜雀台任务工作流
- 描述炼油厂无人机安防的状态链路
- 展示 15 个任务阶段：待命、巡防、侦察、异常发现、目标识别、告警、跟踪、警告、分层响应、效果评估、复位等

同样支持：

```text
/sentinelx?lang=en
/sentinelx?lang=zh
```

## 关键组件

- `components/header.tsx`：顶部导航、多语言入口、WEI 标识
- `components/footer.tsx`：底部导航
- `components/global-ops-map.tsx`：首页全球态势 SVG 背景
- `components/mission-state-machine.tsx`：无人机安防任务状态机
- `components/Dither.tsx`：全局动态背景
- `components/DecryptedText.tsx`：解密文字动效
- `components/motion-primitives/text-effect.tsx`：滚动/入场文字动效
- `components/ui/*`：基础 UI 组件

## 资产目录

主要图片和可视化资产：

```text
public/generated/
assets/generated/
assets/extracted/
assets/
```

当前首页引用的重点资产：

- `public/generated/autonomous-product-family.png`
- `public/generated/command-center-clean.png`
- `public/generated/layered-response-overview.png`

其他公共资源：

- `public/icon.svg`
- `public/icon-light-32x32.png`
- `public/icon-dark-32x32.png`
- `public/apple-icon.png`

## 样式与主题

全局样式入口：

```text
app/globals.css
```

项目使用 Tailwind CSS 4，并通过 CSS 变量定义暗色主题色：

- `--background`
- `--foreground`
- `--card`
- `--muted`
- `--border`

旧静态页样式仍存在：

```text
index.html
styles.css
src/
```

这些文件不再是当前 Next.js 主站入口。如后续确认不需要，可以清理，避免误打开 `file:///E:/WEI Defense/index.html`。

## 已知注意事项

- 当前真实预览入口是 `http://127.0.0.1:3000`，不是根目录 `index.html`。
- `npm run build` 可以通过。
- `npx tsc --noEmit` 可以通过。
- `npm run lint` 目前不可用，因为缺少 ESLint 依赖。
- PowerShell 默认输出编码可能会把中文显示成乱码；文件本身是 UTF-8。
- `README.md` 已经从原 v0 活动模板说明改为本项目说明。

## 推荐维护流程

1. 修改页面或组件。
2. 运行类型检查：

   ```bash
   npx tsc --noEmit
   ```

3. 运行生产构建：

   ```bash
   npm run build
   ```

4. 本地打开主站和 SentinelX 页面检查：

   ```text
   http://127.0.0.1:3000
   http://127.0.0.1:3000/sentinelx
   ```

5. 如果后续要上线，优先使用 Vercel 或支持 Next.js App Router 的 Node 部署环境。

## 部署

生产构建：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

默认 `next start` 会使用 `.next` 构建产物。部署前请确认目标环境安装了 Node.js，并已执行依赖安装。
