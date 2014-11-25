define(['knockout'], function(ko) {
   
   var viewmodel = function(Name, Display, timeReward, ParentQ) {
    
        var self = this;
        console.log(ParentQ);
        self.Parent = ParentQ;
        
        self.Name = ko.observable(Name);
        self.Display = ko.observable(Display);
        self.timeReward = ko.observable(timeReward);
        
        self.Answers = ko.observableArray();
        
         self.correctAnswers = self.Answers.filter(function(Answer) { return Answer.isAnswered(); });
        
        self.isComplete = ko.computed(function() {
            return self.correctAnswers().length == self.Answers().length;
         });
        
        self.isComplete.subscribe(function(isComplete) {
         if (isComplete) {
            //code
         
         console.log('isComplete');
         self.Parent.Parent.addTime(self.timeReward());
         self.Parent.Parent.Achievement('Sub Quiz Complete');
         }
        });
        
        self.completeCSS = ko.computed(function() {
            return self.isComplete() ? "subquiz_completed" : "";
         
        });
        
        
        
        
        self.answerDisplay = ko.computed(function() {
                    console.log(self.correctAnswers().length);
            return self.correctAnswers().length + " / " + self.Answers().length;
        }); 
   };
   
   return viewmodel;
    
});