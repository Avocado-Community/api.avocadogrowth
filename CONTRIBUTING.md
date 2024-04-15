# Contributing to Avocado Growth Community

There are many ways to contribute to the Avocado Growth Community. Here are some ideas:

- **Help us grow the community**: Share the Avocado Growth Community with your friends and colleagues. The more people we have in the community, the more we can learn from each other.
- **Contribute to the codebase**: If you're a developer, you can contribute to the codebase of the Avocado Growth Community. You can find the codebase on [GitHub](https://github.com/Avocado-Community).
- **Improve the documentation**: If you're good at writing, or you have found a typo in the docs, you can help us improve the documentation.

But there are many other ways to help. In particular, answering queries on the [issue tracker](https://github.com/Avocado-Community/api.avocadogrowth/issues), investigating bugs, and suggesting new features are all very valuable contributions and may decrease the burden on the maintainers.

Another way to contribute is to report issues you're facing by creating a new issue on the issue tracker. Please make sure to provide as much information as possible and use the appropriate issue template, so we can help you as quickly as possible. It also helps if you spread the word: reference the project from your social media accounts, blog, or website, or simply star it on GitHub to point out your interest.

## Quick links

- [Submitting a bug report or feature request]()
- [Coding guidelines]()
- 

## Code of Conduct
We abide by the principle of openness, respect and consideration of the others. Please refer to our [Code of Conduct](CODE_OF_CONDUCT.md) for more information.

## Submitting a bug report or feature request

We use the GitHub issues to track all bugs and feature requests; feel free to open an issue if you have found a bug or wish to see a new feature added to the Avocado Growth app.

Before opening a new issue, please search the existing issues to see if your issue has already been reported. If it has, you can add a comment to the existing issue instead of opening a new one.

When opening a new issue, please provide as much information as possible, including the steps to reproduce the bug and the expected behavior. If you're requesting a new feature, please describe the feature in as much detail as possible.

### How to submit a bug report

When you submit a bug report, please do your best to follow the guidelines below. This will make it easier for us to help you.

1. **Include minimal reproducible example:** The ideal bug report contains a short reproducible code snippet, this way anyone can try to reproduce the bug easily (see this for more details). If your snippet is longer than around 50 lines, please link to a gist or a GitHub repo.

2. **If not feasible:** If it is not possible to include a reproducible snippet, please be specific about what functions are involved and the expected behaviour.

3. **Give us the Exception StackTrace:** If an exception is raised, please provide the full traceback.

4. **Include hardware and software information:** Please include your operating system type and version number, as well as your TypeScript and JS versions.
5. **Tag the issue:** Please tag the issue with the appropriate label, such as `bug` or `feature request`.

Please ensure all code snippets and error messages are formatted in appropriate code blocks.

## Contributing Code

If you are a developer and would like to contribute code to the Avocado Growth Community, you can do so by following the workflow described below.

> [!WARNING]
> Before contributing code, please make sure to read the [Code of Conduct](CODE_OF_CONDUCT.md).


> [!NOTE]
> To avoid duplicating work, it is highly recommended to search through the [issue tracker](https://github.com/Avocado-Community/api.avocadogrowth/issues) and the [pull requests list](https://github.com/Avocado-Community/api.avocadogrowth/pulls). If you still doubt whether your contribution may represent duplicate work or that the contribution is not trivial, please open an issue to discuss it with core contributors.
> One easy way to find an issue to solve is to search for `help wanted` or `good first issue` labels in the issue tracker. This lists issues that are whether easy to solve or that the core contributors are looking for help with.

### How to contribute code

The preferred way to contribute to the Avocado Growth API code base is to fork the repository on GitHub and then submit a pull request (PR).

1. **Fork the repository:** Go to the [Avocado Growth API repository](https://github.com/Avocado-Community/api.avocadogrowth) and click on the "Fork" button in the top right corner. This will create a copy of the repository in your GitHub account.
2. **Clone the repository:** Clone the repository to your local machine using the following command:
   ```bash
   git clone git@github.com:YourLogin/api.avocadogrowth.git
   cd api.avocadogrowth
   ```
3. **Install the dependencies:** Install the dependencies using the following command:
   ```bash
   TODO
   ```
4. **Add the upstream repository:** Add the upstream repository as a remote using the following command:
   ```bash
   git remote add upstream git@github.com:avocado-community/api.avocadogrowth.git
   ```
5. **Check that `upstream` and `origin` are set correctly:** You can check that the `upstream` and `origin` remotes are set correctly using the following command:
   ```bash
   git remote -v
   ```
6. **Fetch the latest changes from the upstream repository:** Fetch the latest changes from the upstream repository using the following command:
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```
7. **Create a new branch:** Create a new branch for your changes using the following command:
   ```bash
    git checkout -b my-feature-branch
    ```
   And make your changes. Always make sure to work on a new branch and not on the `main` branch.
8. **Commit your changes:** Commit your changes to your local repository using the following command:
   ```bash
   git add modified-file1 modified-file2
   git commit -m "Add my feature"
   ```
   to record your changes. Then pushes the changes to your forked repository using the following command:
   ```bash
    git push -u origin my-feature-branch
    ```
9. **Create a pull request:** Go to the [Avocado Growth API repository](https://github.com/Avocado-Community/api.avocadogrowth/pulls) and creates a new pull request. Make sure to provide a detailed description of your changes and reference any related issues.

### Pull Request Checklist

Before submitting a pull request, please make sure to check the following:

- [ ] The code is well-documented and follows the coding guidelines.
- [ ] The code passes all tests and linting checks.
- [ ] The PR title is descriptive and follows the PR template provided
- [ ] The PR description provides a detailed explanation of the changes.
- [ ] The PR references any related issues.
- [ ] If the PR is a work in progress, prefix the title with `[WIP]`. If the PR is ready for review, remove the `[WIP]` prefix and add the `[MRG]` label.
- [ ] If a core contributor has requested changes, please address the feedback and update the PR description accordingly.

### Rewarding contributions

We value all contributions to the Avocado Growth Community, and we want to reward those who contribute to the project. This is materialized in the following ways:

- **Recognition:** All contributors will be recognized in the project's [contributors list]()
- **Code ownership:** Contributors who have made significant contributions to the project may be granted with copyright ownership of the code they have contributed and/or a recognition and thankful note in the code documentation.