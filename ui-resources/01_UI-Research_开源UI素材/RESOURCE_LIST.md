# 项目可视化 · 开源 UI/UX 设计资源清单

> 生成时间：2026-09-28 16:00
> 根目录：`E:\项目可视化\UI-Research\`
> 用途：为"项目进程可视化"自建工具搜集可直接下载、可编辑的原始设计文件（.penpot / .svg / dashboard JSON / 图标 / 主题），以及 Figma Community 参考链接。
> 本清单为顶层汇总；各子目录下另有 `_resources.md` 明细。

## 目录结构

```
E:\项目可视化\UI-Research\
├── RESOURCE_LIST.md          ← 本文件
├── Penpot\                   ← .penpot 设计文件（20 个，~251 MB）
│   └── _resources.md
├── GitLab\                    ← gitlab-svgs（692 SVG，MIT）
│   ├── gitlab-svgs-main.zip
│   ├── gitlab-svgs-main\
│   └── _resources.md
├── Figma\                     ← Figma Community 链接记录（26 条，无本地 .fig）
│   └── _resources.md
└── Other\                     ← Grafana/OTel dashboard JSON + 图标 + ECharts 主题（161 文件）
    ├── grafana-dashboards\
    ├── echarts-themes\
    ├── icons-heroicons\
    ├── icons-tabler\
    ├── icons-lucide\
    └── _resources.md
