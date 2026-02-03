const noteNameArr = {
  // 写在前面
  arr0: {
    floder: '0',
    content: [
      { name: '1.README', check: '✅️' },
      { name: '2.Typora', check: '✅️' },
      { name: '3.VSCode', check: '✅️' },
    ],
  },
  // 第一部分——前端基础
  arr1: {
    floder: '1',
    content: [
      { name: '1.HTML', check: '✅️' },
      { name: '2.CSS', check: '✅️' },
      { name: '3.JavaScript', check: '🟡' },
      { name: '4.JavaScript WebAPIs', check: '🟡' },
      { name: '5.JavaScript 进阶', check: '🟡' },
      { name: '5.ES6', check: '🟡' },
      { name: '6.tools', check: '✅️' },
    ],
  },
  // 第二部分——前端进阶
  arr2: {
    floder: '2',
    content: [
      { name: '1.CSS预处理器', check: '✅️' },
      { name: '2.JavaScript库', check: '🟡' },
      { name: '3.CSS框架', check: '❌' },
      { name: '4.字体图标库', check: '✅️' },
      { name: '5.正则表达式', check: '✅️' },
    ],
  },
  // 第三部分——前端工程化
  arr3: {
    floder: '3',
    content: [
      { name: '1.Nodejs', check: '❌' },
      { name: '2.Ajax', check: '❌' },
      { name: '3.Git', check: '✅️' },
      { name: '4.构建工具', check: '✅️' },
      { name: '5.TypeScript', check: '❌' },
    ],
  },
  // 第四部分——前端框架
  arr4: {
    floder: '4',
    content: [
      { name: '1.Vue', check: '❌' },
      { name: '2.React', check: '❌' },
      { name: '3.Angular', check: '❌' },
    ],
  },
  // 第五部分——前端优化
  arr5: {
    floder: '5',
    content: [
      { name: '计算机组成原理', check: '❌' },
      { name: '数据结构与算法', check: '❌' },
      { name: '操作系统', check: '❌' },
      { name: '计算机网络', check: '❌' },
    ],
  },
}

const thead = document.querySelectorAll('thead')
const tbody = document.querySelectorAll('tbody')
// 生成thead内容
thead.forEach((item) => {
  item.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <th>#</th>
      <th>md_url</th>
      <th>html_url</th>
    </tr>`,
  )
})
// 生成tbody内容
function initTbodyPages(arrays, tbodys) {
  arrays.content.forEach((item, index) => {
    const mdURL = `./notes/前端/${arrays.floder}/${item.name}.md`
    const htmlURL = `./notes/前端/${arrays.floder}/${item.name}.html`
    tbodys.insertAdjacentHTML(
      'beforeend',
      `<tr>
        <td>${index + 1}</td>
        <td><a href="${mdURL}" target="_blank">${item.check} ${item.name}.md</a></td>
        <td><a href="${htmlURL}" target="_blank">${item.check} ${item.name}.html</a></td>
      </tr>`,
    )
  })
}
function initAll() {
  initTbodyPages(noteNameArr.arr0, tbody[0])
  initTbodyPages(noteNameArr.arr1, tbody[1])
  initTbodyPages(noteNameArr.arr2, tbody[2])
  initTbodyPages(noteNameArr.arr3, tbody[3])
  initTbodyPages(noteNameArr.arr4, tbody[4])
  initTbodyPages(noteNameArr.arr5, tbody[5])
}
initAll()
