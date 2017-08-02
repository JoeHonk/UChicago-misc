<?php
/*
 * Crop-to-fit PHP-GD
 * http://salman-w.blogspot.com/2009/04/crop-to-fit-image-using-aspphp.html
 *
 * Resize and center crop an arbitrary size image to fixed width and height
 * e.g. convert a large portrait/landscape image to a small square thumbnail
 */

 ini_set('memory_limit','512M');
  ini_set('upload_max_filesize','5M');
   ini_set('post_max_size','5M');




define('DESIRED_IMAGE_WIDTH', 1080);
define('DESIRED_IMAGE_HEIGHT', 540);

$source_path = $_FILES['Image1']['tmp_name'];

/*
 * Add file validation code here
 */

list($source_width, $source_height, $source_type) = getimagesize($source_path);

switch ($source_type) {
    case IMAGETYPE_GIF:
        $source_gdim = imagecreatefromgif($source_path);
        $source_gdim2 = imagecreatefromgif($source_path);
        break;
    case IMAGETYPE_JPEG:
        $source_gdim = imagecreatefromjpeg($source_path);
        $source_gdim2 = imagecreatefromjpeg($source_path);
        break;
    case IMAGETYPE_PNG:
        $source_gdim = imagecreatefrompng($source_path);
        $source_gdim2 = imagecreatefrompng($source_path);
        break;
}

$source_aspect_ratio = $source_width / $source_height;
$desired_aspect_ratio = DESIRED_IMAGE_WIDTH / DESIRED_IMAGE_HEIGHT;

if ($source_aspect_ratio > $desired_aspect_ratio) {
    /*
     * Triggered when source image is wider
     */
    $temp_height = DESIRED_IMAGE_HEIGHT;
    $temp_width = ( int ) (DESIRED_IMAGE_HEIGHT * $source_aspect_ratio);
} else {
    /*
     * Triggered otherwise (i.e. source image is similar or taller)
     */
    $temp_width = DESIRED_IMAGE_WIDTH;
    $temp_height = ( int ) (DESIRED_IMAGE_WIDTH / $source_aspect_ratio);
}

/*
 * Resize the image into a temporary GD image
 */

$temp_gdim = imagecreatetruecolor($temp_width, $temp_height);
imagecopyresampled(
    $temp_gdim,
    $source_gdim,
    0, 0,
    0, 0,
    $temp_width, $temp_height,
    $source_width, $source_height
);

/*
 * Copy cropped region from temporary image into the desired GD image
 */

$x0 = ($temp_width - DESIRED_IMAGE_WIDTH) / 2;
$y0 = ($temp_height - DESIRED_IMAGE_HEIGHT) / 2;
$desired_gdim = imagecreatetruecolor(DESIRED_IMAGE_WIDTH, DESIRED_IMAGE_HEIGHT);
imagecopy(
    $desired_gdim,
    $temp_gdim,
    0, 0,
    $x0, $y0,
    DESIRED_IMAGE_WIDTH, DESIRED_IMAGE_HEIGHT
);

/*
 * Render the image
 * Alternatively, you can save the image in file-system or database
 */

$name = 'UCHICAGO_GIVINGDAY_SHARE_'.hash_file('md5',$source_path)."_".rand(222, 5555555555).".jpg";


//header('Content-type: image/jpeg');
imagejpeg($desired_gdim,'i/'.$name);

$upload2 = imagecreatefromjpeg('i/'.$name);
$overlay1 = imagecreatefrompng("overlay_share1.png");
imagecopymerge($upload2, $overlay1, 0, 0, 0, 0, 1080, 1080, 50);
//header('Content-type: image/png');
imagejpeg($upload2,'/vhosts/alumnidev/dev/overlay/i/'.$name);

$imgurl='http://alumnidev.uchicago.edu/dev/overlay/i/'.$name;
$twurl= $name.'.html';



$twcard='<meta name="twitter:card" content="summary_large_image" />'
.'<meta name="twitter:site" content="@UChicagoAlumni" />'
.'<meta name="twitter:creator" content="@UChicagoAlumni" />'
.'<meta property="og:url" content="http://24hourimpact.uchicago.edu" />'
.'<meta property="og:title" content="This is the Title" />'
.'<meta property="og:description" content="This is the message. http://24hourimpact.uchicago.edu" />'
.'<meta property="twitter:image" content="'.$imgurl.'" />'
.'<script type="text/javascript">'
.'window.location.replace("http://24hourimpact.uchicago.edu");'
.'</script>;';

$myfile = fopen('/vhosts/alumnidev/dev/overlay/i/'.$twurl, "w") or die("Unable to open file!");
fwrite($myfile, $twcard);
fclose($myfile);

$twurl= $imgurl.'.html';




echo '<p><a  target="_blank" href="https://www.facebook.com/dialog/feed?app_id=405878179473368&link=http%3A%2F%2F24hourimpact.uchicago.edu&picture='.$imgurl.'&name=This%20was%20created%20with%20the%20overlay%20generator&caption=%20&description=Progressively%20scale%20technically%20sound%20innovation%20via%20visionary%20materials.%20Quickly%20visualize%20B2B%20initiatives%20after%20mission-critical%20networks.%20Progressively%20orchestrate%20professional%20data%20after%20stand-alone%20imperatives.%20Interactively%20predominate%20granular%20architectures%20before%20go%20forward%20e-commerce.%20Compe&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F">SHARE ON FACEBOOK</a></p>';

echo'<p><a target="_blank" href="http://twitter.com/intent/tweet?text=This%20is%20a%20test%20%23hashtag%20'.$twurl.'">SHARE ON TWITTER</a></p>';

