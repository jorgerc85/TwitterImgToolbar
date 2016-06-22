function init() {
  observeGalleryDiv();
};

function observeGalleryDiv() {
  var galleryDiv = document.getElementsByClassName('Gallery-media')[0];
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var childListMutation = (mutation.type === 'childList');
      var mutationAddsChild = (mutation.addedNodes.length > 0);
      if (childListMutation && mutationAddsChild) {
        var addedChild = mutation.addedNodes[0];
        var childAddedIsImg = (addedChild.tagName === 'IMG');
        if (childAddedIsImg) {
          addImgToolbar(galleryDiv);
        };
      };
    });
  });
  var config = { subtree: true, childList: true };
  observer.observe(galleryDiv, config);
};

function addImgToolbar(galleryDiv) {
  var toolbarDiv = _elementFactory('div', 'img-toolbar', galleryDiv);
  loadTools(galleryDiv, toolbarDiv);
  enableTools(toolbarDiv);
};

function loadTools(galleryDiv, toolbarDiv) {
  for (var i = 0; i < 3; i++) {
    _elementFactory('div', 'img-toolbar-button', toolbarDiv);
  };
};

function enableTools(toolbarDiv) {
  toolbarDiv.addEventListener('mouseover', _enableTools);
};

function _elementFactory(newElementTag, newElementClass, parentElement) {
  var newElement = document.createElement(newElementTag);
  newElement.classList.add(newElementClass);
  parentElement.appendChild(newElement);
  return newElement;
};

function _enableTools(event) {
  event.stopPropagation();
  var toolbarDiv = event.target.parentElement;
  var imgChild = toolbarDiv.previousElementSibling;
  if (!imgChild.hidden) {
    var heightDifference = imgChild.naturalHeight - imgChild.height;
    var widthDifference = imgChild.naturalWidth - imgChild.width;
    var largerHeight = heightDifference > 0;
    var largerWidth = widthDifference > 0;
    if (largerHeight || largerWidth) {
      // Enable tools
    };
    toolbarDiv.removeEventListener('mouseover', _enableTools);
  };
};

init();
