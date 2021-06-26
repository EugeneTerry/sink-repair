import {getRequests} from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"

export const Requests = () => {
  const requests = getRequests()
  const plumbers = getPlumbers()
 let html = `
    <ul> 
      ${requests.map(request => {
        return `<li> ${request.description} 
       
          <select class="plumbers" id="plumbers">
            <option value="">Choose</option>
            ${plumbers.map(plumber => {
              return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
          )
        }
        </select>

        <button class="request__delete"
        id="request--${request.id}">Delete
        </button>
        </li>`
      }).join("")
    }
    </ul>
    `
    
    return html
    
    
  }
