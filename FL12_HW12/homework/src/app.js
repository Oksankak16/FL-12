let main=document.getElementById('main');
let getPage=document.getElementById('getPage');
let addNewPage=document.getElementById('addition');
let addTerms=document.getElementById('addTerms');
let definition=document.getElementById('definition');
let cancel=document.getElementById('cancel');
getPage.addEventListener('click', function(){
    location.hash='/add_suffix';
    main.style.display='none';
addNewPage.style.display='block';
});
addTerms.addEventListener('click', function(){
definition.style.display='block'
});
cancel.addEventListener('click', function(){
   location.hash='';
})
