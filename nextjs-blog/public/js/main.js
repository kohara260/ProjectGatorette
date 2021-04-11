console.log('testing');

window.onload = function() {
   //On click on button 1
   document.getElementById('button1').onclick = function(){
      console.log('clicked button');

      const el = document.querySelector('.content-tab.one');
      const el2 = document.querySelector('.content-tab.two');
      if (el.classList.contains('active')){
         console.log('content 1 is showing');
      }
      else{
         console.log('content 2 was showing, switched to content 1');
         el2.classList.remove('active');
         el.classList.add('active');
      }
   } 
    
   //On click of button 2
   document.getElementById('button2').onclick = function(){
      console.log('clicked button');

      const el = document.querySelector('.content-tab.one');
      const el2 = document.querySelector('.content-tab.two');
      if (el2.classList.contains('active')) {
         console.log('content 2 is showing');
      }
      else{
         console.log('content 1 was showing, switched to content 2');
         el.classList.remove('active');
         el2.classList.add('active');
      }
   } 
};
