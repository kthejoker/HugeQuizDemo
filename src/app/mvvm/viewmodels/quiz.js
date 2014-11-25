define(['knockout'], function(ko) {
    
    var viewmodel = function(Title) {
        
        var self = this;
        
        self.Parent;
        
        self.Title = ko.observable(Title);
        self.InitialTime = ko.observable();
        self.Answers = ko.observableArray();
        
        self.Rankings = ko.observableArray();
        
        self.SubQuizzes = ko.observableArray();
        
        self.sortedRankings = ko.computed( function() { return self.Rankings.sort(function(left, right) { return left.Value == right.Value ? 0 : (left.Value < right.Value ? -1 : 1) }) } );
        self.correctAnswers = self.Answers.filter(function(Answer) { return Answer.isAnswered(); });
        
        
        self.answerDisplay = ko.computed(function() {
                    console.log(self.correctAnswers().length);
            return self.correctAnswers().length + " / " + self.Answers().length;
        });
        
        self.isComplete = ko.computed(function() {
            return self.Answers().length == self.correctAnswers().length;
            
            });
        
       
    
    };
    
    return viewmodel;
    
    
    });