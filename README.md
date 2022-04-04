# Laravel Vue template
  
## Don't forget to:
- Rename all instances of `laravel-vue-template` and `LaravelVueTemplate`
- Pick one of 2 frontsides (*they have more differences than just tailwind vs vuetify*)
  - resources/frontside-tailwind
  - resources/frontside-vuetify
- Rename instances of `frontside-[tailwind-or-vuetify]` in `startDevelopment.sh` and `symlinkDevAssets`
- `php artisan key:generate`
- `php artisan storage:link`
- `sudo sh setDevPermissions.sh` **ONLY DURING DEVELPMENT**
- `sudo sh symlinkDevAssets.sh` **ONLY DURING DEVELPMENT**
- Analyze code during development with `./vendor/bin/phpstan analyse`
- You can use `sh startDevelopmment.sh` to open code editors and start development in guake