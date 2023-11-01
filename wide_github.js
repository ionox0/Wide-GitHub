setTimeout(function() {
    var notebooks = document.querySelectorAll('div[data-host="https://notebooks.githubusercontent.com"]');
    for (var i = 0; i < notebooks.length; i++) {
        notebooks[i].style.width = '100%';
    }
}, 5000);
