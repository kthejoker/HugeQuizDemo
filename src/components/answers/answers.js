define(['knockout', 'text!./answers-template.html',  'knockout-projections'],
       function(ko, htmlString, koProjections) {

var MyComponentViewModel = function(params) {
    
    console.log('Initializing answers component');
    
    var self = this;
    
    self.Answers = params.Answers;
    
    self.answerGroup = ko.observable(1);
    
    self.setAnswerGroup = function(value) {
        self.answerGroup(value);
    };
    
    
    self.answersToShow = self.Answers.filter(function(Answer) {
       return Answer.AnswerGroup() == self.answerGroup();
    }        );
    




};

return { viewModel: MyComponentViewModel, template: htmlString };



});