<?php
            require_once('lib/nusoap.php');
            $wsdl = "KinteraConnect.wsdl";
            $client = new nusoap_client($wsdl,true);
            $client->soap_defencoding = 'UTF-8';
            $client->decode_utf8  = false;
            
            // Make Login call to get session ID
            $loginRequest = array(
            'LoginName' => '_USER_@uchicago.edu',
            'Password' => 'BBxyphax55!'
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
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount ASC',    
      //'QueryText' => 'SELECT * FROM GiftItem WHERE BeneficiaryID=902273 ORDER BY DateUpdated DESC',    
      //'QueryText' => "SELECT * FROM GiftItem WHERE BeneficiaryID=902273 AND CampaignID IS NOT NULL ORDER BY DateUpdated DESC",    
      'QueryText' => "SELECT * FROM GiftItem WHERE CampaignID=517400 ORDER BY DateUpdated DESC",    
      //'QueryText' => 'SELECT * FROM GiftDetail ORDER BY GiftID DESC',    
      //'QueryText' => 'SELECT * FROM GuestName2',    
      'PageSize' => 10,
      'PageNumber' => 1
);
                
//Make server Query call
$queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
$param = array('request' => $queryRequest);
$queryResponse = $client->call('Query', array('parameters' => $param));

//Print total records found
$queryResult = $queryResponse['QueryResult'];
//echo "Total: ".$queryResult['Total'];
echo print_r($queryResult);










                  
$queryCondition = array(
    //'QueryText' => 'SELECT * FROM GiftItem WHERE EventID=1089783',
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount ASC',    
      //'QueryText' => 'SELECT * FROM GiftItem WHERE BeneficiaryID=902273 ORDER BY DateUpdated DESC',    
      //'QueryText' => "SELECT * FROM GiftItem WHERE BeneficiaryID=902273 AND CampaignID IS NOT NULL ORDER BY DateUpdated DESC",    
      'QueryText' => "SELECT * FROM GiftItem ORDER BY DateUpdated DESC",    
      //'QueryText' => 'SELECT * FROM GiftDetail ORDER BY GiftID DESC',    
      //'QueryText' => 'SELECT * FROM GuestName2',    
      'PageSize' => 10,
      'PageNumber' => 1
);
                
//Make server Query call
$queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
$param = array('request' => $queryRequest);
$queryResponse = $client->call('Query', array('parameters' => $param));

//Print total records found
$queryResult = $queryResponse['QueryResult'];
//echo "Total: ".$queryResult['Total'];
echo print_r($queryResult);



            
            // ...
            ?>