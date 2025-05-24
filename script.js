fetch("https://ii4eiip9ok.execute-api.us-east-2.amazonaws.com/prod/visits")
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").innerText = data.count;
  })
  .catch(error => {
    console.error("Error fetching visitor count:", error);
  });
