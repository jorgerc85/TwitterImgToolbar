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
  var toolbarDiv = document.createElement('div');
  toolbarDiv.classList.add('img-toolbar');
  galleryDiv.appendChild(toolbarDiv);
  loadTools(galleryDiv, toolbarDiv);
};

function loadTools(galleryDiv, toolbarDiv) {
  for (var i = 0; i < 3; i++) {
    var toolbarButton = document.createElement('div');
    toolbarButton.classList.add('img-toolbar-button');
    toolbarDiv.appendChild(toolbarButton);
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

init();
