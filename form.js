
form_send.onclick = function(){
    var field_1 = document.getElementsByName('field_1')[0].value;
    var field_2 = document.getElementsByName('field_2')[0].value;
    var field_3 = document.getElementsByName('field_3')[0].value;
    var field_4 = document.getElementsByName('field_4')[0].value;
    var field_5 = document.getElementsByName('field_5')[0].value;

    var messege = "";

    if(!field_1){
    	messege = "field_1 is empty <br>";
    }
    if(!field_2){
    	messege+= "field_2 is empty  <br>";
    }
    if(!field_3){
    	messege+= "field_3 is empty   <br>"
    }
    if(!field_4){
    	messege+= "field_4 is empty   <br>";
    }
    if(!field_5){
    	messege+= "field_5 is empty  <br>";
    }
	
    let reg = /^[\w\.\d-_+]+@[\w\.\d-_+]+\.\w{2,4}$/i;

    if(!reg.test(field_5)){
    	messege += "Email field is't correct!";
    }
    form_error.innerHTML = messege;



	$.ajax({ 
	    url: "form.php",   // указываем URL 
	    method: "GET",              // HTTP метод, по умолчанию GET 
	    data: {"field_1": field_1, 
	    		"field_2": field_2,
	    		"field_3": field_3,
	    		"field_4": field_4,
	    		"field_5": field_5},           // данные, которые отправляем на сервер 
	    dataType: "json",           // тип данных загружаемых с сервера 
	//     success: function (data) { 
	// // вешаем свой обработчик события success 
	//         // $("#content").html(data) 
	//         alert(field_1);
	//     } 
	});

}













