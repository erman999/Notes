# Linux

### Certbot obtain new certificate

```sh
sudo certbot certonly --standalone --preferred-challenges http -d fiersoft.com
```

### MySQL Insert Database

```sh
mysql -uUSERNAME -pPASSWORD DB_NAME < /home/MY_DB.sql
```

### PHP 7.2 fpm Restart

```sh
sudo service php7.2-fpm restart
```

### PHP Upload Settings

> Edit these parameters in php.ini

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

### vsftpd.conf (with anonymous & user login)
```sh
anonymous_enable=YES
anon_root=/var/ftp/
no_anon_password=YES
hide_ids=YES
pasv_min_port=40000
pasv_max_port=50000
```
