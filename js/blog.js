
function filterList() {
    var selector = document.getElementById('filterList');
    var filterText = selector.options[selector.selectedIndex].value;
    var lis = document.querySelectorAll('.posts li');
  
//      console.log(filterText); //debug
    for (var x = 0; x < lis.length; x++) {
//        console.log(x, lis[x].className); //debug
        if (filterText == 'none' || filterText == lis[x].className) {
            lis[x].removeAttribute('hidden');
        }
        else {
            lis[x].setAttribute('hidden', true);
        }
    }
}


function onStart() {
    // get query information
    const queryString = window.location.search;
    //const queryString = "?filter=shmoe" // for testing in node
    const urlParams = new URLSearchParams(queryString);


    // set initial filter, if applicable
    const initialFilter = urlParams.get('filter')
    //console.log(initialFilter); //debug

    if (initialFilter != null) {
        var selector = document.getElementById('filterList');
        var i = 0;
        while ( i < selector.options.length) {
            if (selector.options[i].value == initialFilter) {
                selector.selectedIndex = i;
                filterList();
                return;
            }
            i++;
        }
    }
}

// sets onStart() to run when the window is fully loaded
window.onload = onStart;
