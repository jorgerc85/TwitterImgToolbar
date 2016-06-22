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
          enableTools(addedChild);
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
};

function loadTools(galleryDiv, toolbarDiv) {
  for (var i = 0; i < 3; i++) {
    _elementFactory('div', 'img-toolbar-button', toolbarDiv);
  };
};

function enableTools(imgChild) {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var heightDifference = imgChild.dataset.height - imgChild.height;
      var widthDifference = imgChild.dataset.width - imgChild.width;
      var largerHeight = heightDifference > 0;
      var largerWidth = widthDifference > 0;
      if (largerHeight || largerWidth) {
        // Load tools
      };
    });
  });
  var config = { attributes: true, attributeOldValue: true };
  observer.observe(imgChild, config);
};

function _elementFactory(newElementTag, newElementClass, parentElement) {
  var newElement = document.createElement(newElementTag);
  newElement.classList.add(newElementClass);
  parentElement.appendChild(newElement);
  return newElement;
};

init();
