let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();

mix.react('resources/assets/js/loaders/invitations.js', 'public/js/invitations.js')
   .react('resources/assets/js/loaders/quick.js', 'public/js/quick.js')
   .react('resources/assets/redlinelaw/js/redlinelaw.js', 'public/assets/redlinelaw/js/redlinelaw.js');