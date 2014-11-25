define(['knockout', 'text!./info-panel-template.html', 'app/lib/answeringService', 'moment'],
       function(ko, htmlString, answeringService, moment) {

var MyComponentViewModel = function(params) {
console.log('Initializing info panel component');

var self = this;

self.answerDisplay = params.answerDisplay;

self.guess = params.guess;
self.SubQuizzes = params.SubQuizzes;
self.counter = params.counter;
self.gameState = params.gameState;

self.timeDisplay = ko.computed(function() {
    console.log(params.counter().seconds());
    m = moment({second : self.counter().seconds() });
    
    m_d = m.format('mm:ss');
    
    return m_d;
 
});

self.canAnswer = ko.computed(function() {
    return self.gameState() == 'started';
});

self.gameButtonDisplay = ko.computed(function() {
    if (self.gameState() == null) {
        return "Start";
    }
    if (self.gameState() != 'paused') {
        return "Pause";
    }
    
    return "Resume";
 
    });

    self.gameAction = function() {
        if (self.gameState() == null) {
            console.log('Starting');
            self.gameState('started');
            params.counter().start();
        }
        else {
            self.pauseToggle();
        }
      
    };

    self.pauseToggle = function() {
        if (self.gameState() == 'ended') {
            return;
        }
        //self.counter().pauseToggle();
        if (self.gameState() == 'paused') {
            self.gameState('started');
        }
        else {
            self.gameState('paused');
        }
        
    };






self.giveUp = function() {
    if (self.gameState() == 'started' || self.gameState() == 'paused') {
            self.gameState('ended');
            self.counter().stop();
    }
}

};



return { viewModel: MyComponentViewModel, template: htmlString };



});