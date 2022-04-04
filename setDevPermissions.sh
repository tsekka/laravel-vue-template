#!/bin/sh
APP="laravel-vue-template"
sudo php artisan optimize:clear &&
sudo chown -R kris:kris /opt/lampp/htdocs/apps/$APP &&
chmod 777 -R /opt/lampp/htdocs/apps/$APP/storage &&
chmod 777 -R /opt/lampp/htdocs/apps/$APP/bootstrap &&
echo '! Permissions fixed'
