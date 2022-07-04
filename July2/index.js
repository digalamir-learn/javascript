let date;
let url = "https://api.nasa.gov/planetary/apod?"

date = document.getElementById("sngDate").value;
let data = {
    "date" : date,
    "api_key" : "DEMO_KEY"
};

const submitButton = document.getElementById('sngBtn');
let newurl = url.searchParams.append()
submitButton.onclick = fucntion() {
    let response = await fetch('')
}