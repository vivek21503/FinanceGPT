<h1 align="center">
  <br>
  <img src="banner.jpeg" alt="Fin-Rag System" width="500"></a>
  <br>
  FIN-RAG
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
  <a href="#Methodology">Methodology</a> •
  <a href="#Pipeline">Pipeline</a> •
  <a href="#how-to-setup">How To Setup</a> •
  <a href="#demo">DEMO</a> •
  <a href="#credits">Credits</a> •
  <a href="#contributors">Contributors</a> •
</p>


Our goal is to create a financial sentiment analysis system leveraging daily news and articles for Indian market trend prediction. Additionally, we aim to develop a RAG-based system to address user queries from complex financial reports and articles, facilitating easier comprehension and decision-making.

## Key Features


* Integrated Reference System: Links text in financial statements with related tables for comprehensive context.
* Enhanced Retrieval Accuracy: Employs a combination of BERT and TF-IDF embeddings for fast and precisely retrieving text and tables from financial documents.
* RAG-Based Financial Analysis Tool: Utilizes a tailored RAG approach for improved navigation and comprehension of financial statements.
* Modern UI
  - Host the query output portal and make a WEB ChatBot.

## Methodology

For document reading and preprocessing we used  PyPDF2 which extracts the text while Camelot reads tables. Now what we did was  we segmented text  into 100-word chunks with a 30-word overlap and converted table data into .txt files.

Then we used data mapping and word embeddings to establish connection between text chunks and tables. Word embeddings help to transform textual data into numerical formats and for contextual understanding.

For the contextual analysis part, we used a combination of two models , TF-IDF model and to handle known stocks while Bert model to manage generalized financial data. We then used Llama 2.0, integrating embeddings and contextual data for advanced predictions.

Now we compared outputs from Llama and falcon models to refine the selection based on accuracy and relevance of financial predictions.

## Pipeline
<div align="center">
  <img src="ir_pipeline.jpg" alt="Fin-Rag System" width="800">
  <br>
  <div style="margin-top: 20px;">
    
  </div>
</div>




## How To Setup

To clone and run this application, you'll need [Git](https://github.com/om21481/IR-Project.git) and [Django](https://www.djangoproject.com/download/). From your command line:

```bash
# Clone this repository to the desired folder
$ git clone https://github.com/om21481/IR-Project.git

# Initialize a Python environment
$ python -m venv env

# Activate the environment
$ On windows: .\env\Scripts\activate
$ On Macos/Linux: source env/bin/activate

# Install The packages from Requirements.txt
$ pip install -r requirements.txt

$ cd IR-Project
$ python manage.py runserver

# Now the server is up and running
```

> **Note**
> Install the Dependencies form requirements correctly.
 


## DEMO


https://www.youtube.com/watch?v=zq2oweJvMH4&ab_channel=Vibhav




<!-- ## Download

You can [download](https://github.com/amitmerchant1990/electron-markdownify/releases/tag/v1.2.0) the latest installable version of Markdownify for Windows, macOS and Linux. -->

<!-- ## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it! -->

## Credits

This software uses the following open source packages:

- [Llama](https://huggingface.co/docs/transformers/en/model_doc/llama2)
- [Falcon](https://huggingface.co/Falconsai/text_summarization)


## Contributors
Aditya Arya - aditya21510@iiitd.ac.in 

Om Garg	    - om21481@iiitd.ac.in

Vivek Anand - vivek21503@iiitd.ac.in

Vibhav Balhara - vibhav21500@iiitd.ac.in

Siddharth Anand - siddharth21494@iiitd.ac.in

Tanuj Kamboj - tanuj21497@iiitd.ac.in
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
