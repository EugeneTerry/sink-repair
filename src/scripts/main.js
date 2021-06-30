import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumberRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
      mainContainer.innerHTML = SinkRepair() 
}


fetchRequests()
fetchPlumberRequest()


document.addEventListener("stateChanged", customEvent => {
  render()
  })