echo '<p><a target="_blank" href="'.$imgurl.'" download>DOWNLOAD</a></p>';

echo'<img width=300 src="./i/'.$name.'">';
imagedestroy($upload2);
imagedestroy($overlay1);





/*
 * Add clean-up code here
 */
?>
<?php
/*
 * Crop-to-fit PHP-GD
 * http://salman-w.blogspot.com/2009/04/crop-to-fit-image-using-aspphp.html
 *
 * Resize and center crop an arbitrary size image to fixed width and height
 * e.g. convert a large portrait/landscape image to a small square thumbnail
 */

 ini_set('memory_limit','512M');

define('DESIRED_IMAGE_WIDTH2', 1080);
define('DESIRED_IMAGE_HEIGHT2', 1080);

$source_path = $_FILES['Image1']['tmp_name'];

/*
 * Add file validation code here
 */

list($source_width, $source_height, $source_type) = getimagesize($source_path);







$source_aspect_ratio = $source_width / $source_height;
$desired_aspect_ratio = DESIRED_IMAGE_WIDTH2 / DESIRED_IMAGE_HEIGHT2;

if ($source_aspect_ratio > $desired_aspect_ratio) {
    /*
     * Triggered when source image is wider
     */
    $temp_height = DESIRED_IMAGE_HEIGHT2;
    $temp_width = ( int ) (DESIRED_IMAGE_HEIGHT2 * $source_aspect_ratio);
} else {
    /*
     * Triggered otherwise (i.e. source image is similar or taller)
     */
    $temp_width = DESIRED_IMAGE_WIDTH2;
    $temp_height = ( int ) (DESIRED_IMAGE_WIDTH2 / $source_aspect_ratio);
}

/*
 * Resize the image into a temporary GD image
 */

$temp_gdim2 = imagecreatetruecolor($temp_width, $temp_height);
imagecopyresampled(
    $temp_gdim2,
    $source_gdim2,
    0, 0,
    0, 0,
    $temp_width, $temp_height,
    $source_width, $source_height
);

/*
 * Copy cropped region from temporary image into the desired GD image
 */

$x0 = ($temp_width - DESIRED_IMAGE_WIDTH2) / 2;
$y0 = ($temp_height - DESIRED_IMAGE_HEIGHT2) / 2;
$desired_gdim2 = imagecreatetruecolor(DESIRED_IMAGE_WIDTH2, DESIRED_IMAGE_HEIGHT2);
imagecopy(
    $desired_gdim2,
    $temp_gdim2,
    0, 0,
    $x0, $y0,
    DESIRED_IMAGE_WIDTH2, DESIRED_IMAGE_HEIGHT2
);

/*
 * Render the image
 * Alternatively, you can save the image in file-system or database
 */

$name2 = 'UCHICAGO_GIVINGDAY_PROFILE_'.hash_file('md5',$source_path)."_".rand(11111, 55555).".jpg";


//header('Content-type: image/jpeg');
imagejpeg($desired_gdim2,'i/'.$name2);

$upload1 = imagecreatefromjpeg('i/'.$name2);
$overlay1 = imagecreatefrompng("overlay_profile1.png");
imagecopymerge($upload1, $overlay1, 0, 0, 0, 0, 1080, 1080, 50);
//header('Content-type: image/png');
imagejpeg($upload1,'/vhosts/alumnidev/dev/overlay/i/'.$name2);

$imgurl2='http://alumnidev.uchicago.edu/dev/overlay/i/'.$name2;
$twurl= $name2.'.html';



$twcard='<meta name="twitter:card" content="summary_large_image" />'
.'<meta name="twitter:site" content="@UChicagoAlumni" />'
.'<meta name="twitter:creator" content="@UChicagoAlumni" />'
.'<meta property="og:url" content="http://24hourimpact.uchicago.edu" />'
.'<meta property="og:title" content="This is the Title" />'
.'<meta property="og:description" content="This is the message. http://24hourimpact.uchicago.edu" />'
.'<meta property="twitter:image" content="'.$imgurl2.'" />'
.'<script type="text/javascript">'
.'window.location.replace("http://24hourimpact.uchicago.edu");'
.'</script>;';

$myfile = fopen('/vhosts/alumnidev/dev/overlay/i/'.$twurl, "w") or die("Unable to open file!");
fwrite($myfile, $twcard);
fclose($myfile);

$twurl = $imgurl2.'.html';




//echo '<p><a href="https://www.facebook.com/dialog/feed?app_id=405878179473368&link=http%3A%2F%2F24hourimpact.uchicago.edu&picture='.$imgurl.'&name2=This%20was%20created%20with%20the%20overlay%20generator&caption=%20&description=Progressively%20scale%20technically%20sound%20innovation%20via%20visionary%20materials.%20Quickly%20visualize%20B2B%20initiatives%20after%20mission-critical%20networks.%20Progressively%20orchestrate%20professional%20data%20after%20stand-alone%20imperatives.%20Interactively%20predominate%20granular%20architectures%20before%20go%20forward%20e-commerce.%20Compe&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F">FB SHARE LINK TEST</a></p>';

//echo'<p><a href="http://twitter.com/intent/tweet?text=This%20is%20a%20test%20%23hashtag%20'.$twurl.'">TWITTER TEST</a></p>';

echo '<hr><p><a target="_blank" href="'.$imgurl2.'" download>DOWNLOAD PROFILE IMAGE</a></p>';

echo'<img width=300 src="./i/'.$name2.'">';
imagedestroy($upload1);
imagedestroy($overlay1);


//phpinfo();


/*
 * Add clean-up code here
 */
?>
