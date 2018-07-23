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
   .react('resources/assets/parser/parser.js', 'public/js/parser.js')
   .react('resources/assets/editor/editor.js', 'public/js/editor.js')
   .react('resources/assets/sites/site.js', 'public/js/site.js')
   .react('resources/assets/js/loaders/quick.js', 'public/js/quick.js')
   .react('resources/assets/schurman-law/js/schurman-law.js', 'public/assets/schurman-law/js/schurman-law.js')
   .react('resources/assets/criminal-defense/js/criminal-defense.js', 'public/assets/criminal-defense/js/criminal-defense.js');