
export const getLaunchURL = () => {
  const url = `https://endur.io/app`
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get('ref') || urlParams.get('startapp');
  if (ref?.length == 42 && ref?.startsWith('0x')) {
    return url + `?ref=` + ref
  } 
  return url
}
