<?php

/**
 * @file
 * Display Suite reset template.
 */
?>
<?php
$nid = $node->nid;
$href = url('node/' . $nid);
$wrapper = entity_metadata_wrapper('node', $node);
$title = $node->title;
$goal = $wrapper->field_goal->value();
$participation = $wrapper->field_participation->value();
$percent = $wrapper->field_percent->value();
?>
<div>
  <h6 class="progress-bar-text"><?php print $title; ?></h6>
  <span class="progress progress-striped">
    <span class="progress-bar" role="progressbar" aria-valuenow="<?php print $participation; ?>" aria-valuemin="0" aria-valuemax="<?php print $goal; ?>" style="width: <?php print $percent; ?>%">
      <span class="progress-bar-text"><?php print $percent; ?>%</span>
    </span>
  </span>
</div>
