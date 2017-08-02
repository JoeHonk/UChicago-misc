<p>Enter Sphere event ID:</p>
<form action="" method="get" name="export1">
<p><input name="eid" required="required" type="text" /><input type="submit" value="Export" /></p>
<p><input checked="checked" name="opt_in" type="radio" value="true" />Opt-in</p>
<p><input name="opt_in" type="radio" value="false" />All</p>
</form>
<?php
date_default_timezone_set('America/Chicago');
//$eid='1145131';
$eid=htmlspecialchars($_GET["eid"]);
$opt_in=htmlspecialchars($_GET["opt_in"]);
//$lwcmin=htmlspecialchars($_GET["lwcmin"]);
if($eid==null){die;}

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

foreach( $records as $record )
{
    $cids.=$record["ContactID"].',';

}
$cids = rtrim($cids,',');

$pagenum = 1;
while ($pagenum <= 10){
    $queryCondition = array(
      'QueryText' => 'SELECT FirstName, LastName, FullName, ContactID, CelebrityFlag FROM ContactProfile WHERE ContactID in ('.$cids.') ORDER BY ContactID ASC',
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
//print_r($records);
//$results = $records;
//print_r($records);

$guests = array();
$records_filtered = array();
$total=0;
foreach( $records as $record )
{   
    //CelebrityFlag is being used for "Add me to the list", so true
    if($record["CelebrityFlag"]=='true' || $record["CelebrityFlag"]==$opt_in){
    $guest = $record["FirstName"].' '.$record["LastName"];        
    array_push($guests, $guest);
    array_push($records_filtered, $record);
      $total=$total+1;
  }
}
//echo $total;
//print_r($guests);
$myfile = fopen('./export/'.$eid.'.csv', "w")or die("Unable to open file!");
if ($total < $lwcmin){
    $guests='{"0":"This list will be updated daily."}';
    fwrite($myfile, $guests);
}
else {fwrite($myfile, json_encode($guests,JSON_FORCE_OBJECT | JSON_PRETTY_PRINT));}
fclose($myfile);
//{"0":"Sean Sheely"

/*

$out = fopen('php://output', 'w');
fputcsv($out, array('this','is some', 'csv "stuff", you know.'));
fclose($out);
*/

//"Age Birthdate","DeceasedFlag"," YearGraduated","DoNotDirectMailFlag DoNotPhoneFlag","DoNotEmailFlag","ActiveFlag","CelebrityFlag","MarketingSourceID","PrimaryAddressState PrimaryAddressCountry","BillingState"," BillingCountry","CreateDate","DateUpdated EmailFormat Gender","IsIndividualFlag"," OrganizationType"," OptInDirectoryFlag","NumberOfEmployees","Sic HeadquarterFlag"
//$bad_keys= array("Age","Birthdate","DeceasedFlag"," YearGraduated","DoNotDirectMailFlag","DoNotPhoneFlag","DoNotEmailFlag","ActiveFlag","CelebrityFlag","MarketingSourceID","PrimaryAddressState","PrimaryAddressCountry","BillingState"," BillingCountry","CreateDate","DateUpdated","EmailFormat","Gender","IsIndividualFlag"," OrganizationType"," OptInDirectoryFlag","NumberOfEmployees","Sic","HeadquarterFlag");
//$records_filtered =array_diff_key($records_filtered,array_flip($bad_keys));

ob_clean();

$fileName = $eid.'.csv';

$fields = array("ContactID","FirstName","LastName","FullName");
$results=$records_filtered;
 
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header('Content-Description: File Transfer');
header("Content-type: text/csv");
header("Content-Disposition: attachment; filename={$fileName}");
header("Expires: 0");
header("Pragma: public");

$fh = @fopen( 'php://output', 'w' );

$headerDisplayed = false;

foreach ( $results as $data ) {
    // Add a header row if it hasn't been added yet
    if ( !$headerDisplayed ) {
        // Use the keys from $data as the titles
        fputcsv($fh, array_keys($data),',','"');
        //fputcsv($fh, $fields,',','"');
        $headerDisplayed = true;
    }
 
    // Put the data into the stream
    fputcsv($fh, $data);
}
// Close the file
fclose($fh);
// Make sure nothing else is sent, our file is done
exit;
?>
