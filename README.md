<img width="100" height="100" align="right"  src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/200/external-social-news-aggregation-web-content-rating-and-discussion-website-logo-tritone-tal-revivo.png" alt="external-social-news-aggregation-web-content-rating-and-discussion-website-logo-tritone-tal-revivo"/>

# Reddit Rescuer

Reddit Rescuer is a media downloader for Reddit that allows users to easily download their saved image and video posts from the platform. This tool is designed to help you securely backup your favorite media content for offline viewing or archiving purposes.

## Features

- **Effortless Downloads**: Download all the images and videos from your saved Reddit posts in just a few clicks.
- **Easy-to-Use Interface**: A user-friendly command-line interface for simple and intuitive operation.
- **Batch Download Support**: Download multiple posts in one go, saving you time and effort.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before using Reddit Rescuer, you need to have the following prerequisites:

- Node.js: You can download it [here](https://nodejs.org/).
- Reddit credentials (Username and Password): Client ID, Client Secret, and Redirect URI not needed as data is scraped with [Puppeteer](https://pptr.dev/).

### Installation

1.  Clone the repository to your local machine:

```bash
git clone https://github.com/anthonybuncio/reddit-rescuer.git
```

2.  Navigate to the project directory:

```bash
cd reddit-rescuer
```

3.  Install the required Node.js packages using npm:

```bash
npm install
```

4.  Create a `.env` file in the project directory with your Reddit credentials. You can use `.env.example` as a template.

```bash
touch .env
```

### Usage

1.  Run Reddit Rescuer:

```bash
npm start
```

2.  The application will attempt to confirm your credentials from the `.env` file. Follow the on-screen terminal instructions to grant the necessary permissions.

    > If there are any issues finding your credentials, the terminal may prompt you to manually enter them to log into your Reddit account with Reddit Rescuer.

3.  After authorization, the tool will fetch your saved image and video posts and begin downloading them to your local `./output` folder.

## Contributing

We welcome contributions to Reddit Rescuer. If you find any issues, have feature requests, or want to contribute to the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

3.  Make your changes and commit them with a descriptive message.
4.  Push your branch to your forked repository.
5.  Create a pull request to the main repository with a clear explanation of your changes.
6.  Your pull request will be reviewed, and once accepted, your changes will be merged.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/anthonybuncio/reddit-rescuer/blob/main/LICENSE.txt) file for details.

For more information and advanced usage, please refer to the full documentation or contact the developer for support.

If you have any questions or encounter issues, feel free to open an issue in the repository.

Happy downloading! 📥 📸 📹

---

**Disclaimer**: Reddit Rescuer is an unofficial tool and is not affiliated with Reddit Inc. It is intended for personal use and backup purposes. Please use it responsibly and respect Reddit's terms of service and the rights of content creators.
