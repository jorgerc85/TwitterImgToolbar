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
  var toolbarDiv = document.createElement('div');
  toolbarDiv.classList.add('img-toolbar');
  galleryDiv.appendChild(toolbarDiv);
};

init();
