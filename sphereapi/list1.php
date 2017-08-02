<!DOCTYPE html>
<html>
      <head>
    <script type='text/javascript' src='https://s3.amazonaws.com/dynatable-docs-assets/js/jquery-1.9.1.min.js'></script>
    
    <link rel="stylesheet" media="all" href="https://s3.amazonaws.com/dynatable-docs-assets/css/jquery.dynatable.css" />
    <script type='text/javascript' src='https://s3.amazonaws.com/dynatable-docs-assets/js/jquery.dynatable.js'></script>
    

            <meta charset=utf-8 />
            <title>DataTables - JS Bin</title>
      </head>
      <body>
<table id="my-ajax-table">
  <thead>
    <th>GiftID</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>    <th>Some Attribute</th>
    <th>Some Other Attribute</th>
  </thead>
  <tbody>
  </tbody>
</table>
<script>
$('#my-ajax-table').dynatable({
  dataset: {
    ajax: true,
    ajaxUrl: 'record.php',
    ajaxOnLoad: true,
    records: []
  }
});
</script>

      </body>
</html>