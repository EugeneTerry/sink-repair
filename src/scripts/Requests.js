import {getRequests} from "./dataAccess.js"


export const Requests = () => {
  const requests = getRequests()
 let html = `
    <ul> 
      ${requests.map(request => {
        return `<li> ${request.description} </li>`
      }).join("")
    }
    </ul>
  `
// html +=  request.join("")
return html

 
}




 // let html = "<ul>"
  // const listItems = request.map()