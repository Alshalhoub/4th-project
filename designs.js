function makeGrid(ht, wt) {
    const tbl = document.getElementById("pixelCanvas");
    let grd = '';


    for (let i = 0; i < ht; i++) {
        grd += '<tr class="row-' + i + '">';

        for (let j = 0; j < wt; j++) {
            grd += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grd += '</tr>';
    }

    tbl.innerHTML = grid;


    addClickEventToCells();
}


function formSubmission() {
    event.preventDefault();
    const ht = document.getElementById('inputHeight').value;
    const wt = document.getElementById('inputWidth').value;
    makeGrid(ht, wt);
}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const pkClr = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let pkdcell = event.target;
            pkdcell.style.backgroundColor = pkClr.value;
        });
    }
}



// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Build a default 10x10 grid.
makeGrid(10, 10);
