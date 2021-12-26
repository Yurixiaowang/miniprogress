// 将 TestPage 形式的 转为 test-page
const fs = require('fs')
const path = require('path')
const dashedName = name => {
  const replaced = name.replace(/([A-Z])/g, '-$&')  // 转为前面一个 - 的形式
  return replaced[0] === '-' ? replaced.slice(1) : replaced
}

function getnerateFile(path, content) {
  // '/path/path1/path2/index.uve'
  const pathList = path.split('/') //  ['', 'path', 'path1', 'path2', 'index.uve']
  let currentPath = ''

  for (let [index, i] of pathList.entries()) {
    if (index === 0) {
      currentPath = currentPath + i
    } else {
      currentPath = currentPath + '/' + i
    }
    if (currentPath.indexOf('.vue') > -1) {
      if (fs.existsSync(path)) {  // 检查文件是否存在，如果存在，则给出提示并退出
        console.error('文件已经存在，请重新命名')
        process.exit(0)
      } else {
        // 如果不存在，则创建
        fs.writeFileSync(currentPath, content, {
          encoding: 'utf-8'
        })
      }
      break
    }
    // 如果检查到目录不存在，则创建目录
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath)
    }
  }
}
function addPageToPagesJson(pagePath) {
  const jsonPath = `${path.resolve('./')}/src/pages.json`
  // 读取原有的 pages.json 的内容
  const content = fs.readFileSync(jsonPath, {
    encoding: 'utf-8'
  })

  const parseContent = JSON.parse(content)

  // 更新内容
  const newContent = JSON.stringify({
    ...parseContent,
    pages: parseContent.pages.concat({
      path: pagePath
    })
  })

  // 写入更新的内容
  fs.writeFileSync(jsonPath, newContent, {
    encoding: 'utf-8'
  })
}
module.exports = {
  dashedName,
  getnerateFile,
  addPageToPagesJson
}