<?

if(isset($_GET['field_1'])){
    $field_1 = $_GET['field_1'];
    $field_2 = $_GET['field_2'];
    $field_3 = $_GET['field_3'];
    $field_4 = $_GET['field_4'];
    $field_5 = $_GET['field_5'];

    file_put_contents('log.txt', "field_1 = $field_1, field_2 = $field_2, field_3 = $field_3, field_4 = $field_4, Email = $field_5 \r\n", FILE_APPEND);
}




















?>