<?

if(isset($_POST['id'])){
    echo "$_POST['id']";
}
file_put_contents('log.txt', "$_POST['id'] \r\n", FILE_APPEND);



















?>