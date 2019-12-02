$.ajax({ 
    url: "/get-my-page.html",   // указываем URL 
    method: "GET",              // HTTP метод, по умолчанию GET 
    data: {"id": 42},           // данные, которые отправляем на сервер 
    dataType: "html",           // тип данных загружаемых с сервера 
    success: function (data) { 
// вешаем свой обработчик события success 
        $("#content").html(data) 
    } 
});