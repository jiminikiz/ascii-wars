require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    paths: {
        // vendor libs
        angular:       '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular',
        ngRoute:       '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-route.min',
        ngSanitize:    '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-sanitize',
        pageDown:      '//cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Converter.min',
        // pageDownExtra: '//rawgit.com/jmcmanus/pagedown-extra/master/Markdown.Extra'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        app: {
            deps: ['ngRoute','ngSanitize','pageDown']
        },
        ngRoute: {
            deps: ['angular']
        },
        ngSanitize: {
            deps: ['angular']
        },
        // pageDownExtra: { deps: ['pageDown'] },
        pageDown: {
            exports: 'Markdown'
        }
    }
});

require(['app'], function() {
    window.$makeHtml = new Markdown.Converter().makeHtml;
    angular.module('ascii-wars').init()
});
