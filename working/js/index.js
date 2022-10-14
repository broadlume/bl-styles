$(document).ready(() => {
    "use strict"

    SetupNavbar() 
})

function SetupNavbar() {
    try {
        let nav = document.getElementsByClassName('ui-nav')
        if(nav !== undefined) {
            //multiple nav bars?
            if(nav.length > 1) {
                console.error('multiple nav tags not supported yet')
            } else if(nav.length <= 0) {
                return
            }
            let links = nav[0].getElementsByTagName('a')
            if(links !== undefined && links.length > 0) {
                //On button click
                for (var i = 0; i < links.length; i++) {
                    links[i].addEventListener("click", (e) => {
                        e.preventDefault()
                        if(!e.target.classList.contains('expand')) {
                            let active = document.getElementsByClassName('nav-active')
                            active[0].classList.remove("nav-active")
                            e.target.classList.add("nav-active")
                        }
                    })
                }
            }

        } else {
            console.error("nav tag not found")
        }
    } catch(ex) {
        console.error(ex)
    }
}

function NavCollapse() {
    try {
        let nav = document.getElementsByClassName('ui-nav')
        if(nav !== undefined) {
            if(nav.length <= 0)
                return
            let n = nav[0]
            let expanded = n.classList.contains('expanded')
            if(expanded) {
                n.classList.remove('expanded')
                n.classList.add('responsive')
                return
            }
            
            n.classList.remove('responsive')
            n.classList.add('expanded')
        }
    } catch(ex) {
        console.error(ex)
    }
}
