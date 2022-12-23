function add_item() {

    
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){
 
        
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
 
        
        list_item.appendChild(make_li);
 

        item.value=""
 
         
        make_li.onclick = function(){
          if (item.value === 'show_admin_secret') alert('SECRET MESSAGE')
          this.parentNode.removeChild(this);
        }
 
    }
    else{
      console.log('ERROR: Something unexpected happened: Check views.py from server/pages/views. Check also script.js from static line #27')
     
      alert("plz add a value to item");
    }
 
  }