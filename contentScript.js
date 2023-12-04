// Встраиваем стили CSS
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('hde_dark.css');
(document.head || document.documentElement).appendChild(style);


// Создаем новый элемент стиля
var customStyle = document.createElement('style');

// Задаем содержимое стилей
customStyle.innerHTML = `
  #ticket-app #tab-post.is-active,
  #ticket-app #tab-post:hover {
	color: #ffffff !important;
    background-color: #222529 !important;
  }
  
  #ticket-app #tab-comment.is-active, #ticket-app #tab-comment:hover, .ticket-editor__ckeditor_comment .ck-content {
	color: #ffffff !important;
    background-color: #3e3737!important;
}

  .ticket-group-actions__content {
    background: #1b1d21!important;
}

a {
  color: #466f81!important;
}

.ticket-tabs .ticket-tabs__tab_more.active, .ticket-tabs .ticket-tabs__tab_more:hover {
    background-color: #222529!important;
    border-color: #565856!important;
    color: #fff!important;
}

.ticket-tabs .ticket-tabs__tab_active .ticket-tabs__tab-name {
    color: #cacaca!important;
    
}


#ticket-app .ticket-sidebar__filter-name {
    color: #fff!important;
}



`;

// Добавляем элемент стиля в конец элемента <body>
document.body.appendChild(customStyle);

