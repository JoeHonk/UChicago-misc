<?php
            require_once('lib/nusoap.php');
            $wsdl = "KinteraConnect.wsdl";
            $client = new nusoap_client($wsdl,true);
            $client->soap_defencoding = 'UTF-8';
            $client->decode_utf8  = false;
            
            // Make Login call to get session ID
            $loginRequest = array(
            'LoginName' => 'sphereapi1',
            'Password' => '_PASSWORD_'
            );
            $loginResult = $client->call('Login', array('parameters' => array('request' => $loginRequest)));
            
            // Set session ID in the session header for subsequent Api calls
            $sessionID=$loginResult['LoginResult']['SessionID'];
            $sessionHeader =
            "<SessionHeader xmlns=\"http://schema.kintera.com/API/\"><SessionID>"
            .$sessionID.
            "</SessionID></SessionHeader>" ;
            $client->setHeaders($sessionHeader);

$eid='1143789';






$pagenum = 1;
while ($pagenum <= 5){
    $queryCondition = array(
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-11T00:00:00.00' ORDER BY DateUpdated DESC",    
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-22T02:00:00.00' AND BeneficiaryID IN (902273,377542,377466,388511,377544,385828,377474,377482,377484,905632,377496,377534,377572) ORDER BY DateUpdated DESC",    
        'QueryText' => 'SELECT * FROM Order WHERE EventID='.$eid.'', 
        'PageSize' => 100,
        'PageNumber' => $pagenum
        );
        //Make server Query call
    $queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
    print_r($queryRequest);
    $param = array('request' => $queryRequest);
    $queryResponse = $client->call('Query', array('parameters' => $param));
    //Print total records found
    //$queryResult = $queryResponse['QueryResult'];
    if($pagenum==1){$queryResult = $queryResponse['QueryResult'];}
    if($pagenum>1){$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);}
    //$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);
    $pagenum++;
}

$records = $queryResult;
$records = $queryResult['Records']['Record'];



/*

$queryCondition = array(
   'QueryText' => 'SELECT * FROM Order WHERE EventID='.$eid.'',
  // 'QueryText' => 'SELECT * FROM ContactProfile WHERE ContactID=236959890',
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount ASC',    
      //'QueryText' => "SELECT * FROM ContactSalutation",    
      //'QueryText' => "SELECT * FROM ContactCustomProfileField WHERE ContactID=423424123",    
     // 'QueryText' => "SELECT * FROM OrderDetail WHERE OrderID=47494977",    

  
    //'QueryText' => 'SELECT Order.*, ContactProfile.* FROM Order INNER JOIN ContactProfile ON Order.ContactID=ContactProfile.ContactID WHERE EventID=1138190',
    //'QueryText' => 'SELECT Order.ContactID, ContactProfile.FullName FROM ContactProfile INNER JOIN Order ON Order.ContactID=ContactProfile.ContactID',
    //'QueryText' => 'SELECT ContactID FROM Order',

      'PageSize' => 5,
      'PageNumber' => 1
);
             

//Make server Query call
$queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
$param = array('request' => $queryRequest);
$queryResponse = $client->call('Query', array('parameters' => $param));
//Print total records found
$queryResult = $queryResponse['QueryResult'];

//print_r($queryResult);/*

$records = array_shift($queryResult);
$records = $queryResult;
$records = $queryResult['Records']['Record'];

//print_r($records);
  */ 

/*
echo '<p>';
echo '<table border="1">';
echo '<tr><th>ContactID</th><th>EventID</th><th>OrderID</th></tr>';
foreach( $records as $record )
{
    echo '<tr>';
    echo '<td>'.$record["ContactID"].'</td>';
    echo '<td>'.$record["EventID"].'</td>';
    echo '<td>'.$record["OrderID"].'</td>';
    echo '</tr>';
    $cids.=$record["ContactID"].',';
}
echo '</table>';
echo '</p>';
*/
//print_r($records);


foreach( $records as $record )
{
    $cids.=$record["ContactID"].',';

}
$cids = rtrim($cids,',');








$pagenum = 1;
while ($pagenum <= 10){
    $queryCondition = array(
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-11T00:00:00.00' ORDER BY DateUpdated DESC",    
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-22T02:00:00.00' AND BeneficiaryID IN (902273,377542,377466,388511,377544,385828,377474,377482,377484,905632,377496,377534,377572) ORDER BY DateUpdated DESC",    
        //'QueryText' => 'SELECT * FROM ContactProfile WHERE ContactID in ('.$cids.') ORDER BY ContactID ASC',
      'QueryText' => 'SELECT * FROM ContactProfile WHERE ContactID in ('.$cids.') ORDER BY ContactID ASC',
        'PageSize' => 5,
        'PageNumber' => $pagenum
        );
        //Make server Query call
    $queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
    $param = array('request' => $queryRequest);
    $queryResponse = $client->call('Query', array('parameters' => $param));
    //Print total records found
    //$queryResult = $queryResponse['QueryResult'];
    if($pagenum==1){$queryResult = $queryResponse['QueryResult'];}
    if($pagenum>1){$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);}
    //$queryResult = array_merge_recursive($queryResult,$queryResponse['QueryResult']);
    $pagenum++;
}

$records = $queryResult;
$records = $queryResult['Records']['Record'];


$guests = array();
$total=0;
echo '<p>';
echo '<table border="1">';
echo '<tr><th>ContactID</th><th>Name</th><th>CelebrityFlag (radio)</th><th>OptInDirectoryFlag (checkbox)</th></tr>';
foreach( $records as $record )
{
    if($record["CelebrityFlag"]=='false'){
    echo '<tr>';
    echo '<td>'.$record["ContactID"].'</td>';
    echo '<td>'.$record["FullName"].'</td>';
    echo '<td>'.$record["CelebrityFlag"].'</td>';
    echo '<td>'.$record["OptInDirectoryFlag"].'</td>';
    echo '</tr>';
    array_push($guests,$record["FullName"]);
      $total=$total+1;

  }
}
echo '</table>';
echo '</p>';
echo $total;
echo '<br>';

//print_r($guests);
//echo json_encode($guests);
echo json_encode($guests,JSON_FORCE_OBJECT);
//



?>