// this implementation is working...

function textInDiv(text, width) {
    if(width < 15) return "INVALID INPUT";
    let formattedText = '';
    while (width < text.length) {
      const splitPoint = text.lastIndexOf(' ', width);
      formattedText += text.slice(0, splitPoint) + '\n';
      text = text.slice(splitPoint);
    }
  
    formattedText = formattedText + text;
    return formattedText;
  };