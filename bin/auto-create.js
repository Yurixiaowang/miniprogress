const { dashedName, getnerateFile, addPageToPagesJson } = require('./utils.js')
const type = process.argv[2] // 类型: page or component
const name = process.argv[3] // 页面的名称
const lowerDashedName = dashedName(name).toLocaleLowerCase() // 转为小写, Test-Page -> test-page

// 绝对路径
const path = require('path')

// 根路径
const rootPath = path.resolve('./')
// 页面的路径
const pagesPath = `${rootPath}/src/pages`
// component 的路径
const componentPath = `${rootPath}/src/components`
const { PageTemplate, ComponentTemplate } = require('./template')
switch (type) {
  case 'page':
    const path = `${pagesPath}/${lowerDashedName}/index.vue`  // 路径
    const content = PageTemplate(name)   // 内容
    getnerateFile(path, content) // 生成文件
    // TODO 把新建的页面的路由添加到 pages.json 里
    addPageToPagesJson(`pages/${lowerDashedName}/index`)
    break;
  case 'component':
    const _path = `${componentPath}/${lowerDashedName}/${lowerDashedName}.vue`
    const _content = ComponentTemplate(name)
    getnerateFile(_path, _content)
    break
}

process.exit(0)  // 成功并退出