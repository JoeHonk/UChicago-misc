<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<div class="challenge-image-block first">
  <form action="">
    <select id="class-challenge-select" name="class">
      <option>Select your class year...</option>
      <?php foreach ($rows as $id => $row): ?>
        <?php print $row; ?>
      <?php endforeach; ?>
    </select>
  </form>
</div>
<div class="challenge-image-block last">
  <span class="challenge-image-link">
    <a id="class-challenge-standard"
       download="class-challenge-feed.png"
       href="https://alumniweekend.uchicago.edu/sites/default/files/OPA_0424_Downloadables_Class-FBCover_XXXX_v1.0.png">Download this size image</a> for use in an e-mail or social media post.
  </span>
  <span class="challenge-image-link">
    <a id="class-challenge-fb"
       download="class-challenge-fb.png"
       href="https://alumniweekend.uchicago.edu/sites/default/files/OPA_0424_Downloadables_Class-FBCover_XXXX_v1.0.png">Download this size image</a> for your Facebook cover.
  </span>
</div>
<img id="class-challenge-image" alt="" src="https://alumniweekend.uchicago.edu/sites/default/files/OPA_0424_Downloadables_Class-FBCover_XXXX_v1.0.png" typeof="foaf:Image" />
