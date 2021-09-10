const liveSearchQueryContainer = document.querySelector('.live-search-query');

liveSearchQueryContainer.innerHTML =
    `<div class="inner-container">
        <div class="input-group">
            <label for="">Enter JAMB / Matric Number / Name</label>
            <input type="text" name="" autofocus id="query-data">
        </div>
        <div class="query-result">
            <ul class="query-result-data">

            </ul>
        </div>
    </div>
`