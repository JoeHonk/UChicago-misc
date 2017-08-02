<?php
date_default_timezone_set('America/Chicago');

            require_once('lib/nusoap.php');
            $wsdl = "KinteraConnect.wsdl";
            $client = new nusoap_client($wsdl,true);
            $client->soap_defencoding = 'UTF-8';
            $client->decode_utf8  = true;

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

//$eid='1144828';
//$lwcmin=5;
$eid=htmlspecialchars($_GET["eid"]);
$lwcmin=htmlspecialchars($_GET["lwcmin"]);



$pagenum = 1;
while ($pagenum <= 5){
    $queryCondition = array(
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-11T00:00:00.00' ORDER BY DateUpdated DESC",
        //'QueryText' => "SELECT * FROM GiftItem  WHERE DateUpdated > '2015-03-22T02:00:00.00' AND BeneficiaryID IN (902273,377542,377466,388511,377544,385828,377474,377482,377484,905632,377496,377534,377572) ORDER BY DateUpdated DESC",
        //'QueryText' => 'SELECT * FROM OrderDetail WHERE ProductID=2155203',
        //'QueryText' => 'SELECT * FROM OrderDetail WHERE OrderID=48441703',
        //'QueryText' => 'SELECT * FROM OrderDetail WHERE ContactID=236935920',
        //236935920
        'QueryText' => 'SELECT OrderID FROM Order WHERE EventID='.$eid.'',
        'PageSize' => 100,
        'PageNumber' => $pagenum
        );
        //Make server Query call
    $queryRequest = new soapval('request', 'QueryRequest', $queryCondition, false, 'tns');
    $param = array('request' => $queryRequest);
    //print_r($queryRequest);
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
$total = count($records);





foreach( $records as $record )
{
    $oids.=$record["OrderID"].',';

}
$oids = rtrim($oids,',');

$pagenum = 1;
while ($pagenum <= 10){
    $queryCondition = array(
      'QueryText' => 'SELECT Quantity FROM OrderDetail WHERE OrderID in ('.$oids.')',
        'PageSize' => 100,
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
// /print_r($records);

$totalguests = 0;
//print_r($records);
foreach( $records as $record )
{
    $totalguests+=$record["Quantity"].',';

}
echo 'total: '.$totalguests;


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
    $param = array('request' => $queryRequest);
    //print_r($queryRequest);
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
$total = count($records);
print_r($records);

foreach( $records as $record )
{
    $cids.=$record["ContactID"].',';

}
$cids = rtrim($cids,',');

$pagenum = 1;
while ($pagenum <= 10){
    $queryCondition = array(
      'QueryText' => 'SELECT FirstName, LastName, CelebrityFlag FROM ContactProfile WHERE ContactID in ('.$cids.') ORDER BY ContactID ASC',
        'PageSize' => 100,
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
// /print_r($records);

$guests = array();

array_push($guests, $totalguests.' people are registered, including...');
$total=0;
foreach( $records as $record )
{
    //CelebrityFlag is being used for "Add me to the list", so true
    if($record["CelebrityFlag"]=='true'){
    $guest = $record["FirstName"].' '.$record["LastName"];
    array_push($guests, $guest);
      $total=$total+1;
  }
}
//echo $total;
$myfile = fopen('./json/'.$eid.'.json', "w")or die("Unable to open file!");
if ($total < $lwcmin){
    $guests='{"0":"This list will be updated daily."}';
    fwrite($myfile, $guests);
}
else {

$guests = json_encode($guests,JSON_FORCE_OBJECT | JSON_PRETTY_PRINT);
//$guests = str_replace('\u00c3\u00a9', 'é', $guests);
//$guests = str_replace('\u00c3\u00ab', 'ë', $guests);
fwrite($myfile, $guests);
}
fclose($myfile);
//{"0":"Sean Sheely"
?>
<script src= "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<div ng-app="myApp" ng-controller="customersCtrl" style="height:500px;">
<ul>
  <li ng-repeat="x in names">
    {{ x }}
  </li>
</ul>

</div>
<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get('https://alumnidev.uchicago.edu/rsvp/json/<?php echo $eid;?>-test.json')
  .success(function (response) {$scope.names = response;});
});
</script>
