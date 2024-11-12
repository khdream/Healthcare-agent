export function getUrlParams(url: string = window.location.href): URLSearchParams {
    const urlStr = url.split("?")[1];
    return new URLSearchParams(urlStr);
}
