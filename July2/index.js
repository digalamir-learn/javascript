let date;
let url = "https://api.nasa.gov/planetary/apod?"

date = document.getElementById("sngDate").value;


const submitButton = document.getElementById('sngBtn');
let newurl = url+"date="+date+"?"+"api_key="+"DEMO_KEY";
submitButton.onclick = fucntion() async {
    let response = await fetch('newurl')
}
