function myFunction() {
  var x = document.getElementById("Links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// myFunction()

async function fetchData() {
  const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=2Zh1LEDyxFnGn7kBgAj6n3uNvidXoCEWVhol0HOj&category=code&difficulty=Medium&limit=10')
  const json = await response.json()
  displayUsers(json)
}

fetchData()
const qp = document.getElementById('qp')
const $userList = document.getElementById('con')

function displayUsers(json) {
  const htmlTemplate = []

  for (const user of json) {
    htmlTemplate.push(`<h2 class = "Questions" >Question${user.id}</h2><p>${user.question}</p>
    <div>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">${user.answers.answer_a}</label>
    </div>
    <div>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">${user.answers.answer_b}</label>
    </div>
    <div>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">${user.answers.answer_c}</label>
    </div>
    <div>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">${user.answers.answer_d}</label>
    </div>
    
    `)
    $userList.innerHTML = htmlTemplate.join('')
  }