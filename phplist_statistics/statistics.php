<?
class statistics extends phplistPlugin {
  var $name = "Statistics";
  var $coderoot = "plugins/statistics/";

  function statistics() {
  }

  function adminmenu() {
    return array(
      "openstats" => "Open statistics by message",
      "statssummary" => "List brief statistics for all messages",
      "statsbysubject" => "(WIP) Combine stats for list of message IDs",
    );
  }

}
?>
