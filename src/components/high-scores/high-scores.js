define(['knockout', 'text!./high-scores-template.html'], function(ko, htmlString) {

var MyComponentViewModel = function(params) {

console.log('Initializing high scores component');

        self.rankingGroup = ko.observable(1);


       self.rankingsToDisplay = ko.computed(function() {
        var start = (self.rankingGroup()-1)*2;
        var end = (self.rankingGroup())*2;
        return params.Rankings().slice(start, end);
        } );
       
       
self.setRankingGroup = function(value) {
   self.rankingGroup(value);
};

};

return { viewModel: MyComponentViewModel, template: htmlString };



});