import { defineConfig } from 'vitepress'
import mdPlugin from './plugins'

export default defineConfig({
  base: '/',
  title: 'SchemaDriven',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/guide/component-overview' },
      { text: '变更日志', link: '/guide/change-log' },
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '开发环境', link: '/guide/dev' },
          { text: '设计总则', link: '/guide/design-principle' },
          { text: '组件总览', link: '/guide/component-overview' },
          { text: '常见问题', link: '/guide/common-issue' },
        ],
      },
      {
        text: '高级',
        items: [
          {
            text: '表单',
            link: '/guide/form-design',
            items: [
              { text: '基本使用', link: '/components/basic-form' },
              { text: '组件方法', link: '/components/basic-form-method' },
              { text: '弹窗表单', link: '/components/basic-form-with-dialog' },
              { text: '分组表单', link: '/components/basic-form-with-group' },
              { text: '分步表单', link: '/components/basic-form-with-step' },
            ],
          },
          {
            text: '表格',
            items: [
              { text: '基本使用', link: '/components/basic-table' },
              {
                text: '组件方法',
                link: '/components/basic-table-method',
              },
            ],
          },
          {
            text: '描述',
            link: '/components/basic-description',
          },
        ],
      },
      {
        text: '内置',
        items: [
          {
            text: '数据收集',
            items: [
              {
                text: '输入框',
                items: [
                  {
                    text: '只读选择输入框',
                    link: '/components/basic-readonly-input',
                  },
                  {
                    text: '数字范围输入框',
                    link: '/components/basic-input-number-range',
                  },
                ],
              },
              { text: '单选', link: '/components/basic-radio-group' },
              { text: '多选', link: '/components/basic-checkbox-group' },
              { text: '下拉选择', link: '/components/basic-select' },
              { text: '树选择', link: '/components/basic-tree-select' },
              { text: '级联选择', link: '/components/basic-cascader' },
            ],
          },
          {
            text: '数据展示',
            items: [
              { text: '显示', link: '/components/basic-display' },
              // { text: '列表', link: '/components/basic-list' },
              { text: '图片', link: '/components/basic-image' },
              { text: '状态', link: '/components/basic-status' },
              { text: '复制', link: '/components/basic-copy' },
              { text: '时间', link: '/components/basic-time' },
            ],
          },
          {
            text: '功能组件',
            items: [
              {
                text: '弹窗',
                items: [
                  { text: '基本使用', link: '/components/basic-dialog' },
                  {
                    text: '组件方法',
                    link: '/components/basic-dialog-composable',
                  },
                ],
              },
              { text: '分页器', link: '/components/basic-pagination' },
              { text: '按钮组', link: '/components/basic-button-group' },
              { text: '导入', link: '/components/basic-import' },
              { text: '导出', link: '/components/basic-export' },
            ],
          },
        ],
      },
      // {
      //   text: '文档模板',
      //   link: '/components/template',
      // },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/qq-radio/vue-schema-driven-development' }],
  },
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md),
  },
})
