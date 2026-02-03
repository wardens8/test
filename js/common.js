// 添加时间
function updateAll() {
  const now = new Date()
  const year = now.getFullYear().toString()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const date = now.getDate().toString().padStart(2, '0')
  const week = ['日', '一', '二', '三', '四', '五', '六']
  const day = now.getDay()
  const hour = now.getHours().toString().padStart(2, '0')
  const minute = now.getMinutes().toString().padStart(2, '0')
  const second = now.getSeconds().toString().padStart(2, '0')
  return `${year}年${month}月${date}日 星期${week[day]} ${hour}:${minute}:${second}`
}
const time = document.getElementById('time')
time.innerText = updateAll()
setInterval(() => {
  time.innerText = updateAll()
}, 1000)

// 返回顶部按钮
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top')
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300) {
      backToTop.style.opacity = 1
    } else {
      backToTop.style.opacity = 0
    }
  })
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
})
