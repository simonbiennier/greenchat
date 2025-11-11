export interface Message {
  role: string
  message: string
}

function extractMessages(): Message[] {
  const messages: Message[] = []

  // Select all message containers
  const messageContainers = document.querySelectorAll("[data-testid=\"m365-chat-llm-web-ui-chat-message\"]")

  messageContainers.forEach((container) => {
    // user
    const userMessageElement = container.querySelector("[data-testid=\"chatQuestion\"] .fai-UserMessage__message div[dir=\"auto\"]")
    if (userMessageElement) {
      messages.push({
        role: "user",
        message: userMessageElement.textContent?.trim() || "",
      })
    }

    // assistant
    const copilotMessageElement = container.querySelector("[data-testid=\"copilot-message-reply-div\"] [data-testid=\"markdown-reply\"]")
    if (copilotMessageElement) {
      messages.push({
        role: "assistant",
        message: copilotMessageElement.textContent?.trim() || "",
      })
    }
  })

  return messages
}

function countTokens(text: string) {
  const matches = text.match(/([A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+|[^\s\w]+)/g)
  return matches?.length || 0
}

const getURL = (url: string) => chrome.runtime.getURL(url)

function toWater(tokens: number) {
  const value = tokens * 0.0005
  return Math.round(value * 100) / 100 // in mL
}

function toCarbon(tokens: number) {
  const value = tokens * (0.0002574 + 0.0002145) / 2
  return Math.round(value * 100) / 100 // in g CO2
}

function toDistance(tokens: number) {
  const value = (toCarbon(tokens) / 250) * 1000 // 250g CO2/km, in meters
  return Math.round(value * 100) / 100
}

function toLightBulb(tokens: number) {
  const value = (toCarbon(tokens) / 100) * 60 // 0.1kg CO2/h, in minutes
  return Math.round(value * 100) / 100
}

export { countTokens, extractMessages, getURL, toCarbon, toDistance, toLightBulb, toWater }
