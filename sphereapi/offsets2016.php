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



            //Prepare query request


$queryCondition = array(
    //'QueryText' => 'SELECT * FROM GiftItem WHERE EventID=1089783',
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount DESC',
      //'QueryText' => "SELECT * FROM GiftItem WHERE CampaignID=287377 ORDER BY DateUpdated DESC",
      //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-04-17T06:30:00.00' AND BeneficiaryID IN (914599,377528) ORDER BY DateUpdated DESC",
    'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2016-02-22T10:00:00.00' ORDER BY DateUpdated DESC", 

      'PageSize' => 100,
      'PageNumber' => 1
);

//Make server Query call
$queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
$param = array('request' => $queryRequest);
$queryResponse = $client->call('Query', array('parameters' => $param));
//Print total records found
$queryResult = $queryResponse['QueryResult'];
$records = array_shift($queryResult);
$records = $queryResult;
$records = $queryResult['Records']['Record'];

//print_r($records);

echo '<p>';
echo 'All gifts, grouped by BeneficiaryID';
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










?>
