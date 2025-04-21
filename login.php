<?php
$post_from_json = file_get_contents("php://input");

if($post_from_json == "" or $post_from_json == null){
    header("HTTP/1.1 500 Internal Server Error");
}
else{
    header("HTTP/1.1 401 Unauthorized");
}

?>