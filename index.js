/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 250, fill: "forwards" });
}

function OnOff() {
  let lightOn = new Audio('SwitchOn.mp3')
  let lightOff = new Audio('SwitchOff.mp3')
  n1 = Math.random() * (90 - 10) + 10
  n2 = Math.random() * (90 - 10) + 10
  
  if (document.getElementById("Switch").getAttribute('src') == "SwitchOff.png") {
    document.getElementById("Switch").src = "SwitchOn.png";
    document.getElementById("blob").style.border = "0px";
    lightOn.play()
    
  } else {
    document.getElementById("Switch").src = "SwitchOff.png";
    document.getElementById("blob").style.border = "10000px solid #000000";
    lightOff.play()
    document.getElementById("Switch").style.left = `${n1}%`;
    document.getElementById("Switch").style.top = `${n2}%`;
    
  }
}