import pandas as pd
from PyPDF2 import PdfReader
import re

import numpy as np
import nltk
import string
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer, WordNetLemmatizer
import math
from tqdm import tqdm

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

df_pdfs = pd.read_csv("df_pdfs.csv")

def preprocess_pdf(text):
    if isinstance(text, str):
        text = text.replace('\\n', '')  
        text = text.replace('\\t', '')  
        text = text.replace('\\uf06c', '') 
        text = text.lower()

        website_pattern = r'https?://\S+|www\.\S+'

        website_links = re.findall(website_pattern, text)

        placeholder = '###WEBSITE_LINK###'
        text_with_placeholders = re.sub(website_pattern, placeholder, text)

        cleaned_text = text_with_placeholders.replace('/', '')

        for link in website_links:
            cleaned_text = cleaned_text.replace(placeholder, link, 1)

        tokens = word_tokenize(text)

        stop_words = set(stopwords.words('english'))
        tokens = [token for token in tokens if token not in stop_words]

        tokens = [token for token in tokens if token not in string.punctuation]

        lemmatizer = WordNetLemmatizer()
        tokens = [lemmatizer.lemmatize(token) for token in tokens]
        return tokens
    else:
        return []

def split_text_into_chunks(text, words=150, words_overlap=50):
    chunks = []
    start = 0
    end = words
    tokens = word_tokenize(text)

    while start < len(text):
        chunk = tokens[start:end]
        if(chunk != []):
          chunks.append(" ".join(chunk))

        start = end - words_overlap
        end = start + words
    return chunks



errors = []
Chunks_df = pd.DataFrame(columns=['CompanyName', 'StockSymbol', 'Year', 'ChunkData', 'SourceFilePath', 'SourceFile'])
count = 0
for index, row in tqdm(df_pdfs.iterrows()):
    try:
        new_df_rows = []
        file_path = "PDF_files/" + "/".join(row['ExtractedFilePath'].split("/")[2:])
        company_name = row['CompanyName']
        stock_name = row['StockName']
        year = row['Year']
        
        # ---------------------------------------------------------------------------we are only doing for year 2021-2023------------------------------------------------------------
        if(not(year == "2021-2022" or year == "2022-2023")):
            continue
        
        # Read the PDF file
        with open(file_path, 'rb') as file:
            pdf_reader = PdfReader(file)  # Use PdfReader instead of PdfFileReader
            pdf_content = ''
            for page in pdf_reader.pages:
                pdf_content += page.extract_text()
        
        # Preprocess the PDF content and generate chunks
        tokens = preprocess_pdf(pdf_content)
        data = ' '.join(tokens)

        chunks = split_text_into_chunks(data)

        # Create new rows for each chunk
        for chunk in chunks:
            new_df_rows.append({
                'CompanyName': company_name,
                'StockSymbol': stock_name,
                'Year': year,6.0
                'ChunkData': chunk,
                'SourceFilePath': file_path,
                'SOurceFile': file_path.split("/")[-1]
            })

        chunk_df = pd.DataFrame(new_df_rows)
        Chunks_df = pd.concat([Chunks_df, chunk_df], ignore_index=True)

    except Exception as e:
        errors.append({"DATA": row, "Error": e})

# Create a new DataFrame from the list of new rows

Chunks_df.to_csv("Chunks.csv")

import json

with open('errors.json', 'w') as f:
    json.dump(errors, f)