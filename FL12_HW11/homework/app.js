const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');
function createElements(content, data){
  let ul=document.createElement('ul');
  for(let obj of data){
      let list=document.createElement('li');
      if(obj.folder){
list.classList.add('folder-style');
list.innerHTML='<i class="material-icons folder_icon" id="open">folder</i>' +
obj.title;
} else{
          list.innerHTML='<i class="material-icons insert_drive_file">insert_drive_file</i>' +
          obj.title;
      }
      ul.append(list);
      if(obj.children){
          createElements(ul, obj.children);
      }
      if(obj.folder=== true && !obj.children){
          let paragraph=document.createElement('p');
          paragraph.innerHTML='<i>This folder is empty!</i>';
          paragraph.classList.add('close')
          ul.append(paragraph);
      }
  }
  content.append(ul);
  if(ul.parentElement.tagName==='ul'){
      ul.className.toggle('close');
  }
}
createElements(rootNode,structure);


let toggles = document.getElementsByClassName('folder');
for (let i = 0; i < toggles.length; i++) {
toggles[i].addEventListener("click", openFiles);
}
function openFiles(){
if(event.target.nextSibling.contains('close')){
  event.target.nextSibling.remove('close');
  event.target.nextSibling.toggle('open');
  event.target.firstChild.innerHTML='folder_open';
}else{
  event.target.nextSibling.remove('open');
  event.target.nextSibling.toggle('close');
  event.target.firstChild.innerHTML='folder';
}
  }