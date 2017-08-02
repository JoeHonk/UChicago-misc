<?php

$account = 'UOCILL001';
$username = 'UOCILL001Api';
$password = '_PASSWORD_';
require 'CventClient.class.php';
$cc = new CventClient();
$cc->Login($account, $username, $password);

//$i = 0;
//$ids = $cc->GetRegistrations('fc4807ae-7f2c-4f29-958f-16bb477b944d');
$eid = htmlspecialchars($_GET['eid']);
$ids = $cc->GetRegistrations($eid);
$ids = $ids->SearchResult->Id;

$reglist = $cc->RetrieveRegistration($ids);

$garr = array();
$garrt = array();
$g = 0;
//$sids = strtoupper($sids);
$filename = htmlspecialchars($_GET['sids']);
$sids = explode('_', strtoupper(htmlspecialchars($_GET['sids'])));
//$emeriti = array('6229EF7A-0823-44C5-8D83-3979E9196ED3', '5DCC713B-6C81-4261-B40B-207DCFF78309');
foreach ($reglist as $reg) {
    foreach ($reg->OrderDetail as $regdetail) {
        if (in_array($regdetail->ProductId, $sids)) {
            foreach ($reg->EventSurveyDetail as $esd) {
                echo $esd->QuestionId."\n";
                echo $esd->AnswerText[0]."\n";
                if ($esd->QuestionId == '96C4FE0A-A308-4499-AF5A-281E22DBE9FC' && $esd->AnswerText[0] == 'Yes') {
                    $optin = 1;
                    break;
                } else {
                    $optin = 0;
                }
            }
            $e_title = $regdetail->ProductName;
            $guests .= $regdetail->FirstName.' '.$regdetail->LastName."\n";
            $fnln = $regdetail->FirstName.' '.$regdetail->LastName."\n";
            array_push($garrt, $fnln);
            if ($optin == 1) {
                array_push($garr, $fnln);
            }
            //end if opt-in
            ++$g;
        }
    }
}
//echo $e_title."\n";
//echo $g." guests, including:\n";
//echo $guests;

$gjson = array();
$garrt = array_unique($garrt);
array_push($gjson, count($garrt).' attendees, including:');
$garr = array_unique($garr);
$gjson = array_merge($gjson, $garr);

$gjson = json_encode($gjson);
print_r($gjson);
//print_r($garr);



$myfile = fopen('./json/'.$filename.'.json', 'w') or die('Unable to open file!');
if ($total < $lwcmin) {
    $gjson = '{"0":"This list will be updated daily."}';
    fwrite($myfile, $guests);
} else {
    fwrite($myfile, $gjson);
}
fclose($myfile);
