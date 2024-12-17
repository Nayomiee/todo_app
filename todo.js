let inputbox = document.getElementById("inputBox");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");

addbtn.addEventListener('click',function(){
//create a variable that stores the inputed value from the input box    
    let inputedValue = inputbox.value; 

// prevents adding empty tasks 
    if (inputedValue === "") return; 

//not necessary but this shows what has been inputed    
    console.log(inputedValue);

//create an li element
    let li = document.createElement("li");

// the text content should be the already stored value of the input box
    li.textContent = inputedValue;

//then nest the li to the ul element as the child element 
    list.appendChild(li);

//this should clear the input box after the task has been aded to the list 
    inputbox.value = " ";

//creating a span element that will hold all the buttons    
    let buttons = document.createElement("span");

 // create buttons
    let deletebtn = document.createElement("button");
    let editbtn = document.createElement("button");
    let donebtn = document.createElement("button"); 

//append all the buttons and span elements to their parent elements   
    li.appendChild(buttons);
    buttons.appendChild(deletebtn);
    buttons.appendChild(editbtn);
    buttons.appendChild(donebtn);

//adding the icons to the button elements
    deletebtn.innerHTML =`<i class="fas fa-trash-alt"></i>`;
    editbtn.innerHTML =`<i class="fas fa-edit"></i>`;
    donebtn.innerHTML =`<i class="fas fa-check-circle"></i>`;
    
//adding actions to the deletebtn
    deletebtn.addEventListener('click',function(){
        li.remove();// this will remove the li element and all the children element within 
    });

    //add actions to the edit btn 
    editbtn.addEventListener('click',function(){
        let editedInput=document.createElement("input");//creating a new variable that wil store the new input 
        console.log(li.firstChild.textContent);//this is the text node of the li element 
        editedInput.value = li.firstChild.textContent;// the new input box will contain the text node so it can be edited 
        li.textContent = "";//this will change the li content to be empty while the text is being edited 
        li.appendChild(editedInput);
        let savebtn = document.createElement("button");//create a button to save the edited input
        savebtn.innerHTML = `<i class="fas fa-check-circle"></i>`;
        li.appendChild(savebtn);//give the li the savebtn as it's child node 

        savebtn.addEventListener('click', function(){
            li.textContent = editedInput.value;//changes the li to the new text that has being created 
            li.appendChild(buttons);//this  shows the buttons again 
        })
    });
    donebtn.addEventListener('click',function(){
        li.style.textDecoration="line-through";//creates a line through the task 
        li.style.color="grey";//changes the color to grey
        list.appendChild(li);//sends the list item to the last on the list 
    })
});