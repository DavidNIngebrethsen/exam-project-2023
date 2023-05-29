function renderHead() {
    const headBody = document.createElement("div")
    headBody.classList.add("head-body", "desktop")

    const headHigh = document.createElement("div")
    headHigh.classList.add("head-high")
    const homeLink = document.createElement("a")
    homeLink.href = "index.html"
    const contHome = document.createElement("div")
    contHome.classList.add("head-logo")
    const titleHome = document.createElement("h1")
    titleHome.classList.add("head-title")
    titleHome.innerText = "BirdSnap"

    contHome.append(titleHome)
    homeLink.append(contHome)
    headHigh.append(homeLink)

    const headLow = document.createElement("div")
    headLow.classList.add("head-low")
    const headSlogan = document.createElement("p")
    headSlogan.classList.add("head-slogan")
    headSlogan.innerText = "Your go-to stop for bird media"

    headLow.append(headSlogan)

    const headNavPosts = document.createElement("a")
    headNavPosts.href = "list.html"
    const contHeadNavPosts = document.createElement("div")
    contHeadNavPosts.classList.add("head-nav")
    const textHeadNavPosts = document.createElement("p")
    textHeadNavPosts.classList.add("head-nav-text")
    textHeadNavPosts.innerText = "Posts"

    contHeadNavPosts.append(textHeadNavPosts)
    headNavPosts.append(contHeadNavPosts)

    const headNavAbout = document.createElement("a")
    headNavAbout.href = "about.html"
    const contHeadNavAbout = document.createElement("div")
    contHeadNavAbout.classList.add("head-nav")
    const textHeadNavAbout = document.createElement("p")
    textHeadNavAbout.classList.add("head-nav-text")
    textHeadNavAbout.innerText = "About"

    contHeadNavAbout.append(textHeadNavAbout)
    headNavAbout.append(contHeadNavAbout)

    const headNavContact = document.createElement("a")
    headNavContact.href = "contact.html"
    const contHeadNavContact = document.createElement("div")
    contHeadNavContact.classList.add("head-nav")
    const textHeadNavContact = document.createElement("p")
    textHeadNavContact.classList.add("head-nav-text")
    textHeadNavContact.innerText = "Contact"

    contHeadNavContact.append(textHeadNavContact)
    headNavContact.append(contHeadNavContact)

    headLow.append(headNavPosts, headNavAbout, headNavContact)

    headBody.append(headHigh, headLow)

    document.querySelector("header").append(headBody)
}

function renderMobileHead () {
    const headBody = document.createElement("div")
    headBody.classList.add("head-mobile-body", "mobile")

    const homeLink = document.createElement("a")
    homeLink.href = "index.html"
    const contHome = document.createElement("div")
    contHome.classList.add("head-logo")
    const titleHome = document.createElement("h1")
    titleHome.classList.add("head-title")
    titleHome.innerText = "BirdSnap"

    contHome.append(titleHome)
    homeLink.append(contHome)

    const headMenuButton = document.createElement("button")
    headMenuButton.classList.add("head-menu-button")
    const iconHeadMenuButton = document.createElement("i")
    iconHeadMenuButton.classList.add("fa-solid", "fa-bars")

    headMenuButton.append(iconHeadMenuButton)

    const menuBody = document.createElement("div")
    menuBody.classList.add("menu-body")
    const menuMenuButton = document.createElement("button")
    menuMenuButton.classList.add("menu-menu-button")
    const iconMenuMenuButton = document.createElement("i")
    iconMenuMenuButton.classList.add("fa-solid", "fa-bars")
    menuMenuButton.append(iconMenuMenuButton)
    const menuNavPosts = document.createElement("a")
    menuNavPosts.href = "list.html"
    menuNavPosts.innerText = "Posts"
    const menuNavAbout = document.createElement("a")
    menuNavAbout.href = "about.html"
    menuNavAbout.innerText = "About"
    const menuNavContact = document.createElement("a")
    menuNavContact.href = "contact.html"
    menuNavContact.innerText = "Contact"
    
    menuBody.append(menuMenuButton, menuNavPosts, menuNavAbout, menuNavContact)

    headBody.append(homeLink, headMenuButton, menuBody)

    document.querySelector("header").append(headBody)
}

let menuActive = false;