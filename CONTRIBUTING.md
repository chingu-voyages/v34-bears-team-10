## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. **We heartily welcome any and all contributions that match our code style standards!**

That being said, this codebase isn't your typical open source project because it's not a library or package with a limited scope — it's an entire product.

### Ground Rules

**Contributions and discussion guidelines**

- All discussions agree to GitHub's [Community Guidelines](https://help.github.com/en/github/site-policy/github-community-guidelines) and [Acceptable Use Policies](https://help.github.com/en/github/site-policy/github-acceptable-use-policies). We expect discussions in issues and pull requests to stay positive, productive, and respectful.

**Reporting a bug or discussing a feature idea**

- If you found a technical bug or have ideas for features we should implement, open a new issue. Make sure to follow the issue template and you should be golden! ([click here to open a new issue](https://github.com/chingu-voyages/v34-bears-team-10/issues/new/choose))

**Fixing a bug or implementing a new feature**

- If you find a bug and open a PR that fixes it we'll review it as soon as possible to ensure it matches our code style standards.
- If you want to implement a new feature, open an issue first to discuss what it'd look like and to ensure it fits in our roadmap and plans for the app (see [the roadmap](https://github.com/chingu-voyages/v34-bears-team-10/issues) for planned and currently ongoing work).

## Prerequisites

We require you to use `volta` to manage your npm and node environment versions

- volta
  - [Getting Started](https://docs.volta.sh/guide/getting-started)

## Getting Started

### Installation

1. Fork the project
2. Clone the repo
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename `.env.example` to `.env.local` and fill in the env vars
5. Run development server
   ```sh
   npm run dev
   ```

### Branching

1. Create your Feature Branch (`git checkout -b feat/#<issue_number>-amazing-feature`)
2. Commit your Changes (`git commit -m "feat: add some amazing feature"`)
3. Push to the Branch (`git push -u origin feat/#<issue_number>-amazing-feature`)
4. Open a Pull Request

### Pull Requests

We require all new PRs to follow these guidelines. Any PR should use [git keywords](https://docs.github.com/en/enterprise-server@3.0/github/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)

```sh
<title> [Short summury of the PR, under 54 characters]
<description> [Detailed description of the PR, it can be used the initial issue description]

Fixes #<issue_number>
```

All merges should use the [squash strategy](https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-pull-request-commits) and the PR merge message/title should follow [conventional commits](https://www.conventionalcommits.org/en/about/) also.
