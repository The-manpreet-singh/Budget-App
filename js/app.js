 
 //Budget controller
 var budgetController = (function() {
 	
  })(); 

//UI controller
 var UIController =(function(){

 	//some code
 })();

//Global App controller
 var controller= (function(budgetctrl,UIctrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
    	console.log('Buttom was clicked.')
    }) ; 

 })(budgetController, UIController);