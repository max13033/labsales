
form_send.onclick = function(){
    var field_1 = document.getElementsByName('field_1')[0].value;
    var field_2 = document.getElementsByName('field_2')[0].value;
    var field_3 = document.getElementsByName('field_3')[0].value;
    var field_4 = document.getElementsByName('field_4')[0].value;
    var field_5 = document.getElementsByName('field_5')[0].value;

    var messege = "";

    if(!field_1){
    	messege = "field_1 is empty \n";
    }
    if(!field_2){
    	messege+= "field_2 is empty  \n";
    }
    if(!field_3){
    	messege+= "field_3 is empty   \n"
    }
    if(!field_4){
    	messege+= "field_4 is empty   \n";
    }
    if(!field_5){
    	messege+= "field_5 is empty   \n";
    }
    if(messege!=""){
    	alert(messege);
    }	
    let reg = /^[\w\.\d-_+]+@[\w\.\d-_+]+\.\w{2,4}$/i;

    if(!reg.test(field_5)){
    	alert("Email field is't correct!")
    }
}













