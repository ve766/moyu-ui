# GitLab Pajamas Design System — UI 研究资源清单

> 任务：项目进程可视化 — GitLab Pajamas Design System 开源 SVG/设计资产收集
> 收集日期：2026-09-28
> 目标目录：`E:\项目可视化\UI-Research\GitLab\`

## 资源列表

| 名称 | 来源 | 下载地址 | 文件（类型 / 文件名 / 大小） | License | 状态 |
|---|---|---|---|---|---|
| @gitlab/svgs 官方 SVG 图标库（main 分支归档） | gitlab-org/gitlab-svgs | https://gitlab.com/gitlab-org/gitlab-svgs/-/archive/main/gitlab-svgs-main.zip | zip 包 1.13 MB；解压后 `gitlab-svgs-main/` 共 692 个 SVG，2.01 MB | MIT（package.json `license: MIT`，LICENSE 文件为标准 MIT 文本，Copyright (c) 2011-present GitLab Inc.） | 已下载 |
| ├─ Sprite 图标（sprite_icons/） | 同上 | 同上 | 442 个 16×16 SVG 图标；含 dashboard.svg、chart.svg、clock.svg、timer.svg、commit.svg、pipeline.svg、milestone.svg、monitor.svg、monitor-lines.svg、log.svg、file-tree.svg、git-merge.svg、merge-request.svg、issue-*.svg、work-item-incident.svg，以及全套流水线状态图标 status_*.svg（canceled/closed/created/failed/manual/notfound/open/pending/preparing/running/scheduled/skipped/success/warning 等 20+ 个） | MIT | 已下载（随仓库包） |
| ├─ Status 插图（illustrations/status/） | 同上 | 同上 | 12 个 SVG：status-alert/fail/new/nothing/settings/success 各含 md+sm 两档（144×144），外加 unable_to_connect.svg（5.6 KB） | MIT | 已下载（随仓库包） |
| ├─ Monitoring 插图（illustrations/monitoring/） | 同上 | 同上 | 1 个 SVG（监控主题插图） | MIT | 已下载（随仓库包） |
| ├─ Empty-state 插图（illustrations/empty-state/） | 同上 | 同上 | 61 个 144×144 SVG；与 Dashboard 进程可视化直接相关的有 empty-dashboard-md.svg、empty-activity-md.svg、empty-chart-md.svg、empty-piechart-md.svg、empty-pipeline-md.svg、empty-commit-md.svg、empty-environment-md.svg、empty-epic-md.svg、empty-epic-add-md.svg 等 | MIT | 已下载（随仓库包） |
| ├─ 其他插图（illustrations/{error,logos,welcome,empty-access}/） | 同上 | 同上 | 其余 175 个 SVG（error、logos、welcome、empty-access 等） | MIT；其中 third-party-logos/ 内第三方商标归原所有者，受各自许可约束（见 file_icons/LICENSE.md 说明） | 已下载（随仓库包） |
| GitLab SVG Previewer（在线图标检索站） | gitlab-org/gitlab-svgs | https://gitlab-org.gitlab.io/gitlab-svgs/ | 在线站点（无需下载）；可按名称搜索 442 个图标并查看用法 | MIT（同上游仓库） | 仅记录 |
| Pajamas Design System 文档站（design.gitlab.com） | gitlab-services/design.gitlab.com | https://design.gitlab.com | 在线文档（组件 / 模式 / 数据可视化指南）；非可编辑设计文件 | 见仓库 LICENSE（MIT，GitLab 文档内容另有 CC-BY 说明，待确认） | 仅记录 |
| design.gitlab.com 源码仓库 | gitlab-org/gitlab-services/design.gitlab.com | https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/archive/main/design.gitlab.com-main.zip | 仓库 >50 MB（下载至 52 MB 仍在增长），为文档站源码（Markdown + Nuxt 构建脚本），不含可直接编辑的 .fig/.penpot 设计文件；按规则超过 50 MB 且非必需，仅记录链接 | MIT（仓库 LICENSE；文档内容 License 待确认） | 仅记录（未下载） |
| Pajamas UI Kit（Figma 组件库） | GitLab UX Design | https://www.figma.com/community/ （GitLab 官方 Figma Community 主页；Pajamas UI Kit 拆分为 Component library / Design tokens / Data Visualization / Product Icons / Product Illustrations / Patterns and Page Templates 多个 Figma 文件） | .fig 二进制，无法直链下载；需 Figma 桌面端登录后从 Community 获取并 Duplicate 到工作区。Data Visualization 文件对本项目最有参考价值 | License 未声明/待确认（Figma Community 发布页未在 HTML 中显式标注；GitLab 开源政策倾向 MIT，但需在 Figma 文件页核实） | 仅记录（需在 Figma 中获取） |
| GitLab Design 内部设计项目（原型 / WIP 文件） | gitlab-org/design-gitlab 等 | https://design.gitlab.com/get-started/resources/ | 内部 Figma 组织空间，默认不公开；外部贡献者请用 Figma Community 公开资产 | License 未声明/待确认 | 仅记录（外部不可访问） |

## 验证记录

- `gitlab-svgs-main.zip` 已用 `Expand-Archive` 成功解压，zip 结构完整。
- 抽样 SVG 文件 XML 头部校验通过：
  - `sprite_icons/dashboard.svg` → `<svg width="16" height="16" viewBox="0 0 16 16" ...>`
  - `sprite_icons/pipeline.svg` → `<svg width="16" height="16" viewBox="0 0 16 16" ...>`
  - `illustrations/empty-state/empty-dashboard-md.svg` → `<svg width="144" height="144" fill="none" viewBox="0 0 144 144" ...>`
  - `illustrations/status/status-success-md.svg` → `<svg width="144" height="144" fill="none" viewBox="0 0 144 144" ...>`
- 版本：`@gitlab/svgs` v3.149.0（package.json）。
- 备注：上游 README 指出 gitlab-svgs 仓库已并入 `gitlab-services/design.gitlab.com`，但当前 main 分支仍可正常归档下载。

## 统计

- 已下载资产：1 个 zip 归档（1.13 MB），解压后 692 个 SVG（2.01 MB），全部 MIT。
- 仅记录链接资源：4 项（SVG Previewer、design.gitlab.com 文档站、design.gitlab.com 源码仓库、Pajamas UI Kit Figma）。
- License 分布（已下载）：MIT 692 文件；其中 third-party-logos/ 子目录含第三方商标（归原所有者）。
- License 分布（仅记录）：MIT 2 项（Previewer、design.gitlab.com 源码）；License 未声明/待确认 2 项（Pajamas Figma UI Kit、GitLab Design 内部项目）。
