angular.module('myApp', [])
  .controller('mainCtrl', function(){
    this.name = 'my name'
    this.addName = function(name){
      this.name = 'my name is ' + name
  }
    this.deleteInput = function(name){
      this.name = null
    }
});
