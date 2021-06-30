import { sendRequest } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container") //stage our event listener

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

mainContainer.addEventListener("click", click => {
  if (click.target.id.startsWith("request--")) {
      const [,requestId] = click.target.id.split("--")
      deleteRequest(parseInt(requestId))
  }
})

mainContainer.addEventListener(
  "change",
  (event) => {
      if (event.target.id === "plumbers") {
          const [userRequestId, userPlumberId] = event.target.value.split("--")
          /*
              This object should have 3 properties
                 1. requestId
                 2. plumberId
                 3. date_created
          */
         const d = new Date(); 
          const completion = {
            requestId: userRequestId,
            plumberId: userPlumberId,
            date_created: (`${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`)
          }
          

          /*
              Invoke the function that performs the POST request
              to the `completions` resource for your API. Send the
              completion object as a parameter.
           */
          saveCompletion(completion)

      }
  }
)



export const ServiceForm = () => {
  let html = `
    <div class="field">
      <label class="label" for="serviceDescription">Description</label>
      <input type="text" name="serviceDescription" class="input" />
    </div>
    <div class="field">
      <label class="label" for="serviceAddress">Address</label>
      <input type="text" name="serviceAddress" class="input" />
    </div>
    <div class="field">
      <label class="label" for="serviceBudget">Budget</label>
      <input type="number" name="serviceBudget" class="input" />
    </div>
    <div class="field">
      <label class="label" for="serviceDate">Date needed</label>
      <input type="date" name="serviceDate" class="input" />
    </div>
    
      <button class="button" id="submitRequest">Submit Request</button>
    
  `

  return html
}

