
<h1>Tracking Statistics page </h1>

<p>Choose statistics option below:</p>

<?
$passid = "id=$id";

$plugin = $GLOBALS["plugins"][$_GET["pi"]];
$menu = $plugin->adminmenu();
foreach ($menu as $page => $desc) {
	print PageLink2($page,$desc,$passid) . "<br><br><br>";
}

?>
