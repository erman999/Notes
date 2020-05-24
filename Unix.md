# Unix

### Certbot obtain new certificate

```sh
sudo certbot certonly --standalone --preferred-challenges http -d fiersoft.com
```
<br />

### MySQL Insert Database

```sh
mysql -uUSERNAME -pPASSWORD DB_NAME < /home/MY_DB.sql
```
<br />

### PHP 7.2 fpm Restart

```sh
sudo service php7.2-fpm restart
```
<br />

### phpMyAdmin Font Size

```sh
/usr/share/phpmyadmin/themes/pmahomme/css/codemirror.css.php
```
```css
.CodeMirror pre {font-size: 1.2em;}
```
<br />

### PHP Upload Settings

> Edit these parameters according to needs in php.ini

```sh
post_max_size
upload_max_filesize
max_execution_time
```

> Give ownership to apache
```sh
sudo chown erman.www-data Example_Folder/
```

> Give writing permission to folder
```sh
sudo chmod 775 Example_Folder/
```
