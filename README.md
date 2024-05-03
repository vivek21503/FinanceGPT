<h1 align="center">
  <br>
  <img src="client\public\logo.png" alt="Markdownify" width="200"></a>
  <br>
  STATSII
  <br>
</h1>

<h4 align="center">A RAG based financial analysis system, build on <a href="https://huggingface.co/docs/transformers/en/model_doc/llama2/" target="_blank">Llama 2.0</a> 

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#future-scope">Future Scope</a> •
  <a href="#how-to-setup">How To Setup</a> •
  <a href="#demo">DEMO</a> •
  <a href="#credits">Credits</a> •
  <a href="#author">Author</a> •
  <a href="#contributors">Contributors</a> •


  <!-- <a href="#related">Related</a> •
  <a href="#license">License</a> -->
</p>





## Key Features


* Integrated Reference System: Links text in financial statements with related tables for comprehensive context.
* Enhanced Retrieval Accuracy: Employs cosine similarity for precise retrieval of text and tables from financial documents.
* RAG-Based Financial Analysis Tool: Utilizes a tailored RAG approach for improved navigation and comprehension of financial statements.
* Modern UI
  - Host the query output portal.

## Future Scope
Currently We Implemented for General set of Questions related to Data.
We have Given an option to Upload desired CSV, but as the analysis of the CSV automatically is a dificult task for now, we might proceed with this later😊. 


## How To Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository to desired folder
$ git clone https://github.com/Tanishq-Tiwari-28/biostats

# Install The packages from Requirements.txt
$ pip install -r requirements.txt

# install Node dependencies
$ npm install

# run the backend(Main.py) server from api folder
$ cd api
$ flask --app main.py run

# run frontend server from client folder(via another terminal)
$ cd client
$ npm run dev

Now you will see the web application on your NPM local server.
Click on START to proceed. 
```

> **Note**
> Install the Dependencies form requirements correctly.
> In case of the ERROR "Error: Cannot find package 'rollup-plugin-svelte' ".
Terminate the Batch job , then run "npm install" and run "npm run dev" again.
 


## DEMO


https://github.com/Tanishq-Tiwari-28/biostats/assets/101003432/38cb8bdb-9a46-4b50-af35-e90c459c781c




<!-- ## Download

You can [download](https://github.com/amitmerchant1990/electron-markdownify/releases/tag/v1.2.0) the latest installable version of Markdownify for Windows, macOS and Linux. -->

<!-- ## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it! -->

## Credits

This software uses the following open source packages:

- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Svelte](https://svelte.dev/)


## Author
- Tanishq Tiwari : 2021496 [GITHUB](https://github.com/Tanishq-Tiwari-28)



<!-- ## Related

[markdownify-web](https://github.com/amitmerchant1990/markdownify-web) - Web version of Markdownify -->
<!-- 
## Support

<a href="https://www.buymeacoffee.com/5Zn8Xh3l9" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<p>Or</p> 

<a href="https://www.patreon.com/amitmerchant">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## You may also like...

- [Pomolectron](https://github.com/amitmerchant1990/pomolectron) - A pomodoro app
- [Correo](https://github.com/amitmerchant1990/correo) - A menubar/taskbar Gmail App for Windows and macOS

## License

MIT

---

> [amitmerchant.com](https://www.amitmerchant.com) &nbsp;&middot;&nbsp;
> GitHub [@amitmerchant1990](https://github.com/amitmerchant1990) &nbsp;&middot;&nbsp;
> Twitter [@amit_merchant](https://twitter.com/amit_merchant)
 -->
