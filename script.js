
document.addEventListener("DOMContentLoaded", () => {
  const giftButton = document.getElementById("giftButton");

  if (!giftButton) {
    console.error("Gift button not found. Check its id in index.html.");
    return;
  }

  giftButton.addEventListener("click", () => {
    console.log("Gift clicked!");

    giftButton.classList.add("opening");
    giftButton.disabled = true;

    // Navigate even if the CSS animation fails.
    setTimeout(() => {
      window.location.assign("./page2.html");
    }, 400);
  });
});
