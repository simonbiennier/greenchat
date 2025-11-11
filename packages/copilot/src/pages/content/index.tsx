import { EXTENSION_PREFIX } from "@/assets/constants"
import { countTokens, extractMessages, toCarbon, toDistance, toWater } from "@/utils"

import "@/assets/styles/tailwind.css"

export const bannerId = `${EXTENSION_PREFIX}-banner`

function getText(tokens: number) {
  return `This chat has used ${tokens} tokens (${toCarbon(tokens)}g CO2, ${toDistance(tokens)}m by car, ${toWater(tokens)}mL water).`
}

const InfoButton = "<a class='ml-1' href='https://greenchat-ai.vercel.app/' target='_blank'><svg style='cursor: pointer;' aria-label='informatie' fill='currentColor' role='img' width='16' height='16' view-box='0 0 16 16' xmlns='http://www.w3.org/2000/svg'> <path d='M8.5 7.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3Zm.25-2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z' fill='currentColor' /></svg></a>"

function getInnerHTML(text: string) {
  return `<span class="inline-flex"><p>${getText(countTokens(text))}</p>${InfoButton}</span>`
}

export function updateBanner(container: Element, text: string, lastText: string) {
  // prevent reinjects
  if (text === lastText) {
    // console.log("Text unchanged, skipping banner update")
    return
  }

  let banner = document.getElementById(bannerId)
  if (banner) {
    // console.log("Banner exists, updating text")
    banner.innerHTML = getInnerHTML(text)
  } else {
    // console.log("Creating banner")
    banner = document.createElement("div")
    banner.id = bannerId
    banner.className = "w-full inline-flex items-end justify-start text-[var(--colorNeutralForeground2)] leading-base-400 font-semibold font-base py-s"

    if (container) {
      // console.log("Found container, inserting banner")
      container.insertAdjacentElement("afterend", banner)
      banner.innerHTML = getInnerHTML(text)
    } else {
      console.warn("Container not found")
    }
  }
}

export function resetStyle() {
  const attachmentList = document.getElementById("attachment-list-pinned-button")
  if (attachmentList) {
    attachmentList.style.minWidth = "unset !important"
  }

  const fuiButton = document.getElementById("menur18")
  if (fuiButton) {
    fuiButton.style.marginInlineEnd = "unset !important"
  }

  const chatInput = document.getElementsByClassName("fai-ChatInput__attachments")[0]
  if (chatInput) {
    (chatInput as HTMLElement).style.paddingInlineEnd = "unset !important"
  }
}

let lastText = ""

const containerQuery = "div#attachment-list-controls"
function main() {
  resetStyle()
  const messages = extractMessages()
  const text = messages.map(msg => msg.message).join(" ")

  updateBanner(document.querySelector(containerQuery) as Element, text, lastText)
  lastText = text
}

// console.log("Extension running")

// run every 2s
setInterval(main, 2000)
