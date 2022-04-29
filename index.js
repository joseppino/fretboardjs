const MAJOR_SHAPES = {
    "c_major": [-1,3,2,0,1,0],
    "a_major": [-1,0,2,2,2,0],
    "g_major": [3,2,0,0,0,3],
    "e_major": [0,2,2,1,0,0],
    "d_major": [-1,-1,0,2,3,2]
};
const MINOR_SHAPES = {
    "a_minor": [-1,0,2,2,1,0],
    "e_minor": [0,2,2,0,0,0],
    "d_minor": [-1,-1,0,2,3,1]
};

function removeAllNotation(){
  document.querySelectorAll(".note").forEach((x) => {
    x.remove();
  });
  document.querySelectorAll(".open-note").forEach((x) => {
    x.remove();
  });
  document.querySelectorAll(".string").forEach((x) => {
    x.classList.remove("muted");
  });
}

function renderOpenNote(centreY){
    const openNote = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    openNote.classList.add("open-note");
    openNote.setAttribute("cx", "0");
    openNote.setAttribute("cy", centreY.toString());
    document.querySelector("#guitar-neck").append(openNote);

}

function renderNote(centreX, centreY){
    const note = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    note.classList.add("note");
    note.setAttribute("cx", centreX.toString());
    note.setAttribute("cy", centreY.toString());
    document.querySelector("#guitar-neck").append(note);
}

function renderMutedString(stringNumber){
  const queryStr = "#string" + stringNumber.toString();
  console.log(queryStr);
  const stringToMute = document.querySelector(queryStr);
  console.log(stringToMute);
  stringToMute.classList.add("muted");
}

// renderOpenNote(160);
// renderNote(600,150);

function renderChord(chord){
    removeAllNotation();
    for(let indx=0; indx<chord.length; indx++){
        if(chord[indx] > 0) {
          renderNote(chord[indx]*100 - 50, 275 - (50 * indx));
        } 
        else if (chord[indx] === 0){
          renderOpenNote(275 - (50 * indx));
        } 
        else {
          let stringNum = 6 - indx; // compensate for string numbering being reverse of array order
          renderMutedString(stringNum);
        }
    }
}

renderChord(MINOR_SHAPES.a_minor);
removeAllNotation();