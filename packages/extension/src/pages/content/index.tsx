import { bannerId, createBanner } from "@/pages/banner/Banner"
import { getText } from "@/utils"
import "@/assets/styles/tailwind.css"

let lastText = ""

const containerClass = "relative z-[1] flex max-w-full flex-1 flex-col h-full"
const containerQuery = `[class='${containerClass}']`
function injectBanner() {
  const text = getText()

  // prevent re-injecting
  if (!text || text === lastText) {
    return
  }
  lastText = text

  // remove existing banner
  if (document.getElementById(bannerId)) {
    document.getElementById(bannerId)?.remove()
  }

  // create new banner
  const container = document.querySelector(containerQuery)
  if (container) {
    createBanner(container, text)
  } else {
    console.error("Container not found")
  }
}

// run every 2s
setInterval(injectBanner, 2000)

// observer.observe(document.body, { childList: true, subtree: true });

// track history-based URL changes
const originalPushState = history.pushState
const originalReplaceState = history.replaceState

history.pushState = (...args) => {
  originalPushState.apply(this, args)
  injectBanner()
}

history.replaceState = (...args) => {
  originalReplaceState.apply(this, args)
  injectBanner()
}

window.addEventListener("popstate", injectBanner)
