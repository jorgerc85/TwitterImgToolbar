function init() {
  observeGalleryDiv();
};

function observeGalleryDiv() {
  var galleryDiv = document.getElementsByClassName('Gallery-media')[0];
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    });
  });
  var config = { subtree: true, childList: true };
  observer.observe(galleryDiv, config);
};

init();
