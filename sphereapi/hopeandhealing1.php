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



$queryCondition = array(
    //'QueryText' => 'SELECT * FROM GiftItem WHERE EventID=1089783',
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount ASC',    
      //'QueryText' => "SELECT * FROM ContactSalutation",    
      //'QueryText' => "SELECT * FROM ContactCustomProfileField WHERE ContactID=423424123",    
      'QueryText' => "SELECT * FROM ContactActivity WHERE ContactID=329908867",    
  //'QueryText' => "SELECT * FROM Event WHERE OwnerUserID=423424123",    
      'PageSize' => 5,
      'PageNumber' => 1
);
                
echo 'hello';
//Make server Query call
$queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
$param = array('request' => $queryRequest);
$queryResponse = $client->call('Query', array('parameters' => $param));
//Print total records found
$queryResult = $queryResponse['QueryResult'];

//print_r($queryResult);

$records = array_shift($queryResult);
$records = $queryResult;
$records = $queryResult['Records']['Record'];

print_r($records);


/*
echo '<p>';
echo 'CampaignID 3735 - not sure what the label is';
echo '<table border="1">';
echo '<tr><th>DesignationID</th><th>ItemAmount</th><th>CampaignID</th><th>DateUpdated</th></tr>';
foreach( $records as $record )
{
    echo '<tr>';
    echo '<td>'.$record["DesignationID"].'</td>';
    echo '<td>'.$record["ItemAmount"].'</td>';
    echo '<td>'.$record["CampaignID"].'</td>';
    echo '<td>'.$record["DateUpdated"].'</td>';
    echo '</tr>';
}
echo '</table>';
echo '</p>';
*/
?>