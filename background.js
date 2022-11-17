browser.menus.create({
  id: "send-to-mpv",
  title: "Open Link in mpv",
  contexts: ["link"]
});
 
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "send-to-mpv") {
    if (info.linkUrl) {
      location.href = "mpv://"+info.linkUrl;
    }
  }
});
