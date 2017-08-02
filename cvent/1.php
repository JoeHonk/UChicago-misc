<?php

$account = 'UOCILL001';
$username = 'UOCILL001Api';
$password = '_PASSWORD_';
require 'CventClient.class.php';
$cc = new CventClient();
//print_r($cc);
$cc->Login($account, $username, $password);
//print_r($cc);
$events = $cc->GetUpcomingEvents();
//print_r($events);
//$test = $cc->GetEventById('7635e11d-d08f-4a57-b205-34ecbda304ef');
//print_r($test);
$regs = $cc->GetRegistrations('fc4807ae-7f2c-4f29-958f-16bb477b944d');
// print_r($regs);
//AW - fc4807ae-7f2c-4f29-958f-16bb477b944d

//joetest 23f95ebd-8b3a-4175-a0c1-cecd5098a424
//$test = $cc->SearchContactBySourceId('0006790556');
//$test = $cc->RetrieveRegistration(array($regs));

        foreach ($regs->SearchResult->Id as $id) {
            print_r($cc->RetrieveRegistration($id));
            ++$i;
            if ($i == 50) {
                break;
            }
        }

//print_r($test);

//print_r($test);

//c4c81bb9-46b8-43c6-9982-745c3888c0ae
//e14e2bb8-a412-406e-bdf2-fd890b6bd194

// /RetrieveCustom
//$test = $cc->RetrieveQuestion('7f116407-8ec9-48fa-998d-34b2a562b7a6');
//print_r($test);
// 8PN7TGYZX4M
// 9a33304e-2194-4206-b63a-eb3641567c80

//$test = $cc->RetrieveCustom(array('09671E14-8D3D-42DA-9EA7-055892E9E876'));
//print_r($test);

//print_r($events);

//$survey = $cc->RetrieveSurvey('9a33304e-2194-4206-b63a-eb3641567c80');
//print_r($survey);

//$invitee = $cc->RetrieveInvitee(array('e3d09e57-2dcc-45c8-bb4a-1a698a5f7aa6'));
//print_r($invitee);

//print_r($test);

//B129FB11-21B1-4C95-9C76-493D63CA79A9
//$invitee = $cc->RetrieveInvitee(array('BA39844E-0F91-41F1-9E16-ECE31FDA8B5D'));
//print_r($invitee);
;
