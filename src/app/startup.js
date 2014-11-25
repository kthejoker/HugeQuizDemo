define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  
  ko.components.register('answers', { require: 'components/answers/answers' });
  ko.components.register('info-panel', { require: 'components/info-panel/info-panel' });
  ko.components.register('high-scores', { require: 'components/high-scores/high-scores' });
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });

 

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
