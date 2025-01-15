
export const getLaunchURL = () => {
  const url = `https://t.me/endurio_bot`
  const urlParams = new URLSearchParams(window.location.search);
  const startapp = urlParams.get('startapp') || urlParams.get('ref');
  if (startapp?.length == 42 && startapp?.startsWith('0x')) {
    return url + `?startapp=` + startapp
  } 
  return url
}
