# Laravel Vue template
  
## Instantiating:
- Rename all instances of `laravel-vue-template` and `LaravelVueTemplate`
- Pick one of 2 frontsides (*they have more differences than just tailwind vs vuetify*)
  - resources/frontside-tailwind
  - resources/frontside-vuetify
- Rename instances of `frontside-[tailwind-or-vuetify]` 
- Run `php artisan key:generate`
  
## Development:
- `php artisan storage:link`
- `sudo sh setDevPermissions.sh` **ONLY DURING DEVELPMENT if having permission errors**
- `sudo sh symlinkDevAssets.sh` **ONLY DURING DEVELPMENT**
- Analyze code during development with `./vendor/bin/phpstan analyse`
- You can use `sh startDevelopmment.sh` to open code editors and start development in guake
- You can generate types for typescript by running command `php artisan typescript:transform`