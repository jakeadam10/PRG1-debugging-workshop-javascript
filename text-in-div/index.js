// this implementation is working...

function textInDiv(text, width) {
    if(width < 15) return "INVALID INPUT";
    var formattedText = '';
    while (width < text.length) {
      var splitPoint = text.lastIndexOf(' ', width);
      formattedText += text.slice(0, splitPoint) + '\n';
      text = text.slice(splitPoint + 1);
    }
  
    formattedText = formattedText + text;
    return formattedText;
  };