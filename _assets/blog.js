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
