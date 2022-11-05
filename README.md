# Usage :

This server will listen on port 8000

# URL for resizing an image :

http://localhost:8000/api/images

## Expected parameters are :
	filename, which is expected to be one of these 
		1. encenadaport
		2. fjord
		3. icelandwaterfall
		4. palmtunnel
		5. santamonica
	width, and expected to be 
		1. valid number
		2. positive number 
	height, expected to be 
		1. valid number
		2. positive number
### example :
	localhost:8000/api/images?filename=santamonica&width=200&height=200
