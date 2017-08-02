<?
print "<br /><p>Choose statistics option below:</p>";
$plugin = $GLOBALS["plugins"][$_GET["pi"]];
$menu = $plugin->adminmenu();
foreach ($menu as $page => $desc) {
  print PageLink2($page,$desc,"id=$id") . "<br><br>";
}
print "<br><br>";
?>

<table border=0>
 <tr><td width=450><h3>Listing statistics summary for all messages.</h3></td></tr>
</table><br>

<?php
$q = Sql_query('SELECT id FROM phplist_message ORDER BY id DESC');
while ($field = mySql_fetch_array($q)) {
$id = $field["id"];

 $message = Sql_query("SELECT * FROM ".$tables["message"].' WHERE id = '.$id);
 while ($field = mySql_fetch_array($message)) {
  $subject = $field["subject"];
  $fromfield = $field["fromfield"];
  $sent = $field["sent"];
  $processed = $field["ashtml"];
  $viewed = $field["viewed"];
  $bounced = $field["bouncecount"];
  if ($field["owner"] == $_SESSION["logindetails"]['id']) {
   $notowner = FALSE;
  }
}

 if( !$GLOBALS["require_login"] || $_SESSION["logindetails"]['superuser'] || !$notowner ) {

  print "<h2>General statistics for message number $id</h2>";

  $uniqueviews = Sql_Fetch_Row_Query("select count(userid) from {$tables["usermessage"]} where viewed is not null and messageid = ".$id);
  $openrate = 0;
  $bouncerate = 0;
  if ($processed) {
   $openrate = floor($uniqueviews[0] / ($processed-$bounced) * 100);
   $bouncerate = floor($bounced / $processed * 100);
  }
  $aveviews = 0;
  if ($uniqueviews[0]) {
   $aveviews = sprintf("%1.1f", ($viewed / $uniqueviews[0]));
  }


  print "<table border=0><tr><td>Subject:</td><td colspan=6>$subject</td></tr>";
  print "<tr><td>From:</td><td colspan=6>$fromfield</td></tr>";
  print "<tr><td>Time sent:</td><td colspan=6>$sent</td></tr>";
  print "<tr><td>Total sent:</td><td colspan=2>$processed</td><td width=20>&nbsp;</td><td>Total views:</td><td colspan=2>$viewed</td></tr>";
  print "<tr><td>Total bounces:</td><td>$bounced</td><td>&nbsp;($bouncerate% bounce rate)</td><td width=20>&nbsp;</td><td>Average views:</td><td colspan=2>$aveviews</td></tr>";
  print "<tr><td>Total delivered:</td><td colspan=2>".($processed-$bounced)."</td></tr>";
  print "<tr><td>Total unique views:&nbsp;</td><td>$uniqueviews[0]</td><td>&nbsp;($openrate% open rate)</td></tr>";
  print '<tr><td><a href="/lists/admin/?page=openstats&id=&pi=statistics&mid='.$id.'">View complete stats</a></td></tr>';
  print "</table>";

/*
  $sqlv = 'SELECT * ' . ' FROM `'.$table_prefix.'usermessage` ' . ' WHERE messageid = ' . $id . ' AND viewed IS NOT NULL';

  $result = Sql_query($sqlv);

  print "<br /><a name='viewed'></a><br /><b>Users who have viewed message number $id</b>&nbsp;&nbsp;&nbsp;&nbsp;";
  print "<a href='#notviewed' title='Users who have not viewed'>[not viewed]</a><br /><br />";

  print "<table border=1><tr>";
  print "<td>Message Id</td><td>User Id</td><td>Viewed</td><td>Email</td></tr>";

  $some = 0;
  while ($user = mySql_fetch_array($result)) {
   $some++;
   print "<tr><td>$user[0]</td><td>$user[1]</td><td>$user[3]</td>";
   $val = $user[1];
   $sqlx = "SELECT * FROM `".$usertable_prefix."user` WHERE `id` =$val";
   $resultx = Sql_query($sqlx);
   $userx = mysql_fetch_array($resultx);

   for ($n = 0; $n < 4; $n++) {
    $Line = each ($userx);
    if ($Line[key] == "1") {
     print "<td><a href='./?page=user&id=$val'>$Line[value]</a></td></tr>";
    }
   }
  }
  print "</table>";

  $sqlnv = 'SELECT * ' . ' FROM `'.$table_prefix.'usermessage` ' . ' WHERE messageid = ' . $id . ' AND viewed IS NULL';

  $result = Sql_query($sqlnv);

  print "<br /><br /><a name='notviewed'></a><br /><b>Users who have not viewed message number $id</b>&nbsp;&nbsp;&nbsp;&nbsp;";
  print "<a href='#viewed' title='Users who have viewed'>[viewed]</a><br /><br />";

  print "<table border=1><tr>";
  print "<td>Message Id</td><td>User Id</td><td>Viewed</td><td>Email</td></tr>";

  $some = 0;
  while ($user = mySql_fetch_array($result)) {
   $some++;
   print "<tr><td>$user[0]</td><td>$user[1]</td><td>$user[3]</td>";
   $val = $user[1];
   $sqlx = "SELECT * FROM `".$usertable_prefix."user` WHERE `id` =$val";
   $resultx = Sql_query($sqlx);
   $userx = mysql_fetch_array($resultx);

   for ($n = 0; $n < 4; $n++) {
    $Line = each ($userx);
    if ($Line[key] == "1") {
     print "<td><a href='./?page=user&id=$val'>$Line[value]</a></td></tr>";
    }
   }
  }
  print "</table>";
*/
 } else {
  if ($notowner) {
   print "Sorry, you did not send that message.<br />";
  }
 }
}

print "<br /><br /><br /><p>Choose statistics option below:</p>";

$plugin = $GLOBALS["plugins"][$_GET["pi"]];
$menu = $plugin->adminmenu();
foreach ($menu as $page => $desc) {
	print PageLink2($page,$desc,"id=$id") . "<br>";
}
print "<br /><a href='#top' title='Back to top'>[top]<br />";
print "<br /><br />";

?>
