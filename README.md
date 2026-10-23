# GreenChat

GreenChat is a browser extension that estimates CO<sub>2</sub> emissions of AI chat conversations to raise awareness about AI's environmental impact.

This repository contains:

- `packages/chatgpt`: the ChatGPT extension ([Chrome Web Store](https://chromewebstore.google.com/detail/greenchat/ndpiijjfeonckaejbemcbhanmapdpopm))
- `packages/copilot`: the Microsoft 365 Copilot extension ([Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/greenchat-copilot/nlkcbigjdpbhnigcemdneijcindalfao))
- `packages/website`: the [website](https://greenchat-ai.vercel.app)

## Installation

Install GreenChat from the [Chrome Web Store](https://chromewebstore.google.com/detail/greenchat/ndpiijjfeonckaejbemcbhanmapdpopm) or [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/greenchat-copilot/nlkcbigjdpbhnigcemdneijcindalfao).

To install manually:

1. Download the [latest release](https://github.com/simonbiennier/greenchat/releases/) and unzip it.
2. Go to `chrome://extensions/`.
3. Enable 'Developer mode'.
4. Click 'Load unpacked' and select the unzipped `dist` folder.

## Development

Requires [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/simonbiennier/greenchat.git
cd greenchat
pnpm install
```

Build an extension in watch mode, then load its `dist_chrome` or `dist_firefox` folder as an unpacked extension:

```bash
pnpm --filter @greenchat/chatgpt dev           # or dev:firefox
pnpm --filter @greenchat/copilot dev           # or dev:firefox
```

Run the website locally:

```bash
pnpm --filter @greenchat/website dev
```

Production builds use `build` (or `build:firefox`) in place of `dev`. Lint everything with `pnpm lint`.

## Contributing

See the [contribution guide](CONTRIBUTING.md) and please follow the [code of conduct](CODE_OF_CONDUCT.md) in all your interactions with the project.

## License

Licensed under the [MIT License](LICENSE).
