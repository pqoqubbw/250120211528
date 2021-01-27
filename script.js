let comments = [];

document.querySelector('.footer__btn').onclick = function(){
    let commentName = document.querySelector('.footer__name');
    let commentBody = document.querySelector('.footer__textarea');
    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now()/1000)
    }
    comments.push(comment);

    saveComments();
    showComments();
    clearForm();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function showComments(){
    let commentField = document.querySelector('.commentTest');
    let out = '';

    comments.forEach(function(item){
        out += 
        `<div class="comment">
                <div class="comment__info">
                    <p class="comment__name">${item.name}</p>
                    <p class="comment__date">${timeConverter(item.time)}</p>
                </div>
            </div>
        <div class="comment commentTest">
                <div class="comment__body">
                    <span class="tip tip-up"></span>
                  <div class="comment__message">
                    <span>${item.body} </span>
                  </div>
                </div>
            </div>`;
        commentField.innerHTML = out;
    });
} 

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
}

function clearForm(){
    let commentName = document.querySelector('.footer__name');
    let commentBody = document.querySelector('.footer__textarea');
    commentName.value = '';
    commentBody.value = '';
}