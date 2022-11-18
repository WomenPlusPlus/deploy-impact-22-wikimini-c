# Wikimini - MediaKiwi 🥝

Our solution extends MediaWiki to support the creation of classes, tasks, with a proposal of a new redesign of the platform.

## :computer: Getting Started

Our project has two main components:
1. The Backend, powered by a vanilla MediaWiki at the [mediawiki application folder](./mediawiki/Application), with a custom extension.
2. A front-end, build with React, which powers the teacher dashboard, that allows the creation of classes and tasks for students.

### To launch the MediaWiki backend locally:
1. Follow these [instructions](./mediawiki/Application/Readme.md) to install and learn more about MediaWiki
2. We created our own WikiMini Extension, you can check its documentation [here](./mediawiki/Application/extensions/WikiMiniExtension)
 
### To launch the front-end project locally:

1. Open the terminal window and clone the repository using this command:

- HTTPS: `https://github.com/WomenPlusPlus/deploy-impact-22-wikimini-c.git`
- SSH: `git@github.com:WomenPlusPlus/deploy-impact-22-wikimini-c.git`

1. Change the directory to wikimini front-end directory  
`cd deploy-impact-22-wikimini-C`
2. Create an .env file in the root of the project containing:
  `REACT_APP_API_URL=(deployed media-wiki url or the local mediawiki)`
3. Install the project's dependencies by running this command:   
`npm install` or `yarn install`
4. Run this command to see the page `npm start` or `yarn start`
5. Go to http://localhost:3000/ to check the app

### Deployed MediaWiki
http://wikimini-c.azurewebsites.net/

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](./issues).

## :tada: Acknowledgments

- A special thank for women++, Wikimedia and all sponsors for providing such an amazing experience - deploy(impact) 2022

## 📝 License
[GNU General Public License v3.0](https://github.com/WomenPlusPlus/deploy-impact-22-wikimini-c/blob/development/LICENSE)

## Show your support

Give a ⭐️ if you like this project!
