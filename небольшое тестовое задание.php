Допустим есть некая форма :

<form>
	
	<input type="hidden" name="send_url" value="...">
	
	<input type="text" name="field_1">
	<input type="text" name="field_2">
	<input type="text" name="field_3">
	<input type="text" name="field_4">
	<input type="mail" name="field_5">
	
	<span id="form_send">Отправить</span>
	
	<div id="form_error"></div>
	
</form>

И есть три файла :

-- form.js
-- form.php
-- log.txt

1. Напишите JS скрипт form.js в котором при нажатии на <span id="form_send"> будет осуществлятся проверка полей формы на заполнение, валидация поля с типом mail на коректность ввода почты, при наличии не заполненных полей или ошибки поля почты вывод ошибки в блок <div id="form_error">, при отсутствии ошибок передача данных формы в php скрипт form.php с помощью AJAX.

2. Напишите php скрипт form.php который будет принимать данные формы дописывать данные формы в текстовый лог фвайл log.txt и отправлять данные формы на URL указанный в поле формы "send_url" по средствам CURL ( методом POST в JSON формате )

