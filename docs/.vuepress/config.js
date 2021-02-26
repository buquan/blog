module.exports = {
  base: '/blog/',
  title: 'Aluo ~',
  description: '阿罗的个人学习点滴',
  plugins:[
    {
      name:"page-plugin",
      globalUIComponents:["fixed"], 
    },
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],   // 加载进度条
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '博客', link: '/accumulate/' }, // 内部链接 以docs为根目录
      { text: '算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      // { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
      // 下拉列表
      // {
      //   text: 'GitHub',
      //   items: [
      //     { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
      //     {
      //       text: '算法仓库',
      //       link: 'https://github.com/OBKoro1/Brush_algorithm'
      //     }
      //   ]
      // }
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
        ["", "博客"], // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '个人学习',
          children: [
            ['/accumulate/private/first', '第一篇'],// 以docs为根目录来查找文件 
            ['/accumulate/private/second', '第二篇']// 以docs为根目录来查找文件 
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        },
        {
          title: '好文记录',
          children: [
            ['/accumulate/auth/demo', '好文记录1 demo other author']// 以docs为根目录来查找文件 
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        }
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/algorithm/': [
        ["", "算法"],
        {
          title: '基础算法',
          children: [
            ['/algorithm/simple/test', '基础算法1']
          ]
        },
        {
          title: '进阶算法',
          children: [
            ['/algorithm/more/test', '进阶算法1']
          ]
        }
      ]
    }
  }
}