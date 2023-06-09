// Add event listeners for drag and drop events
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.items img');
    
    // Add draggable attribute and event listeners to each item
    items.forEach(item => {
      item.setAttribute('draggable', 'true');
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
  
    // Add event listeners to the containers
    const containers = document.querySelectorAll('.container .items');
    containers.forEach(container => {
      container.addEventListener('dragover', dragOver);
      container.addEventListener('dragenter', dragEnter);
      container.addEventListener('dragleave', dragLeave);
      container.addEventListener('drop', dragDrop);
    });
  });
  
  let draggedItem = null;
  
  // Drag events
  function dragStart() {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none';
    }, 0);
  }
  
  function dragEnd() {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  }
  
  // Drop events
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('success');
  }
  
  function dragLeave() {
    this.classList.remove('success');
  }
  
  function dragDrop() {
    this.classList.remove('success');
    this.appendChild(draggedItem);
  }
  
  // Reset containers
  const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetContainers);
const firstContainer = document.querySelector('.container .items:first-child');
const originalItems = Array.from(firstContainer.children);


function resetContainers() {
    const containers = document.querySelectorAll('.container .items');
    
    // Clear the second container
    const secondContainer = containers[1];
    while (secondContainer.firstChild) {
        secondContainer.firstChild.classList.remove('success');
        firstContainer.appendChild(secondContainer.firstChild);
    }
  
  
 
    originalItems.forEach(item => {
      item.style.display = 'block';
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
      containers[0].appendChild(item);
    });
  }
  