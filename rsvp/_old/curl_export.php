<?php

if($_SERVER['REQUEST_METHOD'] == 'GET') {
	die('You do not have access to this page, this incident is reported');
}

include_once('lib/LIB_http.php');

$result = http_get('http://k1.minuswarp.com/k1/export.php?key=12346', '');

print_r($result);

?>