import './style.css'


let nav = document.querySelectorAll('.nav-link');

nav.forEach((link)=> {

    link.addEventListener('click',function(){
        // remove all active
         nav.forEach(function(item) {
      item.classList.remove('active');
    });

// add only one item 
 this.classList.add('active');

    })

})
































































































