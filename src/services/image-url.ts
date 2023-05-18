/**
 * Define a function that takes url as a string
 * this function will modify the URL to crop the image (syntax: /media/crop/{width}/{heigh})
 * @param url
 */
const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  // find the index of the word 'media/' (the cursor now is before 'm') plus the length of it to move the cursor to the end of the word
  const index = url.indexOf(target) + target.length;

  // then we slice this url at the index position and add "xxcrop/600/400/"
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
