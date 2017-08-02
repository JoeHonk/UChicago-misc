<?php

$account='UOCILL001';
$username='UOCILL001Api';
$password= '_PASSWORD_';
require('CventClient.class.php');
$cc = new CventClient();
$cc->Login($account, $username, $password);


$i = 0;
$regs = $cc->GetRegistrations('23f95ebd-8b3a-4175-a0c1-cecd5098a424');
$ids = $regs->SearchResult->Id;

/*echo "Class of 1966, 50th Reunion Celebration\n";
foreach($od as $ra){
if (($ra->ProductId=='c4c81bb9-46b8-43c6-9982-745c3888c0ae') || ($ra->ProductId=='e14e2bb8-a412-406e-bdf2-fd890b6bd194')){
  echo $ra->FirstName." ".$ra->LastName."\n";
}}
echo "\n";

echo "Class of 1966, 50th Reunion Celebration\n";
foreach($od as $ra){
if (($ra->ProductId=='584a1887-1f0b-4866-b594-dc4b153647b3') || ($ra->ProductId=='3859e46f-8b9a-484f-96cb-158652620dcf')){
  echo $ra->FirstName." ".$ra->LastName."\n";
}}*/






//if (++$i == 5) break;

/*
<option value="6229ef7a-0823-44c5-8d83-3979e9196ed3:">   5:00 PM  Alumni Emeriti Dinner [$75.00]</option>
<option value="5dcc713b-6c81-4261-b40b-207dcff78309:">   5:00 PM  Alumni Emeriti Dinner [$65.00]</option>

	<option value="c4c81bb9-46b8-43c6-9982-745c3888c0ae:">   6:00 PM  Class of 1966, 50th Reunion Celebration [$65.00]</option>
	<option value="e14e2bb8-a412-406e-bdf2-fd890b6bd194:">   6:00 PM  Class of 1966, 50th Reunion Celebration [$75.00]</option>

	<option value="584a1887-1f0b-4866-b594-dc4b153647b3:">   6:00 PM  Class of 1971, 45th Reunion Celebration [$65.00]</option>
	<option value="3859e46f-8b9a-484f-96cb-158652620dcf:">   6:00 PM  Class of 1971, 45th Reunion Celebration [$75.00]</option>

	<option value="07bb2130-43bb-4966-802f-5a713f8d3d48:">   6:00 PM  Class of 1976, 40th Reunion Celebration [$45.00]</option>
	<option value="2decd621-f65a-4711-bd2f-360aeea6202b:">   6:00 PM  Class of 1976, 40th Reunion Celebration [$55.00]</option>

	<option value="f691e7b1-aa35-44b3-a527-8e984df8485a:">   6:00 PM  Class of 1981, 35th Reunion Celebration [$45.00]</option>
	<option value="3e91950b-c55b-4d9a-b352-35339b9c6dc6:">   6:00 PM  Class of 1981, 35th Reunion Celebration [$55.00]</option>

	<option value="4b657697-f3ed-4742-b4de-1838a8c6c0fd:">   6:00 PM  Class of 1986, 30th Reunion Celebration [$45.00]</option>
	<option value="62576ee0-15b1-4e10-96ff-0b1f981cc53e:">   6:00 PM  Class of 1986, 30th Reunion Celebration [$55.00]</option>

	<option value="c0fdab96-1653-467b-8165-734e07bdb48a:">   7:30 PM  Class of 1991, 25th Reunion Celebration [$55.00]</option>
	<option value="23406ba4-5143-43ea-843b-103f12c5b08c:">   7:30 PM  Class of 1991, 25th Reunion Celebration [$65.00]</option>

	<option value="3af1b66d-4661-4510-bf95-e233cecacbe0:">   7:00 PM  Class of 1996, 20th Reunion Celebration [$45.00]</option>
	<option value="f7ffe18f-78dc-4979-81a8-7782cbb77eac:">   7:00 PM  Class of 1996, 20th Reunion Celebration [$55.00]</option>

	<option value="9dbbad84-bf7e-4fa7-bccb-db1c5182e075:">   7:30 PM  Class of 2001, 15th Reunion Celebration [$45.00]</option>
	<option value="e78b10b4-a2f4-418d-aff3-f8d51d825e63:">   7:30 PM  Class of 2001, 15th Reunion Celebration [$55.00]</option>

	<option value="42920d43-7343-49b6-88dc-281275ae31cf:">   7:30 PM  Class of 2006, 10th Reunion Celebration [$45.00]</option>
	<option value="dcf3e273-900f-4e9a-b82c-142ece81c725:">   7:30 PM  Class of 2006, 10th Reunion Celebration [$55.00]</option>

	<option value="5ab49e76-6950-421a-a0c1-fe8b26eb61c6:">   7:30 PM  Class of 2011, 5th Reunion, Young Alumni Celebration [$25.00]</option>
	<option value="e0278263-16d5-4eed-ba50-a73fcc7074de:">   7:30 PM  Class of 2011, 5th Reunion, Young Alumni Celebration [$35.00]</option>

	<option value="c90b860c-f912-45a0-bb9b-2ac6599352e9:">   7:30 PM  Class of 2015, 1st Reunion, Young Alumni Celebration [$20.00]</option>
	<option value="2bca7233-cfa7-49ff-b7ce-eb59d2939aa5:">   7:30 PM  Class of 2015, 1st Reunion, Young Alumni Celebration [$30.00]</option>

	<option value="cde11b2c-0629-4c87-855a-e852f6781dcd:">   7:30 PM  Classes of 2007-10 &amp; 2012-14, Young Alumni Celebration [$25.00]</option>
	<option value="82426d73-53dd-4f0b-b18c-a7c146d1eced:">   7:30 PM  Classes of 2007-10 &amp; 2012-14, Young Alumni Celebration [$35.00]</option>
	<option value="82426d73-53dd-4f0b-b18c-a7c146d1eced:">   7:30 PM  Classes of 2007-10 &amp; 2012-14, Young Alumni Celebration [$35.00]</option>



















?>
