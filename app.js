
//state management

var state = {
  items: []
};

var shoppingList = $('.shopping-list');

var listForm = '#js-shopping-list-form';


function addItemToState(item) {
	state.items.push(item);
}

function toggleChecked(index) {
	var item = state.items[index];
	item.isComplete = !item.isComplete;
}

function deleteItem(index) {
	state.items.splice(index, 1);
}
//DOM manipulation

function renderShoppingList(shoppingList, stuff){
	shoppingList.html('');
	stuff.forEach(function(item){
		shoppingList.append(createLi(item));
	}) 
}


function createLi(item){
	var isComplete = item.isComplete ? 'shopping-item__checked' : '';
	return `<li class="li">
        <span class="shopping-item ${isComplete}">${item.name}</span>
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


// Event listeners


$(function() {
	$(listForm).submit(function(event){
		event.preventDefault();
		var listEntry = ($('#shopping-list-entry').val());
		addItemToState({name: listEntry, isComplete: false});
		renderShoppingList(shoppingList, state.items)
	})

	$('ul').on('click', '.shopping-item-toggle', function(event){
		toggleChecked($(this.parentElement.parentElement).index());
		renderShoppingList(shoppingList, state.items);
	});


	$('ul').on('click', '.shopping-item-delete', function(event) {
		deleteItem($(this.parentElement.parentElement).index());
		renderShoppingList(shoppingList, state.items);
	});

});