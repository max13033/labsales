<?

if(isset($_GET['field_1'])){
    $field_1 = $_GET['field_1'];
    file_put_contents('log.txt', "$field_1 \r\n", FILE_APPEND);
}




















?>