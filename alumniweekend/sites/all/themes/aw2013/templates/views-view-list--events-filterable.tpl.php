<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
  	<div class="day-anchor-bar"><h2 class="block-title"><a name="<?php //echo substr($title, 0, 3); ?>" id="<?php //echo substr($title, 0, 3); ?>"><?php print $title; ?></a></h2></div>
    <div class="day-anchor-link"><a class="anchor" name="<?php echo substr($title, 0, 3); ?>" id="<?php echo substr($title, 0, 3); ?>"><?php print $title; ?></a></div>
    
<?php /*
if (strstr($title, 'Thursday')) echo '<p><a name="THU" id="THU"></a></p><p>Thurs | <a href="#FRI">Fri</a> | <a href="#SAT">Sat</a> | <a href="#SUN">Sun</a></p>';
if (strstr($title, 'Friday')) echo '<p><a name="FRI" id="FRI"></a></p><p><a href="#THU">Thurs</a> | Fri | <a href="#SAT">Sat</a> | <a href="#SUN">Sun</a></p>';
if (strstr($title, 'Saturday')) echo '<p><a name="SAT" id="SAT"></a></p><p><a href="#THU">Thurs</a> | <a href="#FRI">Fri</a> | Sat | <a href="#SUN">Sun</a></p>';
if (strstr($title, 'Sunday')) echo '<p><a name="SUN" id="SUN"></a></p><p><a href="#THU">Thurs</a> | <a href="#FRI">Fri</a> | <a href="#SAT">Sat</a> | Sun</p>';
*/?>
  	
  	
  <?php endif; ?>
  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
