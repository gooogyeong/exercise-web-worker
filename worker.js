// self = global object. just  like window
// 그냥 onmessage = () => { ... } 이렇게 서또 된다.
self.onmessage = (e) => {
  console.log(e.data)
  let sum = 0
  for (let i = 1; i <= 10000000000; i++)
    sum += i
  // alert (`The final sum is ${sum}`)
  self.postMessage(sum)
}
