# PHP

### Ajax
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
