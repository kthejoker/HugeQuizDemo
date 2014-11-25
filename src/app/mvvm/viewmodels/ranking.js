define(['knockout'], function(ko) {
    
    var viewmodel = function(ID, User, Value) {
        
        var self = this;
        
        self.ID = ko.observable(ID);
        self.User = ko.observable(User);
        self.Value = ko.observable(Value);
        
        self.display = ko.computed(function() {
            return self.User() + ' ' + self.Value();
            });
        

        
    
    };
    
    return viewmodel;
    
    
    });