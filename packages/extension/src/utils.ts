function countTokens(text: string) {
  const matches = text.match(/([A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+|[^\s\w]+)/g)
  return matches?.length || 0
}

const chatQuery = "div[data-message-author-role=\"assistant\"], div[data-message-author-role=\"user\"]"
function getText() {
  const chats = document.querySelectorAll(chatQuery)
  if (!chats.length)
    return ""
  // const numberOfChats = chats.length
  const texts: string[] = []

  chats.forEach((chat, _idx) => {
    const text = chat.textContent?.trim() || ""
    texts.push(text)
  })

  return texts.join("")
}

const getURL = (url: string) => chrome.runtime.getURL(url)

function calculateWater(tokens: number) {
  const value = tokens * 0.0005
  const rounded = Math.round(value)
  if (rounded < 1)
    return "<1"
  return rounded
}

function calculateCarbon(tokens: number) {
  const value = tokens * (0.0002574 + 0.0002145) / 2
  return Math.round(value * 100) / 100
}

function convertToCarDistance(tokens: number) {
  const value = (calculateCarbon(tokens) / 250) * 1000 // 250g CO2/km, in meters
  const rounded = Math.round(value)
  if (rounded < 1)
    return "<1 meter"
  if (rounded === 1)
    return "1 meter"
  return `${rounded} meters`
}

function converToLightBulbTime(tokens: number) {
  const value = (calculateCarbon(tokens) / 100) * 60 // 0.1kg CO2/h, in minutes
  const rounded = Math.round(value)
  if (rounded < 1)
    return "<1 minute"
  if (rounded === 1)
    return "1 minute"
  return `${rounded} minutes`
}

export { calculateCarbon, calculateWater, converToLightBulbTime, convertToCarDistance, countTokens, getText, getURL }
