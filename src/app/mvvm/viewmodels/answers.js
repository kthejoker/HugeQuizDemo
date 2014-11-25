define(['knockout'], function(ko) {
    
    var viewmodel = function(ID, Order, Answer, Clue, SubQuizzes) {
        
        var self = this;
        
        self.ID = ko.observable(ID);
        self.Order = ko.observable(Order);
        self.Answer = ko.observable(Answer);
        self.Clue = ko.observable(Clue);
        self.isAnswered = ko.observable(false);
        
        self.SubQuizzes = ko.observableArray(SubQuizzes);
        
        self.AnswerGroup = ko.computed(function() {
            //console.log( Math.floor((self.ID()-1) / 2) + 1 );
            return Math.floor((self.ID()-1) / 2) + 1;
            });
        
        if (self.Answer()) {
            if (self.Answer() != '?') {
                           self.isAnswered(true);
            }
 
        }
        
    
    };
    
    return viewmodel;
    
    
    });