// this implementation is working...

function textInDiv(text, width) {
    if(width < 15) return "INVALID INPUT";
    let formattedText = '';
    while (width < text.length) {
      const splitPoint = text.lastIndexOf('', width);
      formattedText += text.slice(0, splitPoint) + '\n';
      text = text.slice(splitPoint);
    }
  
    formattedText = formattedText + text;
    return formattedText;
  };

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis."
const output = textInDiv(str, 50);
console.log(output); // this isn't working, check the output carefully against the expected behaviour in spec.md