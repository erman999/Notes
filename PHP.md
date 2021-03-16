# PHP

### dd
```php
function dd($var){
  echo '<pre style="font-size:14px;">';

  if (is_array($var) || is_object($var)) {
    echo htmlentities(print_r($var, true));
  } elseif (is_string($var)) {
    echo "string(" . strlen($var) . ") \"" . htmlentities($var) . "\"\n";
  } else {
    var_dump($var);
  }
  echo "\n</pre>";
}
```

<br />

### scandir_r
```php
function scandir_r($dir, &$result = []){
  foreach (scandir($dir) as $key => $file) {
    if ($file === '.' || $file === '..') continue;
    $path = $dir . DIRECTORY_SEPARATOR . $file;
    if (is_file($path)) {
      $result[] = $path;
    } else {
      $result[] = $path;
      scandir_r($path, $result);
    }
  }
  return $result;
}

$dir = realpath(".") . "/test";
print_r(scandir_r($dir));

// Output
//   [0] => /test/functions.php
//   [1] => /test/global.php
//   [2] => /test/images
//   [3] => /test/images/ByAnyOtherName.jpg
//   [4] => /test/images/GreyDaisy.jpg
//   [5] => /test/index.php
//   [6] => /test/phpinfo.php
```

### stddev
```php
function stddev($numbers, $type = 'P'){

  $count = count($numbers); // Count numbers
  $sum = array_sum($numbers); // Sum numbers
  $average = $sum / $count; // Arithmetic mean

  $sqr_diff = [];
  foreach ($numbers as $key => $number) {
    // Take each number, subtract the average and square
    $sqr_diff[$key] = pow(($number - $average), 2);
  }

  // Sum all squared differences
  $sum_sqr_diffs = array_sum($sqr_diff);

  // Check calculation type
  if ($type == 'S') {
    // Sample [S]
    $variance = $sum_sqr_diffs / ($count - 1);
  } else {
    // Population [P]
    $variance = $sum_sqr_diffs / $count;
  }

  // Square root of the variance
  $stddev = (float)sqrt($variance);
  return $stddev;
}

echo stddev([-5, 1, 8, 7, 2]);

```

<br />

### Simple PHP Upload Example
```php
<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

if ($_SERVER["REQUEST_METHOD"] === 'POST') {

  // HTML upload input name
  $input_name = 'upload';

  // Upload folder name
  $upload_folder = 'uploads';

  // Uploaded file details
  $name = $_FILES[$input_name]['name'];
  $type = $_FILES[$input_name]['type'];
  $tmp_name = $_FILES[$input_name]['tmp_name'];
  $error = $_FILES[$input_name]['error'];
  $size = $_FILES[$input_name]['size'];

  // Check mime type
  $mime = mime_content_type($tmp_name);

  // Create new path for uploaded file
  $target_path = $upload_folder . '/' . $name;

  // Move uploaded file
  $move_upload = move_uploaded_file($tmp_name, $target_path);

  // Give permissions if needed
  // sudo chown user.www-data Example_Folder/
  // sudo chmod 775 Example_Folder/

  // Display result
  echo '<pre>';
  print_r(scandir("uploads"));
  echo '</pre>';
}

?>
<!DOCTYPE html>
<html>
<body>
  
  <style>
  body {
    padding: 5%;
  }
  form {
    border: 1px solid grey;
    background-color: lightgrey;
    padding: 20px;
  }
  pre {
    font-size: 14px;
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 10px;
    background-color: lightgrey;
  }
</style>

<form action="" method="post" enctype="multipart/form-data">
  Select file to upload:
  <br><br>
  <input type="file" name="upload">
  <br><br>
  <input type="submit" value="Upload">
</form>

</body>
</html>
```
