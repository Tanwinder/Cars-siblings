document.querySelector(".parent-list").addEventListener("click",function(e){

  var elem = e.target;
  elem.classList.toggle('add-border');
  var content = elem.textContent;
  var contentNode = document.querySelector('.content-container');
  contentNode.innerHTML = content;
  contentNode.classList.remove('start-animation');
  // -> triggering reflow /* The actual magic */
 // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
 // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
 // element.offsetWidth = element.offsetWidth;

 void contentNode.offsetWidth;

 // -> and re-adding the class
  contentNode.classList.add('start-animation');
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
  siblings.map(function(sib){
    sib.classList.remove('add-border')
  });
});
