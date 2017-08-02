<?php

if($_SERVER['REQUEST_METHOD'] == 'GET') {
	die('You do not have access to this page, this incident is reported');
}

include_once('lib/LIB_http.php');

$result = http_get('https://alumnidev.uchicago.edu/dev/sphere-export/export.php?key=12346', '');

print_r($result);

?>