import requests
print('Start')
response = requests.get('http://www.google.com')

# just print out the first 30 characters of the response body
print(response.text[0:30])
print('Done!')
