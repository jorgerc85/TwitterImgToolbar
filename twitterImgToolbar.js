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
  enableTools();
};

function loadTools(galleryDiv, toolbarDiv) {
  var buttonClasses = ['fa-floppy-o', 'fa-search-plus', 'fa-external-link'];
  for (var i = 0; i < 3; i++) {
    var toolbarButton = _elementFactory('div', 'img-toolbar-button', toolbarDiv);
    var buttonIcon = _elementFactory('i', 'fa', toolbarButton);
    buttonIcon.setAttribute('aria-hidden', 'true');
    buttonIcon.classList.add(buttonClasses[i]);
    buttonIcon.classList.add('fa-lg');
  };
};

function enableTools() {
  var galleryContentDiv = document.getElementsByClassName('Gallery-content')[0];
  galleryContentDiv.addEventListener('mouseover', _enableTools);
};

function _elementFactory(newElementTag, newElementClass, parentElement) {
  var newElement = document.createElement(newElementTag);
  newElement.classList.add(newElementClass);
  parentElement.appendChild(newElement);
  return newElement;
};

function _enableTools(event) {
  event.stopPropagation();
  var galleryContentDiv = document.getElementsByClassName('Gallery-content')[0];
  var imgChild = document.getElementsByClassName('media-image')[0];
  if (!imgChild.hidden) {
    var heightDifference = imgChild.naturalHeight - imgChild.height;
    var widthDifference = imgChild.naturalWidth - imgChild.width;
    var largerHeight = heightDifference > 0;
    var largerWidth = widthDifference > 0;
    if (largerHeight || largerWidth) {
      // Enable tools
    };
    galleryContentDiv.removeEventListener('mouseover', _enableTools);
  };
};

init();
