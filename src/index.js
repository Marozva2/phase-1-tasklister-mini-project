document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handle(e.target.new_task_description.value)
    form.reset()
  })
});

function handle(to){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', toDelete)
  btn.textContent = 'x'
  p.textContent = `${to} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function toDelete(e){
  e.target.parentNode.remove()
}
