const sumBtn = document.querySelector('#sumBtn')
const bgBtn = document.querySelector('#bgBtn')
const sum = document.querySelector('.sum')
const worker = new Worker('worker.js')

sumBtn.addEventListener('click', () => {
  // let sum = 0
  // for (let i = 0; i < 10000000000; i++)
  //   sum += 1
  // alert (`The final sum is ${sum}`)
  sum.innerText = 'Calculating sum...'
  worker.postMessage('Start calculating!')
})

worker.onmessage = (message) => {
  sum.innerText = `Sum: ${message.data}`
}

bgBtn.addEventListener('click', () => {
  if(document.body.style.background !== 'green') document.body.style.background = 'green'
  else document.body.style.background = 'blue'
})
