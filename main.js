function setRandomBlocks() {
    document.getElementById('container')
    
    for (newDiv = 0; newDiv < 25; newDiv++) {
      let initDiv = document.createElement('div')
      initDiv.style.width = '50px'
      initDiv.style.height = '50px'
      initDiv.style.borderRadius = '100px'
      initDiv.style.boxShadow = '15px 25px 10px -1px rgba(0,1,6,.5)'
      initDiv.style.marginRight = '5px'
      initDiv.style.marginBottom = '5px'

      setInterval (() => {
        initDiv.style.background = '#' +Math.floor(Math.random() * Math.pow(256, 3)).toString(16)
      }, 1000)
    
      container.append(initDiv)
      }
    }
    
 btnCreate = document.querySelector('.create').addEventListener('click', setRandomBlocks)

