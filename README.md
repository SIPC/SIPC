# SIPC Personal Website

一个基于 [Astro](https://astro.build) 构建的现代化个人主页项目，使用 [StudioCMS UI](https://studiocms.dev) 组件库打造简洁优雅的个人展示页面。

## ✨ 特性

- 🚀 **基于 Astro** - 现代化的静态站点生成器，提供卓越的性能
- 🎨 **StudioCMS UI** - 美观且一致的 UI 组件库
- ⏰ **实时时间显示** - UTC+8 时区的动态时钟
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🔗 **社交链接集成** - GitHub 和 Bilibili 快速访问
- 🛠️ **技能标签展示** - 清晰展示技术栈
- 📂 **项目展示** - 链接到个人开源项目

## 📁 项目结构

```
SIPC/
├── src/
│   ├── assets/              # 静态资源
│   │   ├── avatar.jpg       # 头像图片
│   │   └── icon/            # 图标文件
│   │       ├── github.svg
│   │       └── bilibili.svg
│   ├── cards/               # UI 卡片组件
│   │   ├── profile.astro    # 个人资料卡片
│   │   ├── about.astro      # 关于我卡片
│   │   ├── skills.astro     # 技能标签卡片
│   │   ├── links.astro      # 社交链接卡片
│   │   ├── time.astro       # 时间显示卡片
│   │   ├── projects.astro   # 项目展示卡片
│   │   └── footer.astro     # 页脚卡片
│   └── pages/
│       └── index.astro      # 主页入口
├── public/
│   └── favicon.svg          # 网站图标
├── astro.config.mjs         # Astro 配置
├── package.json             # 项目依赖
└── tsconfig.json            # TypeScript 配置
```

## 🚀 快速开始

### 前置要求

- Node.js 18+ 或 20+
- npm, yarn, 或 pnpm

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式

启动开发服务器：

```bash
npm run dev
# 或
pnpm dev
```

访问 http://localhost:4321 查看站点。

### 构建生产版本

```bash
npm run build
# 或
pnpm build
```

构建产物将输出到 dist/ 目录。

### 预览生产构建

```bash
npm run preview
# 或
pnpm preview
```

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) - 现代静态站点生成器
- **UI 组件**: [StudioCMS UI](https://studiocms.dev) - 优雅的组件库
- **字体**: [MiSans](https://github.com/Xiaomi/font-misans) - 小米开源字体
- **语言**: TypeScript + Astro (JSX-like 语法)

## 📝 自定义内容

### 修改个人资料

编辑 src/cards/profile.astro：

```astro
<User name="sipc.ink" description="不喧哗，自有声。" avatar={ProfileImage} />
```

### 更新技能标签

编辑 src/cards/skills.astro，添加或修改 Badge 组件：

```astro
<Badge label="你的技能" color="info" />
```

### 添加项目

编辑 src/cards/projects.astro，在项目列表中添加新的项目卡片：

```astro
<Card style="width: 100