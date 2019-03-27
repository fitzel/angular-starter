
### Project Setup Documentation
##### Setup Styles Dir
Move styles.scss in directory 'src/styles' and use as entry point. Also create:
- src/styles/_variables.scss
- src/styles/_mixins.scss
- src/styles/fonts.scss
- src/styles/general.scss

##### Install Bootstrap, Font-Awesome, Normalize SCSS
```
npm install bootstrap font-awesome normalize-scss
```


##### Set Paths in Angular.js
Set Paths in Angular.js
```
"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "styles": [
              "src/styles/styles.scss"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "./src/styles",
                "./node_modules/normalize-scss/sass"
              ]
            },
            ...
          },
```

##### Include Packages 
```
//styles.scss

//Import Bootstrap and Font-Awesome
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";

//Normalize SCSS
@import "normalize";
@include normalize();

//Import Files
@import'general';
@import 'fonts';
```


The Mixins and Variables need to be imported to every component
```
//app.component.scss

@import "variables";
@import "mixins";
```

##### Add Grid-Support for Autoprefixer
If Grid Support is needed place at top of app.component.scss
```
/* autoprefixer grid: no-autoplace */
```

##### Install Angular Material
If needed: Install Angular Material
```
ng add @angular/material
```
