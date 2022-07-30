const closePrint = (iframe) => {
    document.body.removeChild(iframe);
  }
  
const setPrint = (iframe) => {
  console.log(iframe)
  const closer = () => closePrint(iframe)
  iframe.contentWindow.onbeforeunload = closer;
  iframe.contentWindow.onafterprint = closer;
  iframe.contentWindow.print();
}
  
export const printExternal = (sURL) => {
  const iframe = document.createElement("iframe");
  iframe.onload = () => setPrint(iframe);
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.src = sURL;
  document.body.appendChild(iframe);
}