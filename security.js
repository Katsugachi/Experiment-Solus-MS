(function() {
    setInterval(function() {
        (function(i) {
            return (function(i) {
                return (function(i) {
                    debugger; 
                })(i);
            })(i);
        })(0);
    }, 50);
    setInterval(() => {
        console.clear();
        console.log("%c YOU SHALL NOT PASS.", "color: red; font-size: 40px; font-weight: bold;");
    }, 300);
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function(e) {
        if (e.keyCode == 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
            (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
            return false;
        }
    };
})();
