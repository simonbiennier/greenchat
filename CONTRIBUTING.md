# Contributing to GreenChat

Thank you for your interest in contributing to [GreenChat](https://greenchat-ai.vercel.app)!

In this guide, we'll provide you with the necessary information and guidelines to help you get started.

## Getting started

1. Fork [GreenChat](https://github.com/simonbiennier/greenchat) on GitHub.
2. Clone your fork to your local machine.
3. Add the `GreenChat` repo as an upstream remote:

```bash
git remote add upstream https://github.com/getanteon/anteon
```

4. We follow Gitflow branching model. Create a feature branch from the `develop` branch:

```bash
git checkout -b feature/FEATURE_NAME develop
```

## Submitting changes

Before submitting a [pull request (PR)](https://github.com/simonbiennier/greenchat/pulls) with your changes, please make sure you follow these guidelines:

1. Ensure your code is well-formatted and follows the established coding style for this project (e.g., proper indentation, naming conventions, etc.).

2. Write unit tests for any new functionality or bug fixes. Ensure that all tests pass before submitting your PR.

3. Update the [README.md](./README.md) file according to your changes.

4. Keep your PRs focused and as small as possible. If you have multiple unrelated changes, create separate PRs for them.

5. Add a descriptive title and detailed description to your PR, explaining the purpose and rationale behind your changes.

6. Rebase your branch with the latest upstream changes before submitting your PR:

```bash
git pull --rebase upstream master
```

7. Create a pull request (PR) against the `develop` branch.

After submitting your PR, our team will review your changes. We may ask for revisions or provide feedback before merging your changes into the master branch. Your patience and cooperation are greatly appreciated.

## Bug reports

When submitting a [bug report](https://github.com/simonbiennier/greenchat/issues), please include:

- A clear and descriptive title.
- A detailed description of the issue, including the steps to reproduce the bug.
- Any relevant information about your environment, such as the OS, Go version, and configuration.
- If possible, attach a minimal code sample or test case that demonstrates the issue.
- If possible, attach a screenshot or animated GIF that demonstrates the issue.

## Feature requests

When submitting a [feature request](https://github.com/getanteon/anteon/issues), please include:

- A clear and descriptive title.
- A detailed description of the proposed feature or enhancement, including the rationale behind it and any potential use cases.
- If possible, provide examples or mockups to help illustrate your proposal.

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it carefully and ensure that your contributions and interactions with the community adhere to its principles.
