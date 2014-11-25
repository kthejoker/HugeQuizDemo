define(['knockout'], function(ko) {
   
   var Countdown = function(startTime, isPaused, options) {
      
         var self = this;
         
         var timer;
       
         self.updateStatus = options.onUpdateStatus || function () {},
         self.counterEnd = options.onCounterEnd || function () {};
  
         self.seconds = ko.observable(startTime || 20);
           self.paused = isPaused;
           
         self.addTime = function(timeToAdd) {
            
         self.seconds(self.seconds() + timeToAdd);
         }

         self.decrementCounter = function() {
            self.updateStatus(self.seconds());
             if (self.seconds() === 1) {
                  self.addTime(-1);
                  self.counterEnd();
                  self.stop();
                  return;
            }
            if (!self.paused()) {
                self.addTime(-1);
            }
         }
  
         self.setTime = function(seconds) {
            self.seconds(seconds);
         };
         
         self.pauseToggle = function() {
            console.log(self.paused());
            //self.paused(!self.paused());
            //console.log(self.paused());
         }
 
         self.start = function () {
            clearInterval(timer);
            timer = 0;
            timer = setInterval(self.decrementCounter, 1000);
         };

         self.stop = function () {
            clearInterval(timer);
         };
   }

return Countdown;
    
});