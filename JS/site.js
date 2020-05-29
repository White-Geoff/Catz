let navClosed = true;

let toggleNav = () => {
    if(navClosed) {
        $('#nav').animate(
            {
               right: 35
            }, 420, 'swing');
    }
    else {
        $('#nav').animate(
            {
               right: -300
            }, 420, 'swing');
    }
    navClosed = !navClosed;
}