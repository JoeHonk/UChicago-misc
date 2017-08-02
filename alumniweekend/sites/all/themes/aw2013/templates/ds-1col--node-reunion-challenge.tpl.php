<?php

/**
 * @file
 * Display Suite 1 column template.
 */
?>
<<?php print $ds_content_wrapper; print $layout_attributes; ?> class="ds-1col <?php print $classes;?> clearfix">

<?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
<?php endif; ?>
<?php print $content['title'][0]['#markup']; ?>
<p>Help our class reach its participation goal. We are currently <?php print $content['field_percent'][0]['#markup']; ?> of the way to our goal. Use the social media links below to help spread the word to your friends and encourage them to participate.</p>
</<?php print $ds_content_wrapper ?>>

<?php if (!empty($content['links'])): ?>
  <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
<?php endif; ?>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
