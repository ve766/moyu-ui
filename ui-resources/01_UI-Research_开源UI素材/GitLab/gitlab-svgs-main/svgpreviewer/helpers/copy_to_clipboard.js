/* eslint-disable-next-line import/no-default-export */
export default (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '0px';
  textArea.style.left = '0px';
  const body = document.querySelector('body');
  body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  let success = false;

  try {
    success = document.execCommand('copy');
  } catch (err) {
    // noop
  }

  body.removeChild(textArea);

  return success;
};
