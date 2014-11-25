define(['app/quizanswers', 'underscore'], function(q, _) {
    
    var S = function() {
        
        
        
        this.checkAnswer = function(guess) {
            console.log(guess);
          a = _.find(q.Answers, function(obj) {
            
            if (obj.Answer.toLowerCase() == guess.toLowerCase()) {
               console.log(obj.Answer.toLowerCase());
            }
            return obj.Answer.toLowerCase() == guess.toLowerCase() });
          if (a) {
            return a;
          }
          return null;
          
        };
        
    };
    
    return new S();
    
});