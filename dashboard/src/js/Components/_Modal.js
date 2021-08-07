const Modal = document.querySelector(".modal");

Modal.innerHTML = `
<div class="modal-close"><i class="material-icons">close</i></div>
<div class="modal-component">
  <div class="modal-content">
    <div class="search-bar">
      <input type="text" placeholder="what are you looking for?" />
      <button type="button">
        <i class="material-icons">search</i> Search
      </button>
    </div>
  </div>
</div>
`;
