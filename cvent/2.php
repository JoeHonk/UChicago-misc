<?php

$account = 'UOCILL001';
$username = 'UOCILL001Api';
$password = '_PASSWORD_';
require 'CventClient.class.php';
$cc = new CventClient();
$cc->Login($account, $username, $password);

$i = 0;
$regs = $cc->GetRegistrations('fc4807ae-7f2c-4f29-958f-16bb477b944d');
$ids = $regs->SearchResult->Id;

$ods = array();
//foreach ($ids as $id) {
    $od = $cc->RetrieveRegistration($ids);
    print_r($od);
    $od = array_shift($od);
    if (is_array($od->OrderDetail)) {
        $od = $od->OrderDetail;

//print_r($od);
if ($i == 0) {
    $ods = $od;
}
        if ($i > 0) {
            $ods = array_merge_recursive($ods, $od);
        }
//print_r($ods);
    }
    if (++$i == 10) {
        break;
    }
//}

foreach ($ods as $ra) {
    if (($ra->ProductId == '6229EF7A-0823-44C5-8D83-3979E9196ED3') || ($ra->ProductId == '5DCC713B-6C81-4261-B40B-207DCFF78309')) {
        $guests .= $ra->FirstName.' '.$ra->LastName."\n";
        ++$g;
    }
}
echo "Alumni Emeriti Dinner\n";
echo $g." guests, including:\n";
echo $guests;

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
print_r($ids);
print_r($ods);
