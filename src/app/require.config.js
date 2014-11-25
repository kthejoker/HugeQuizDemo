// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "moment":               "bower_modules/moment/min/moment.min",
        "mvvm":                 "app/mvvm",
        "underscore":           "bower_modules/underscore/underscore-min",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text"
    },
    config: {
        // key name is module, value is data to give module
        'mvvm/models/baseModel': {
          apiUrl: '/api',
        },
        'mvvm/models/baseCollection': {
          apiUrl: '/api',
        }
      },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};
