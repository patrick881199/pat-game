export const imageResize = (url, size) => {
  const pattern = /media\/games/;
  let index = 0;
  if (pattern.test(url)) {
    index = url.indexOf("/games");
    return `${url.substr(0, index)}/resize/${size}/-${url.substr(index)}`;
  } else {
    index = url.indexOf("/screenshots");
    return `${url.substr(0, index)}/resize/${size}/-${url.substr(index)}`;
  }
};
