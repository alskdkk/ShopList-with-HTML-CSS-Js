const btn = document.querySelector("#send")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const itemName = document.querySelector('#itemName')
  const value = itemName.value
  
  const newItem = document.createElement('li')
  newItem.className = 'flex'
  newItem.innerHTML = `
              <div class="checkbox-wrapper">
              <div class="checkbox-image">
              <input type="checkbox" name="" id="">
              </div>
              </div>
              <span class="shop-title">${value}</span>
              <img class="icon-list" src="assets/icons/trash.svg" alt="Ícone de Lixeira" data-action="remove">
            `

  document.getElementById('item-shopList').appendChild(newItem)

  document.getElementById('itemName').value = ""
})

const trash = document.getElementById("item-shopList")

trash.addEventListener("click", (event) => {
  if (event.target.dataset.action === "remove") {
    const listItem = event.target.closest("li"); 
    listItem.remove(); 
  }
});




