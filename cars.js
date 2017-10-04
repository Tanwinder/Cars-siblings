document.getElementById("parent-list").addEventListener("click",function(e){

  var elem = e.target;
  elem.classList.toggle('add-border');
  var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === elem) continue;
        siblings.push(sibling);
    }
   return siblings;
};
  var siblings = getSiblings(elem);
  console.log(siblings);
  siblings.map(function(sib){
    console.log(sib);
    sib.classList.remove('add-border')
  })
});
