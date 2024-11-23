document.getElementById("fetchBtn").addEventListener("click", () => {
    fetch("http://localhost:8080/api/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").textContent = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
