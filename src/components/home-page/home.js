define(["knockout", "text!./home.html",   "underscore", "app/lib/countdown",
        "app/lib/answeringService", "app/lib/quizService" ],
       function(ko, homeTemplate, 
                _, Countdown, answeringService, quizService) {




    var HomeViewModel = function(route) {
      
      var self = this;
      
      self.gameState = ko.observable();
      self.guess = ko.observable();
      self.Quiz = ko.observable();
      
                      
      quizService.load(function(quiz) {
        quiz.Parent = self;
         self.Quiz(quiz);
         
     self.Quiz().isComplete.subscribe(function(isComplete) {
         if (isComplete) {
      
         console.log('Quiz complete');
         self.gameState('ended');
         }
        });
        
        
      });
    
  
      
           self.Achievement = ko.observable();
           
           self.addTime = function(time) {
            console.log(time);
              ct = self.counter();
              ct.addTime(time);
              self.counter(ct);
            
           };
         
     
     
              
    self.isPaused = ko.computed(function() {
        return (self.gameState() == 'paused');
      
    });
      
 
                
                
        self.counter = ko.observable(
          new Countdown(20, self.isPaused,
            {
              onUpdateStatus: function(sec){}, // callback for each second
              onCounterEnd: function(){ self.gameState('ended');}
            })
        );
        
        
        
        
self.guess.subscribe(function (guess) {

    if (guess == null) {
        return;
    }
    // already guessed
    if (ko.utils.arrayFirst(self.Quiz().Answers(), function (Answer) {
        return Answer.Answer().toLowerCase() == guess.toLowerCase();
        }) != null) {
        return;
    }

    //correct guess
    var answer = answeringService.checkAnswer(guess);
    if (answer) {
        console.log('Submitting answer');
       
        var match = ko.utils.arrayFirst(self.Quiz().Answers(), function (Answer) {
                return Answer.ID() === answer.ID;  //note the ()
            });
        if (!match) {
            return 'error';
        }
        else {
            match.Answer(answer.Answer).isAnswered(true);
            self.guess(null);
        }
            ;
   }
});

        
      
    };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
