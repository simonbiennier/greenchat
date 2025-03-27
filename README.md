# GreenChat

GreenChat is a browser extension that estimates CO<sub>2</sub> emissions of ChatGPT conversations to raise awareness about AI's environmental impact.

This repository contains the source code for the Chrome extension (in `packages/extension`) and the website (in `packages/website`).

## Getting started

Download the following tools:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [ni](https://github.com/antfu-collective/ni)

## Development

1. Clone the repository:

```bash
git clone https://github.com/simonbiennier/greenchat.git
```

2. Install the dependencies:

```bash
ni
```

3. Start the development server:

```bash
nr dev
```

## Installation

1. Download the [launch release](https://github.com/simonbiennier/greenchat/releases/tag/v1.0.0) and unzip it.
2. Go to chrome://extensions/
3. Select 'Developer mode'
4. Click on 'Load unpacked' and select the unzipped folder.

## Contributing

See our [contribution guide](CONTRIBUTING.md) and please follow the [code of conduct](CODE_OF_CONDUCT.md) in all your interactions with the project.

## License
Licensed under the [MIT License](LICENSE).
