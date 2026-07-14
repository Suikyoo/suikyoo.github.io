
const text_fill = document.getElementById("text-fill");
const initial_fill = document.getElementById("initial-fill");

const choices = ["Lovey", "Langga ko", "I miss you", "Happy monthsary darling koo", "I love youuuuuu"];
const surfs = [text_fill, initial_fill];

const initial = document.createElement("img");
initial.src = "text.png";
initial.style.display = "none";

const text = document.createElement("img");
text.src = "img.jpg";
text.style.display = "none";

let initial_size = []
let text_size = []
initial.onload = () => {
  document.body.appendChild(initial); 
  initial_size = [initial.naturalWidth, initial.naturalHeight]
  initial_size[1] *= (initial_fill.clientWidth / initial_size[0])
  //console.log(initial_fill.clientWidth, initial_size[0])

};
text.onload = () => {
  document.body.appendChild(text); 
  console.log(text.naturalWidth, text.naturalHeight);
  text_size = [text.naturalWidth, text.naturalHeight]; 
  text_size[1] *= (text_fill.clientWidth / text_size[0])
  console.log(text_fill.clientWidth, text_size[0])
};


const repeatId = setInterval(() => {
  
  const idx = Math.round(Math.random() * choices.length);
  const surf_idx = Math.round(Math.random() * surfs.length);
  if (surfs.length) {
    surfs[surf_idx].innerText += choices[idx];
  }

  //console.log(initial_fill.scrollHeight, initial_size[1]);
  if (initial_fill.scrollHeight >= initial_size[1]) {
    const s_idx = surfs.indexOf(initial_fill)
    if (s_idx > -1) {
      surfs.splice(s_idx, 1);
    }
  }
  if (text_fill.clientHeight >= text_size[1]) {
    //console.log(text_fill.clientHeight, text_size[1])
    const s_idx = surfs.indexOf(text_fill)
    if (s_idx > -1) {
      surfs.splice(s_idx, 1);
    }
  }
}, 5);
