function copy(el) {
  /* Get the text field */
  console.log(el)
  el.textContent = 'تم النسخ';
  // el.style.background = '#CCC';
  // el.style.paddingInlineStart = '0';
  // el.style.transition = 'all 0s';


  // var copyText = el.previousElementSibling.textContent;
  // console.log(copyText)

  // /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  // /* Copy the text inside the text field */
  // navigator.clipboard.writeText(copyText.value);
}