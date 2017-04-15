var state = {
  items: []
};

var listForm = '#js-shopping-list-form';
$(listForm).submit(function(event){
	event.preventDefault();
	var listEntry = ($('#shopping-list-entry').val());
	state.items.push({
		name: listEntry,
		isComplete: false
	});
	
	var shoppingList = $('.shopping-list');
	createShoppingList(shoppingList, state.items)
})

function createShoppingList(shoppingList, stuff){
	stuff.forEach(function(item){
		shoppingList.append(createLi(item));
	}) 
}

function createLi(item){
	return `<li>
        <span class="shopping-item">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`

}

$('.shopping-item-toggle').click(function(event){
	$('.shopping-item').addClass('shopping-item__checked');
})


//state management



//DOM manipulation



// Event listeners


$(function() {
		
});