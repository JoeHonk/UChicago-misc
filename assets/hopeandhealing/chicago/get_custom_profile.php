<?php

ob_start();
set_time_limit(900);
error_reporting(0);
include_once 'lib/kennect.php';

$sphere_username = 'sphereapi1';
$sphere_password = '_PASSWORD_';
$sphere_account_id = '0';

function send_response($resp)
{
    return $_GET['jsonp_callback'].'('.json_encode($resp).');';
}
function getProfile($cid)
{
    global $api;
    $profile = $api->query("SELECT * FROM ContactProfile WHERE ContactID = '".$cid."'");

    return $profile['Records']['Record'];
}
function getCustomProfile($cid)
{
    global $api;
    $custom_profile = $api->query('SELECT * FROM ContactCustomProfileField WHERE (FieldID = 6079656 AND ContactID = '.$cid.')');

    return $custom_profile['Records']['Record'];
}

function getAlternateID($cid)
{
    global $api;
    $AlternateID = $api->query('SELECT * FROM ContactProfile WHERE (ContactID = '.$cid.')');
    //print_r($AlternateID['Records']['Record']['AlternateID']);
    return $AlternateID['Records']['Record']['AlternateID'];
}
function getCustomProfileValue($field, $haystack)
{
    if (isset($haystack['FieldID'])) {
        if ($haystack['FieldID'] == $field) {
            return $haystack['Value'];
        }
    } else {
        foreach ($haystack as $k => $v) {
            if ($v['FieldID'] == $field) {
                return $v['Value'];
            }
        }
    }
}

$sid = trim($_GET['sid']);

$api = new kennect(array('LoginName' => $sphere_username, 'Password' => $sphere_password, 'UserID' => $sphere_account_id));
$cprofile = getCustomProfile($sid);
$cause_field = getCustomProfileValue('6079656', $cprofile);
$cause_field = str_replace("'", "\\'", $cause_field);
$alt_id = getAlternateID($sid);

$cause_fund_array = array(
//old funds
    'Pediatric Cancer Research' => '33390-4250-1',
    'Ted Mullin Fund' => '33523-4250-3',
    'Peds GI Social Work' => '33567-4250-3',
    'General Pediatric Research' => '33894-4250-1',
    "Comer Children\'s Hospital" => '33983-6112-1',
    'Neuroblastoma Research' => '33710-4250-3',

//new funds
    'Academic Pediatrics' => '33122-4250-3',
    'Adoption Center' => '33455-4250-2',
    'Allergy and Immunology' => '33761-4250-4',
    'Cancer and Blood Diseases' => '33390-4250-1',
    'Cardiology' => '33198-4250-3',
    'Child Life and Family Education' => '33702-6112-1',
    'Child Protective Services' => '33896-4250-3',
    'Congenital Anomalies' => '33951-4250-3',
    'Critical Care' => '33901-4250-2',
    'Developmental and Behavioral Pediatrics' => '33758-4250-2',
    'Emergency Medicine' => '33750-4250-3',
    'Endocrinology/Diabetes' => '33903-4250-2',
    'Gastroenterology, Hepatology, and Nutrition' => '33684-4250-4',
    'General Support' => '33415-4250-2',
    'Infectious Disease' => '33907-4250-4',
    'Kennedy Intellectual and Developmental Disabilities Research Center' => '33660-4250-4',
    'Kidney Disease' => '33912-4250-3',
    'Neonatal Intensive Care Unit (NICU)' => '30268-6112-1',
    'Neonatology' => '33926-4250-3',
    'Neurology' => '33658-4250-2',
    'Nursing' => '30269-6112-1',
    'Pediatric Intensive Care Unit (PICU)' => '30267-6112-1',
    'Pulmonary and Sleep Medicine' => '33498-4250-2',
    'Social Work' => '30270-6112-1',
    'Sports Medicine' => '33919-4250-1',
    'Surgery' => '33007-4250-3',
    'Other' => '39899-BSD1-1',
);
//$response = array('supporter_id' => $sid, 'cause_value' => $cause_field, 'fund_id' => $cause_fund_array[$cause_field]);
$response = array('supporter_id' => $sid, 'cause_value' => $cause_field, 'fund_id' => $cause_fund_array[$cause_field], 'alt_id' => $alt_id);

echo send_response($response);
exit;
