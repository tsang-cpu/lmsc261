import requests
import json

params = {
    'term' : 'steely dan',
    'media' : 'music',
    'entity' : 'song',
    'limit' : 5
}

response = requests.get("https://itunes.apple.com/search", params=params)
data = response.json()
data = json.dumps(data, indent=4)
print(data)
