const containerEl = document.querySelector(".container")

const carrers = ["Youtuber" , "Web Developer" , "Freelancer", "Instructor"]

let carrerIndex = 0

let characterIndex = 0

updateText()

function updateText()
{
    containerEl.innerHTML = `<h1>I am ${carrers[carrerIndex].slice(0,1) === "I" ? "An":"A"} ${carrers[carrerIndex].slice(0,characterIndex+1)}</h1>`

    characterIndex++

    if(characterIndex === carrers[carrerIndex].length)
    {
        carrerIndex++
        characterIndex = 0
    }

    if(carrerIndex === carrers.length)
    {
        carrerIndex = 0
    }
    setTimeout(updateText, 100)
}

