# Personal Website

一个基于 Astro + StudioCMS UI 构建的简洁个人主页。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

访问 http://localhost:4321 查看站点。

## 🛠️ 技术栈

- **Astro** - 静态站点生成器
- **StudioCMS UI** - 组件库
- **MiSans** - 小米开源字体

## 📝 自定义内容

### 修改个人资料
编辑 `src/cards/profile.astro`

### 更新技能标签
编辑 `src/cards/skills.astro`

### 添加项目
编辑 `src/cards/projects.astro`

### 修改社交链接
编辑 `src/cards/links.astro`

## 📁 项目结构

```
src/
├── cards/          # UI 卡片组件
│   ├── profile.astro
│   ├── about.astro
│   ├── skills.astro
│   ├── links.astro
│   ├── time.astro
│   ├── projects.astro
│   └── footer.astro
└── pages/
    └── index.astro # 主页入口
```