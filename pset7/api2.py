import requests
import json

queries = {
    'filter[stop]' : 'place-hyml',
    'filter[route]' : 'Green-B',
    'page[limit]' : 1
} 
url = "https://api-v3.mbta.com/predictions?"

try:
    response = requests.get(url, params=queries)
    data = response.json()
    formatted = json.dumps(data, indent=4)
    print(formatted)
except requests.exceptions.ConnectionError:
    print("no internet")

import requests 
import json

