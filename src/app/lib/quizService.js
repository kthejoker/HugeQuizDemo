define(['jquery', "mvvm/viewmodels/quiz", "mvvm/viewmodels/answers",
        "mvvm/viewmodels/ranking", "mvvm/viewmodels/subquiz"], function($, quiz, Answer, Ranking, SubQuiz) {
    
    
    var quizService = function() {
        
        var self = this;
        
        self.load = function(callback) {
    
     $.getJSON('/api/quizzes/5472b6b3b8d323301ab833d7').done( function(qm) {
  
        q = new quiz(qm.Title);
      
        _.each(qm.Answers, function(a) {
          q.Answers.push( new Answer ( a.ID, a.ID, '?', a.Clue, a.SubQuizzes));
          });
      
         _.each(qm.Rankings, function(a) {
          q.Rankings.push( new Ranking ( a.ID, a.User, a.Score));
          });
       
        _.each(qm.Subquizzes, function(a) {
            newSubQuiz = new SubQuiz ( a.Name, a.Display, a.TimeReward, q);
            _.each (
                q.Answers().filter(
                    function(Answer) {
                      return Answer.SubQuizzes.indexOf(a.Name) != -1;
                    }
                ),
                function(f) {
                    newSubQuiz.Answers.push(f);
                }
            );
            q.SubQuizzes.push( newSubQuiz );
       
            callback(q); 
        });
    });
     
    }
    
    };
    
    return new quizService();
    
    
});