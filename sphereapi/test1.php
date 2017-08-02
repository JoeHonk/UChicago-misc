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
      //'QueryText' => 'SELECT * FROM GiftItem ORDER BY ItemAmount ASC',    
      'QueryText' => "SELECT * FROM ContactActivity",    
      'PageSize' => 99,
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

print_r($queryResponse);
print_r($records);