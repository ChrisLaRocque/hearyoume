// curl -i -X GET "https://graph.instagram.com/refresh_access_token
//   ?grant_type=ig_refresh_token
//   &access_token={long-lived-access-token}"

fetch('https://graph.instagram.com/17841447027521354/media?fields=id,media_type,media_url,username,timestamp,caption,children&access_token=IGQVJWQjNnVk11RHh1MjBSQ0RjVTNfa241V0o4Q1EwN2N1R1dUdlNKRVYtUUVlT1RLWWsxYW9VdUlLeXlEOXg2UXpFenZAKaWJjdHQzbFR6dGVFeXNWTXdUUXZAYM0o4emQtUzNNQ3p3')
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