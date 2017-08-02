<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$wsdl = "KinteraConnect.wsdl";
$client = new SoapClient($wsdl);
//var_dump($client->__getFunctions());
$loginRequest = array(
            'LoginName' => 'sphereapi1',
            'Password' => '_PASSWORD_',
            //Set optional parameters if needs to
            'SessionTimeout'=>30,
            'UserID'=>0,
            'AccountID'=>0,
            'VirtualAccountID'=>0
);
$loginResult = $client->__soapCall('Login', array('parameters' => array('request' => $loginRequest)));
$sessionID = $loginResult->LoginResult->SessionID;
$ns = 'http://schema.kintera.com/API/';
$headerBody = array('SessionID' => $sessionID);
$header = new SoapHeader($ns, 'SessionHeader', $headerBody);
$client->__setSoapHeaders($header);

$eid='1143789';

$pagenum = 1;
while ($pagenum <= 5){
    $queryCondition = array(
        'QueryText' => 'SELECT * FROM Order WHERE EventID='.$eid.'', 
        'PageSize' => 100,
        'PageNumber' => $pagenum
        );
        //Make server Query call
    

$param = array('request' => new SoapVar( $queryCondition, SOAP_RPC, 'QueryRequest', 'http://schema.kintera.com/API/'));
$queryResponse = $client->__soapCall('Query', array('parameters' => $param)); 
$queryResponse = json_decode(json_encode($queryResponse),true);

//print_r($queryResponse);

    if($pagenum==1){$queryResult = $queryResponse['QueryResult'];}
    if($pagenum>1){$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);}
    $queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);
    $pagenum++;
}

$records = $queryResult;
$records = $queryResult['Records']['Record'];


$cids = '';
foreach( $records as $record )
{
    $cids.=$record["ContactID"].',';

}
$cids = rtrim($cids,',');



$pagenum = 1;
while ($pagenum <= 10){
    $queryCondition = array(
      'QueryText' => 'SELECT * FROM ContactProfile WHERE ContactID in ('.$cids.') ORDER BY ContactID ASC',
        'PageSize' => 5,
        'PageNumber' => $pagenum
        );
        //Make server Query call
$param = array('request' => new SoapVar( $queryCondition, SOAP_RPC, 'QueryRequest', 'http://schema.kintera.com/API/'));
$queryResponse = $client->__soapCall('Query', array('parameters' => $param)); 
$queryResponse = json_decode(json_encode($queryResponse),true);

//print_r($queryResponse);

    if($pagenum==1){$queryResult = $queryResponse['QueryResult'];}
    if($pagenum>1){$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);}
    $queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);
    $pagenum++;
}

$records = $queryResult;
$records = $queryResult['Records']['Record'];


$guests = array();
$total=0;
/*echo '<p>';
echo '<table border="1">';
echo '<tr><th>ContactID</th><th>Name</th><th>CelebrityFlag (radio)</th><th>OptInDirectoryFlag (checkbox)</th></tr>';*/
foreach( $records as $record )
{
    if($record["CelebrityFlag"]=='0'){
    /*echo '<tr>';
    echo '<td>'.$record["ContactID"].'</td>';
    echo '<td>'.$record["FullName"].'</td>';
    echo '<td>'.$record["CelebrityFlag"].'</td>';
    echo '<td>'.$record["OptInDirectoryFlag"].'</td>';
    echo '</tr>';*/
    array_push($guests,$record["FullName"]);
      $total=$total+1;

  }
}
/*
echo '</table>';
echo '</p>';
echo $total;
echo '<br>';
*/
//print_r($guests);
//echo json_encode($guests);
//echo json_encode($guests,JSON_FORCE_OBJECT);
//


$myfile = fopen("./json/1143789.json", "w")or die("Unable to open file!");
fwrite($myfile, json_encode($guests,JSON_FORCE_OBJECT | JSON_PRETTY_PRINT));
fclose($myfile);


?>