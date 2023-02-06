(() => {
    const url = prompt("Url")
    const iframe = document.createElement("iframe")

    iframe.src = url
    iframe.style.cssText = "border: 0; margin: 0;"

    const selectedDiv = createElement("div")
    selectedDiv.cssText = "position: aboslute; background-color: rgba( 66, 135, 245, 2 ); z-index: 999;"
    document.querySelector("html").append(selectedDiv) 
    let selected;

    const mouseover = e => {
        selected = e.target
        selectedDiv.style.left
    }
    const click = e => {
        e.preventDefault()
        selected.innerHTML = ""
        iframe.clientWidth = e.clientWidth
        iframe.clientHeight = e.clientHeight
        selected.append(iframe)
        document.removeEventListener("mouseover", mouseover)
        document.removeEventListener("click", click)
    }

    document.addEventListener("mouseover", mouseover)
    document.addEventListener("click", click)
})()
