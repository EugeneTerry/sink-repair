import {getRequests} from "./dataAccess.js"


export const Requests = () => {
  const requests = getRequests()
 let html = `
    <ul> 
      ${requests.map(request => {
        return `<li> ${request.description} <button class="request__delete"
          id="request--${request.id}">Delete
          </button>
          </li>`
        }).join("")
      }
    </ul>
  `

return html

 
}




 // let html = "<ul>"
  // const listItems = request.map()