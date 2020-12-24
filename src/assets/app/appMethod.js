let isAndroid = window.sessionStorage.getItem("isAndroid");
export const appBackH5 = () => {
  isAndroid == "0"
    ? android.finishAppPage()
    : window.webkit.messageHandlers.finishAppPage.postMessage({
        body: ""
      });
}; //返回app
