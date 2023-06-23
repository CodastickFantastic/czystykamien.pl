export default function htmlStripe(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  str = str.replace(/(<([^>]+)>)/gi, "");
  return str.replace(/(\r\n|\n|\r)/gm, "");
}
