const container = document.querySelector('#container')
const p = document.createElement('p')
const input = document.createElement('input')

p.innerHTML = 'Parágrafo'

container.appendChild(p)
container.insertBefore(input, p)

p.setAttribute('class', 'paragrafo')
input.setAttribute('type', 'date')
