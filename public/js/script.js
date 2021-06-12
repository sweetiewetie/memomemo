
    window.onload = function() {
 
    function onClick() {
        document.querySelector('.pagewrap').style.display ='block';
        document.querySelector('.pagein').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.pagewrap').style.display ='none';
        document.querySelector('.pagein').style.display ='none';
    }
 
    document.getElementById('pageIn').addEventListener('click', onClick);
    document.querySelector('.closebtn').addEventListener('click', offClick);
 
    
};

