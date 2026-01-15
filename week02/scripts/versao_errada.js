const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____');
const li = document.createElement('li');
const deleteButton = document.createElement('button');



button.addEventListener('click', function() {
    if (input.value.trim() != ''){
        

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);
        return
        
    }
    else {
         alert('Please enter a chapter first');
        input.focus();   
        return; 
    }
});

deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
input.value = '';
input.focus();