fetch('https://graph.instagram.com/17841447027521354/media?fields=id,media_type,media_url,username,timestamp,caption,children&access_token=IGQVJWR2hYRXN1bWFjdmNKbHlYM2lpUWMxdU80UkduLXpKMjQ0eEpDQ1hsNnJmWDVJenRHd1BtQXNtY2xON0xfcVR2cXNXeUhIVVNnZAnBnUlNzdlktZA1hnQWpLamlTWDQ2NXlUd2pFVE81cjgyUWpuLUFpbkQyYldPd2Nn')
  .then(response => response.json())
  .then(data => {

		const igContainer = document.querySelector('.ig-container')
		console.log(data)
		data.data.forEach(node => {
			const imgElem = node.media_type === "VIDEO" ? document.createElement('video') : document.createElement('img');
			imgElem.setAttribute('src', node.media_url)
			igContainer.appendChild(imgElem)
		})
	});