```

## 资源总数与 License 分布

| 分类 | 已下载文件数 | 仅记录链接数 | 主要 License |
|---|---|---|---|
| Penpot | 20 个 .penpot + 2 LICENSE（~251 MB） | 13 条 | CC BY 4.0（19），MIT（1） |
| GitLab Pajamas | 692 个 SVG（1 个 zip + 解压目录） | 4 条 | MIT |
| Figma Community | 0（.fig 需 Figma 桌面端获取） | 26 条 | CC BY 4.0 / MIT / Apache 2.0 / 免费可复制 / 待确认 |
| Other（OTel + 图标 + ECharts） | 161 文件（~644 KB） | 约 8 条 | Apache-2.0（4），MIT（3），ISC（1），待确认（2） |
| **合计** | **约 875 个本地文件（~255 MB）** | **约 51 条链接** | — |

## 无法直接下载的知名资源清单（需另行获取）

1. **Figma Community 全部 26 个文件**：`.fig` 格式需在 Figma 桌面端/浏览器登录后 Duplicate，命令行无法合法直取。Top 推荐见 `Figma/_resources.md`（GitLab Pajamas UI Kit、OhShot Agents、Data Visualization UI Kit、Project Timeline Template 等）。
2. **Penpot Labyrinth UI FREE Kit**（62.8 MB，超 50 MB 阈值，仅记链接）。
3. **design.gitlab.com 文档站源码**（下载至 52 MB 仍在增长，为文档站源码非设计文件，按规则仅记链接）。
4. **GitLab Pajamas UI Kit (Figma)**：`.fig` 需 Figma 端获取，含 Data Visualization / Component library / Product Icons 多个文件。
5. **Gitee / GitCode / Codeberg 整包资源**（RemixIcon、TDesign Icons、DataRoom、go-view）：为代码工程整包，非可直接编辑设计文件，仅记链接。
6. **Grafana.com 社区看板 #25513、#23958**：需 Grafana 导入，License 随作者声明。

---


# ====== Penpot ======

# Penpot 开源 UI/UX 设计资源清单（项目进程可视化 · 素材收集）

> 范围：Penpot 平台与 Dashboard / Design System / Data Visualization & Charts / Wireframe / Project Dashboard / Process mapping 相关的可下载原始设计文件。
> 主来源：官方仓库 [`penpot/penpot-files`](https://github.com/penpot/penpot-files)（公开发布的 .penpot 设计文件与资产）。
> 仓库整体 License：**Creative Commons Attribution 4.0 International (CC BY 4.0)**（见仓库 README；个别文件随附独立 LICENSE，已在表中注明）。
> 采集日期：2026-09-28。.penpot 文件为可导入 Penpot 的设计包，全部经校验非空、字节数与上游一致。

## 一、已下载文件（已保存到本目录）

| 名称 | 来源 | 下载地址 | 文件（类型 / 文件名 / 大小） | License | 状态 |
|---|---|---|---|---|---|
| Dashboard UI Kit – Free Admin Dashboard（ByeWind，含图表/卡片/侧栏） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Dashboard%20UI%20Kit%20-%20Dashboard%2C%20Free%20Admin%20Dashboard%20(Community).penpot | .penpot / dashboard-ui-kit-byewind.penpot / 18.07 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Dashboard UI Starter Kit | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Dashboard%20UI%20Starter%20Kit.penpot | .penpot / dashboard-ui-starter-kit.penpot / 1.69 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Data Visualization Graphs & Charts Kit（社区，折线/柱状/饼图组件） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Data%20Visualization%20Graphs%20_%20Charts%20Kit%20(Community).penpot | .penpot / data-viz-graphs-charts-kit.penpot / 4.45 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| 59 Charts UI Responsive Components（Chart.js / Chartist / ApexCharts / Recharts 风格组件） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/59%20Charts%20UI%20Responsive%20Components%20Chart.js%20Chartist%20Apex%20Charts%20and%20Recharts%20(Community).penpot | .penpot / charts-ui-59-components.penpot / 25.85 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| SaaS Dashboard UI Kit | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/SaaS%20Dashboard%20UI%20Kit.penpot | .penpot / saas-dashboard-ui-kit.penpot / 19.46 MB；附 LICENSE / saas-dashboard-ui-kit.LICENSE | **MIT**（Copyright 2025 SaaS Design，随附 LICENSE） | 已下载（zip 校验通过） |
| Sales Dashboard Example Template（含饼图组件，对应社区教程） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/sales-dashboard-example-template.penpot | .penpot / sales-dashboard-example-template.penpot / 9.82 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| OSS Product Management Processes（产品/项目管理流程模板） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/OSS-Product%20management-processes.penpot | .penpot / oss-product-management-processes.penpot / 8.22 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| BPMN Business Process Model & Notation Kit（业务流程建模/流程图） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Business%20Process%20Model%20and%20Notation%20BPMN%20Kit.penpot | .penpot / bpmn-basic-mapping-kit.penpot / 1.02 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Pencil – Penpot 官方设计系统 | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Pencil-Penpot-Design-System.penpot | .penpot / pencil-penpot-design-system.penpot / 35.82 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Penpot Design System v2.1 | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Penpot%20-%20Design%20System%20v2.1.penpot | .penpot / penpot-design-system-v2.1.penpot / 13.52 MB | CC BY 4.0 | 已下载（新版非 zip 容器，字节数与上游一致） |
| Penpot Design System v1 | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Penpot-Design-system.penpot | .penpot / penpot-design-system-v1.penpot / 5.55 MB | CC BY 4.0 | 已下载（新版非 zip 容器，字节数与上游一致） |
| @shadcn/ui – Design System（社区） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/%40shadcn_ui%20-%20Design%20System%20(Community).penpot | .penpot / shadcn-ui-design-system.penpot / 12.97 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Backstage Design System（社区，开发者门户/控制台风格） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Backstage%20Design%20System%20(Community).penpot | .penpot / backstage-design-system.penpot / 35.54 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Wireframing Kit v1.1（官方线框套件） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Wireframing%20kit%20v1.1.penpot | .penpot / wireframing-kit-v1.1.penpot / 2.55 MB | CC BY 4.0 | 已下载（新版非 zip 容器，字节数与上游一致） |
| Minimalist Wireframing Kit（极简线框） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/minimalist-wireframing-kit.penpot | .penpot / minimalist-wireframing-kit.penpot / 8.08 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Whiteboarding & Mapping Kit（白板/项目地图/流程映射） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Whiteboarding-mapping-kit.penpot | .penpot / whiteboarding-mapping-kit.penpot / 1.39 MB | CC BY 4.0 | 已下载（新版非 zip 容器，字节数与上游一致） |
| User Flow Elements（用户流程图元素） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/user-flow-elements.penpot | .penpot / user-flow-elements.penpot / 0.31 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Ultimate Whiteboard Kit Templates（白板模板集） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/ultimate-whiteboard-kit-templates.penpot | .penpot / ultimate-whiteboard-kit.penpot / 4.64 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| Design Tokens Starter Kit v3 | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Tokens%20starter%20kit%20v3.penpot | .penpot / tokens-starter-kit-v3.penpot / 2.59 MB | CC BY 4.0 | 已下载（zip 校验通过） |
| CoreUI DesignSystem DEMO（控制台/后台设计系统） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/CoreUI%20DesignSystem%20(DEMO).penpot | .penpot / coreui-designsystem-demo.penpot / 39.80 MB；附 LICENSE / coreui-designsystem-demo.LICENSE | CC BY 4.0（随附 LICENSE） | 已下载（zip 校验通过） |

## 二、仅记录链接（同仓库相关但本次未下载）

| 名称 | 来源 | 下载地址 | 文件（类型 / 大小） | License | 状态 |
|---|---|---|---|---|---|
| Labyrinth UI FREE Kit（线框/UI） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Labyrinth%20UI-FREE-v1.0.penpot | .penpot / 62.8 MB（超 50MB 阈值，仅记录） | CC BY 4.0 | 仅记录 |
| Bootstrap 5 UI Kit（社区） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Bootstrap%205%20UI%20Kit%20(Community).penpot | .penpot / 15.3 MB | CC BY 4.0 | 仅记录 |
| Material Design 3 | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Material%20Design%203.penpot | .penpot / 17.1 MB | Material-Design-3.LICENSE（Apache-2.0 衍生） | 仅记录 |
| Nextcloud Design System | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Nextcloud%20design%20system.penpot | .penpot / 19.9 MB | CC BY 4.0 | 仅记录 |
| CoreUI Icon Pack | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/CoreUI%20Icon%20Pack.penpot | .penpot / 20.7 MB | CC BY 4.0 | 仅记录 |
| Ant Design UI Kit Lite | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Ant-Design-UI-Kit-Lite.penpot | .penpot / 2.7 MB（随附 Ant-Design-UI-Kit-Lite.LICENSE） | MIT（Ant Design） | 仅记录 |
| Essential UI Kit（社区） | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Essential%20UI%20-%20Figma%20Ui%20Kit%20(Community).penpot | .penpot / 5.4 MB | CC BY 4.0 | 仅记录 |
| Phosphor Icons | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Phosphor%20Icons.penpot | .penpot / 37.3 MB | MIT（Phosphor） | 仅记录 |
| Bootstrap Icons | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Boostrap%20Icons.penpot | .penpot / 1.7 MB（随附 Bootstrap Icons.LICENSE） | MIT | 仅记录 |
| Lucide Icons | penpot/penpot-files | https://github.com/penpot/penpot-files/blob/main/Lucide-icons.penpot | .penpot / 1.9 MB | ISC（Lucide） | 仅记录 |
| Penpot 官方 Libraries & Templates 入口 | Penpot Hub | https://penpot.app/penpothub | 在线浏览/导入（Dashboard UI Kit、Essential UI、Minimalistic Wireframing 等） | 各作者声明（多为 CC BY 4.0） | 仅记录 |
| Pencil 设计系统社区讨论（含导入说明） | Penpot Community | https://community.penpot.app/t/pencil-the-penpot-design-system/7152 | 论坛帖（对应 .penpot 已下载） | CC BY 4.0 | 仅记录 |
| Sales Dashboard 饼图示例教程 | Penpot Community | https://community.penpot.app/t/how-do-i-create-a-pie-chart/6121 | 论坛帖（模板已下载） | CC BY 4.0 | 仅记录 |

## 三、统计

- 已下载 .penpot 文件：**20 个**（合计约 251 MB）；另存随附 LICENSE 2 份。
- 仅记录链接：**13 条**。
- License 分布（已下载 20 个）：CC BY 4.0 = 19；MIT = 1（SaaS Dashboard UI Kit）。
- 校验：16 个为标准 zip 容器（PK 头校验通过）；4 个（Penpot DS v1 / v2.1、Wireframing v1.1、Whiteboarding-mapping）为新版非 zip 容器格式，字节数与上游 API 报告一致，判定为有效官方文件。
- 体积控制：所有已下载文件均 < 50 MB；超过阈值的 Labyrinth UI（62.8 MB）仅记录链接。

## 四、备注

- 导入方式：Penpot → 工作区 → Import 选择 .penpot 文件，导入后可转为共享库使用（见 https://help.penpot.app/user-guide/import-export/ ）。
- 仓库根 `.gitattributes` 声明 `*.penpot filter=lfs`，所有 .penpot 经 Git LFS 托管；raw 链接下载即为完整设计包。
- 本目录仅做素材搜集，未进行任何产品代码编写或界面设计。


# ====== GitLab ======

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


# ====== Figma ======

# Figma Community 设计资源清单（项目进程可视化 / Dashboard / AI Agent / Observability）

> 收集日期：2026-09-28
> 说明：Figma Community 的 `.fig` 文件**无法在命令行直接下载**（需 Figma 桌面端 / 浏览器登录后 "Duplicate / 打开"），故本目录以**记录链接**为主，**不伪造本地 .fig 文件**。每条均为 Figma Community 上免费可复制（Free / Open）的可编辑文件。
> 文件类型统一为 `.fig`（需在 Figma 中获取 / Duplicate 后编辑）。
> License 标注原则：官方开源设计系统按其已知开源协议标注；社区免费文件统一标 "Figma Community 免费可复制（商用授权以页面作者说明为准，待确认）"。

## 一、官方 / 知名开源设计系统（重点参考）

| 名称 | 来源/作者 | Figma 链接 | 文件类型 | License | 参考价值 |
|---|---|---|---|---|---|
| Material 3 Design Kit | Material Design (Google 官方) | https://www.figma.com/community/file/1035203688168086460/material-3-design-kit | .fig（需在 Figma 中获取） | Apache 2.0（Google 官方，免费） | 规范的状态反馈、导航、进度组件；官方设计 token 体系可借鉴 |
| Material UI for Figma (and MUI X) | MUI 官方 | https://www.figma.com/community/file/912837788133317724/material-ui-for-figma-and-mui-x | .fig（需在 Figma 中获取） | MIT（社区免费版） | 企业级后台组件、数据表格、日期/时间选择器、开关与徽章，适合中后台 |
| @shadcn/ui - Design System (Community) | Pietro Schirano (shadcn 作者) | https://www.figma.com/community/file/1269258692579992581/shadcn-ui-design-system-community | .fig（需在 Figma 中获取） | MIT | 现代简洁组件栈（Radix 风格），与 Tremor/shadcn 生态对齐，利于设计-实现一致 |
| shadcn/ui 官方开源 Figma Kit | Pietro Schirano | https://www.figma.com/community/file/1203061493325953101 | .fig（需在 Figma 中获取） | MIT | 官方维护的 shadcn 组件 Figma 镜像，props 与代码组件一一对应 |
| GitLab Pajamas UI Kit（社区版） | GitLab Product Design | https://www.figma.com/community/file/1270653225661403920/ui-kit | .fig（需在 Figma 中获取） | MIT / CC BY 4.0（GitLab 开源） | **最对口**：GitLab 自家项目进程 UI，含 Dashboard / Timeline / Status & Activity / 里程碑 |
| Untitled UI – FREE version (Community) | Jordan Hughes | https://www.figma.com/community/file/1157566976549584649/untitled-ui-free-version-community | .fig（需在 Figma 中获取） | 免费（个人/商用均可） | 高质量企业级设计系统，内置仪表盘、图表、侧边导航与数据卡片示例 |

## 二、AI Agent / 开发者 / 管理后台仪表盘

| 名称 | 来源/作者 | Figma 链接 | 文件类型 | License | 参考价值 |
|---|---|---|---|---|---|
| OhShot Agents - AI Agent Dashboard UI Kit (Free) | OhShot | https://www.figma.com/community/file/1661385966949633810/ohshot-agents-ai-agent-dashboard-ui-kit-free | .fig（需在 Figma 中获取） | Figma Community 免费可复制（商用授权以页面为准，待确认） | **直接对标 AI Agent 监控/任务仪表盘**：Agent 状态、任务流、运行指标 |
| AI Admin Dashboard App UI Kit（40+ 模板） | 社区作者 | https://www.figma.com/community/file/1336241437099455005/ai-admin-dashboard-app-ui-kit-figma-high-quality-40-figma-template | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | AI 管理后台多页面模板，覆盖列表/详情/设置等完整流程 |
| AI Assistant UI Kit | 社区作者 | https://www.figma.com/community/file/1369696289018306851/ai-assistant-ui-kit | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 对话/助手交互组件，可用于 Agent 与用户的交互面板 |
| Free Admin Dashboard | 社区作者 | https://www.figma.com/community/file/1391324549467752410/free-admin-dashboard | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 通用管理后台骨架，侧边栏+内容区布局参考 |
| Dashboard UI Kit - FREE Figma Admin Dashboard v1.0 | 社区作者 | https://www.figma.com/community/file/1468073213043637074/dashboard-ui-kit-free-figma-admin-dashboard-v1-0 | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 后台仪表盘组件与卡片，开箱即用 |
| DashStack - Free Admin Dashboard UI Kit | Seju | https://www.figma.com/community/file/1324762163080748317/dashstack-free-admin-dashboard-ui-kit-admin-dashboard-ui-kit-admin-dashboard | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 多布局后台，含表格/表单/图表等常见后台页面 |
| Able Pro Free Dashboard UI Kit | 社区作者 | https://www.figma.com/community/file/1465926670795160244/able-pro-free-dashboard-ui-kit | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 成熟后台模板，导航/卡片/图表组织方式可借鉴 |
| Free SaaS Dashboard UI Kit | 社区作者 | https://www.figma.com/community/file/1372878651733400539/free-saas-dashboard-ui-kit | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | SaaS 分析仪表盘，KPI 卡片+趋势图布局 |
| Free Figma Tailwind Admin Dashboard - TailAdmin | TailAdmin | https://www.figma.com/community/file/1214477970819985778/free-figma-tailwind-admin-dashboard-tailadmin | .fig（需在 Figma 中获取） | MIT / 免费（TailAdmin 开源） | Tailwind 风格，500+ UI 元素、7 套仪表盘模板 |
| Full Dashboard with Widgets, Sidebar, Charts, Graphs | 社区作者 | https://www.figma.com/community/file/1292982580121452290/full-dashboard-with-widgets-sidebar-charts-graphs | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 侧边栏 + Widget + 图表的完整仪表盘，接近 Observability 形态 |
| Socialstat [Dark] Multipurpose Dashboard [Freebie] | 社区作者 | https://www.figma.com/community/file/1111968745948355128/socialstat-dark-multipurpose-dashboard-freebie | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 暗色多用途仪表盘，数据指标卡 + 趋势图 |

## 三、时间线 / 项目管理 / 活动流

| 名称 | 来源/作者 | Figma 链接 | 文件类型 | License | 参考价值 |
|---|---|---|---|---|---|
| Project Timeline Template | 社区作者 | https://www.figma.com/community/file/1451249333594856550/project-timeline-template | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 项目时间线 / 进度甘特结构，直接服务于"项目进程可视化" |
| Ant Design-Chart (Community) | Ant Design 社区 | https://www.figma.com/community/file/1174718891224864570/ant-design-chart-community-community | .fig（需在 Figma 中获取） | MIT（Ant Design 生态） | Ant 图表组件，企业中后台最常见的图表/进度/看板风格 |

## 四、数据可视化 / 图表组件库

| 名称 | 来源/作者 | Figma 链接 | 文件类型 | License | 参考价值 |
|---|---|---|---|---|---|
| Data Visualization UI Kit | 社区作者（中文） | https://www.figma.com/community/file/1443181080526727191/data-visualization-ui-kit | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | **高度对口**：数据大屏/驾驶舱/平台，含图表、指标、地图、表格、时间线、导航及完整仪表盘示例 |
| Data Visualization Graphs / Charts Kit | DMS Studio | https://www.figma.com/community/file/1199721318228257277/data-visualization-graphs-charts-kit | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 可复用图表组件库，折线/柱状/面积/环形等 |
| Data Visualisation UI Kit｜150 Charts｜36 Types｜10 Palettes | 社区作者 | https://www.figma.com/community/file/1212977094398360391/data-visualisation-ui-kit-150-charts-36-chart-types-10-color-palettes | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 150 个图表、36 种类型、10 套配色，图表选型参考 |
| Figma Charts & Infographics UI kit (Community) | Setproduct | https://www.figma.com/community/file/1204665783973698091/figma-charts-infographics-ui-kit-community-community | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 组件化图表，明暗双主题，可替换数据 |
| 28 Chart UI Kit (Free) | 社区作者 | https://www.figma.com/community/file/1348923968742731012/28-chartui-kit-free | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 28 种常用图表，轻量参考 |
| Free Charts collection | 社区作者 | https://www.figma.com/community/file/1377638356186786686/free-charts-collection | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 免费图表集合 |
| Circle Charts | 社区作者 | https://www.figma.com/community/file/1196902965715509122/circle-charts | .fig（需在 Figma 中获取） | Figma Community 免费可复制（待确认） | 环形/进度图，适合任务完成率、进度占比 |

## 五、交叉引用（不在本目录下载，归对应子目录任务）

- **GitLab 仓库托管的 .fig 备份**（可直接下载的原始设计文件）：`gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit`，含 `Data Visualization.fig`、`📙 Component library.fig`、`GitLab Product Icons.fig`、`Patterns and Page Templates.fig`、`Design tokens.fig` 等。这些为 GitLab 官方开源（MIT/CC BY 4.0），但体积较大且属 GitLab 资产，**归 `GitLab/` 子目录任务下载整理**，此处仅记录链接。
- **Tremor / shadcn 官方 Dashboard 模板**：为代码模板（React + Tailwind，MIT），非 .fig 设计文件，见 `Other/` 方向收集。Tremor 官网：https://www.tremor.so/docs/getting-started/dashboard-template

## 统计
- 资源总数：**26** 条
- 其中标注明确开源协议（Apache 2.0 / MIT / 免费可商用）：**8** 条（Material 3、MUI、shadcn×2、GitLab Pajamas、Untitled UI、TailAdmin、Ant Design-Chart）
- 其余 18 条为 Figma Community 免费可复制文件，精确 License 需在各文件页面 "Duplicate 前" 查看作者声明（标为待确认）
- 本地已下载 .fig：**0**（Figma Community 文件需在 Figma 中 Duplicate 获取，未伪造本地文件）


# ====== Other ======

# Other 类开源 UI/可视化资源清单

> 范围：Codeberg / Gitee / GitCode / OpenTelemetry 生态 / 开源 SVG 图标库 / 图表主题。
> 目录：`E:\项目可视化\UI-Research\Other\`
> 采集日期：2026-09-28。所有"已下载"文件均经 Python 校验（非空、JSON 可解析、SVG 含 `<svg>` 头），共 161 个文件、约 644 KB，0 个坏文件。

## 一、已下载资源

| 名称 | 来源 | 下载地址 | 文件（类型 / 文件名 / 大小） | License | 状态 |
|---|---|---|---|---|---|
| OpenTelemetry Demo — APM Dashboard | open-telemetry/opentelemetry-demo (GitHub) | https://github.com/open-telemetry/opentelemetry-demo/blob/main/src/grafana/provisioning/dashboards/demo/apm-dashboard.json | JSON / grafana-dashboards/otel-demo_apm-dashboard.json / 72,752 B | Apache-2.0（仓库 LICENSE，已存 LICENSE-otel-demo.txt） | 已下载 |
| OpenTelemetry Demo — Demo Overview Dashboard | open-telemetry/opentelemetry-demo | 同上仓库 demo-dashboard.json | JSON / grafana-dashboards/otel-demo_demo-dashboard.json / 30,197 B | Apache-2.0 | 已下载 |
| OpenTelemetry Demo — Events by Name | open-telemetry/opentelemetry-demo | 同上 events-by-name.json | JSON / grafana-dashboards/otel-demo_events-by-name.json / 8,895 B | Apache-2.0 | 已下载 |
| OpenTelemetry Demo — Exemplars Dashboard | open-telemetry/opentelemetry-demo | 同上 exemplars-dashboard.json | JSON / grafana-dashboards/otel-demo_exemplars-dashboard.json / 11,128 B | Apache-2.0 | 已下载 |
| OpenTelemetry Demo — Spanmetrics Dashboard | open-telemetry/opentelemetry-demo | 同上 spanmetrics-dashboard.json | JSON / grafana-dashboards/otel-demo_spanmetrics-dashboard.json / 27,181 B | Apache-2.0 | 已下载 |
| OpenTelemetry Demo — Self Observability | open-telemetry/opentelemetry-demo | 同上 self-observability.json | JSON / grafana-dashboards/otel-demo_self-observability.json / 45,398 B | Apache-2.0 | 已下载 |
| OpenTelemetry Demo — Collector Dashboard | open-telemetry/opentelemetry-demo | 同上 opentelemetry-collector.json | JSON / grafana-dashboards/otel-demo_opentelemetry-collector.json / 213,264 B | Apache-2.0 | 已下载 |
| OpenTelemetry Service Dashboard（APM 服务视图） | cyrille-leclerc/opentelemetry-service-dashboard (GitHub) | https://github.com/cyrille-leclerc/opentelemetry-service-dashboard/blob/main/src/grafana/dashboard/opentelemetry-service.json | JSON / grafana-dashboards/otel-service_dashboard.json / 92,541 B | Apache-2.0（仓库 LICENSE，已存 LICENSE-otel-service-dashboard.txt） | 已下载 |
| Heroicons（Tailwind Labs SVG 图标集，dashboard/状态/图表相关采样 47 枚 outline SVG） | tailwindlabs/heroicons (GitHub, 默认分支 master) | https://github.com/tailwindlabs/heroicons/tree/master/src/24/outline | SVG×47 + LICENSE.txt / icons-heroicons/ / 共 32,063 B | MIT（Copyright Tailwind Labs, Inc.，已存 LICENSE.txt） | 已下载（采样；完整集 324+ 枚见仓库） |
| Tabler Icons（dashboard/图表/时间线相关采样 46 枚 outline SVG） | tabler/tabler-icons (GitHub) | https://github.com/tabler/tabler-icons/tree/main/icons/outline | SVG×46 + LICENSE.txt / icons-tabler/ / 共 26,046 B | MIT（Copyright Paweł Kuna，已存 LICENSE.txt） | 已下载（采样；完整集 6200+ 枚见仓库） |
| Lucide Icons（Feather 继任者，相关采样 44 枚 SVG） | lucide-icons/lucide (GitHub) | https://github.com/lucide-icons/lucide/tree/main/icons | SVG×44 + LICENSE.txt / icons-lucide/ / 共 18,608 B | ISC（Copyright Lucide Icons and Contributors，已存 LICENSE.txt） | 已下载（采样；完整集见仓库） |
| Apache ECharts 内置主题（dashboard 常用 10 套主题 JS） | apache/echarts (GitHub) | https://github.com/apache/echarts/tree/master/theme | JS×10（dark/vintage/shine/infographic/macarons/roma/tech-blue/blue/mint/gray）+ LICENSE.txt / echarts-themes/ / 共 58,915 B | Apache-2.0（已存 LICENSE.txt） | 已下载 |

## 二、仅记录（未本地下载，链接备查）

| 名称 | 来源 | 下载地址 | 文件 | License | 状态 |
|---|---|---|---|---|---|
| Remix Icon（开源 SVG 图标库，Gitee 镜像） | Gitee mirrors/RemixIcon | https://gitee.com/mirrors/RemixIcon | 全套 SVG/Sprite（数千枚，未整包下载） | Apache-2.0 | 仅记录 |
| TDesign Icons（腾讯 TDesign 图标库，Gitee 镜像） | Gitee mirrors_Tencent/tdesign-icons | https://gitee.com/mirrors_Tencent/tdesign-icons | 原始 SVG + 字体/雪碧图（未整包下载） | MIT（TDesign 图标协议） | 仅记录 |
| DataRoom（开源大屏设计器，含 G2Plot/ECharts 图表组件） | Gitee GCPAAS/DataRoom | https://gitee.com/GCPAAS/DataRoom | 代码工程（非设计文件） | 开源（仓库声明，待确认具体协议） | 仅记录 |
| go-view（低代码可视化大屏平台） | Gitee dromara/go-view | https://gitee.com/dromara/go-view | 代码工程（非设计文件） | MIT（仓库声明） | 仅记录 |
| Grafana.com 社区看板 #25513 Lightweight APM for OpenTelemetry | Grafana Labs Community Dashboards | https://grafana.com/grafana/dashboards/25513-lightweight-apm-for-opentelemetry/ | 社区 JSON（需 Grafana 导入，License 随作者声明） | License 未声明/待确认 | 仅记录 |
| Grafana.com 社区看板 #23958 Otel LGTM Observability | Grafana Labs Community Dashboards | https://grafana.com/grafana/dashboards/23958-otel-lgtm-observability/ | 社区 JSON | License 未声明/待确认 | 仅记录 |
| Codeberg 仓库搜索 | codeberg.org API | https://codeberg.org/api/v1/repos/search | 以 dashboard/design/ui-kit 等关键词检索，返回 0 条相关仓库 | — | 已检索，无命中 |
| GitCode（gitcode.csdn.net） | CSDN 国产开源社区 | https://gitcode.csdn.net | 未发现可直接下载的 dashboard 设计原始文件（多为代码镜像） | — | 已检索，无可下载设计资产 |

## 三、统计

- 已下载来源项目：6 个（OpenTelemetry Demo 看板族、OTel Service Dashboard、Heroicons、Tabler、Lucide、Apache ECharts 主题），合计 161 个本地文件。
- 仅记录来源：8 条。
- License 分布（按来源项目计）：
  - Apache-2.0：4（OTel Demo 看板族、OTel Service Dashboard、ECharts 主题、Remix Icon）
  - MIT：3（Heroicons、Tabler Icons、TDesign Icons）
  - ISC：1（Lucide）
  - MIT/开源（代码工程）：2（go-view、DataRoom）
  - License 未声明/待确认：2（Grafana.com 社区看板 #25513、#23958）
- 体积控制：最大单文件 opentelemetry-collector.json（213 KB），远低于 50 MB 阈值；图标库仅做相关采样而非整包（避免数千枚 SVG 膨胀）。
