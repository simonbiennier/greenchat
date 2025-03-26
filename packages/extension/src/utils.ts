function countTokens(text: string) {
  const matches = text.match(/([A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+|[^\s\w]+)/g)
  return matches?.length || 0
}

const chatQuery = "div[data-message-author-role=\"assistant\"], div[data-message-author-role=\"user\"]"
function getText() {
  const chats = document.querySelectorAll(chatQuery)
  if (!chats.length)
    return ""
  const _numberOfChats = chats.length
  const texts: string[] = []

  chats.forEach((chat, _idx) => {
    const text = chat.textContent?.trim() || ""
    texts.push(text)
    // console.log(idx, text);
  })

  // console.log(texts.join("\n"));
  // console.log("Fetching conversations...");
  return texts.join("")
}

const getURL = (url: string) => chrome.runtime.getURL(url)

function calculateCarbon(tokens: number) {
  const value = tokens * (0.0002574 + 0.0002145) / 2
  return Math.round(value * 100) / 100
}

export { calculateCarbon, countTokens, getText, getURL }
