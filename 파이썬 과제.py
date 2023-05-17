import requests
from bs4 import BeautifulSoup
url = "https://www.naver.com/"
response = requests.get(url)
print(response.status_code)

print(response.text)

soup = BeautifulSoup(response.content, "html.parser")
print(soup.find_all("h2"))