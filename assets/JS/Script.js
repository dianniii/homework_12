//функция отправки формы
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const avatarInput = document.getElementById('avatar').value;
    const commentInput = document.getElementById('comment').value;
    //получить значения из полей
    
    const formattedName = formatName(nameInput);
    const checkedMessage = checkSpam(commentInput);
    // Отобразить комментарий в чате
    displayComment(formattedName, avatarInput, checkedMessage);

    document.getElementById('form').reset();//очистить форму после отправки 
})

// Преобразовать имя: удалить лишние пробелы и сделать первую букву заглавной
function formatName(name) { 
    name = name.trim().replace(/\s+/g, '')
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function checkSpam(str) { 
    const spamWords = /viagra|xxx/gi; 
    return str.replace(spamWords, '***'); 
}
// отображение комментарий в чате
function displayComment(name, avatar, message) { 
    const chatDisplay = document.getElementById('container-chat'); 
    const commentDiv = document.createElement('div'); 
    commentDiv.innerHTML = `<strong>${name}</strong> <br> <img src="${avatar}" alt="avatar" width="50" height="50"><br>${message}`; 
    chatDisplay.appendChild(commentDiv); 
}