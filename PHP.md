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
