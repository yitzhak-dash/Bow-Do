/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'hammerjs': 'npm:hammerjs/hammer.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ng2-redux': 'npm:ng2-redux',
      'redux': 'npm:redux',
      'redux-logger': 'npm:redux-logger',
      'redux-observable': 'npm:redux-observable'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      rxjs: {
        defaultExtension: 'js'
      },
      app: {
        defaultExtension: 'js'
      },
      'ng2-redux': {
        main: 'lib/index.js',
        defaultExtension: 'js'
      },
      redux: {
        main: 'dist/redux.min.js',
        defaultExtension: 'js'
      },
      'redux-logger': {
        main: 'dist/index.min.js',
        defaultExtension: 'js'
      },
      'redux-observable': {
        main: 'dist/redux-observable.min.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
