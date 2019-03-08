<script>

  window.onload = function() {
    axios.get('https://example.com/api/v2/mysql/_table/devices', { 'headers': { 'X-DreamFactory-Api-Key': 'YOUR_API_KEY_GOES_HERE' }})
    .then(function (response) {

      for (var i= 0; i < response.data.resource.length; i++) {
        console.log(response)
      }
    })
    .catch(function (error) {
      error = error;

   });
};
</script>

        axios.get('https://example.com/api/v2/mysql/_table/devices', { 'headers': { 'X-DreamFactory-Api-Key': 'YOUR_API_KEY_GOES_HERE' }})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });