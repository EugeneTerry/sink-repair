import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
  fetchRequests().then(
    () => {
      mainContainer.innerHTML = SinkRepair() 
    }
  )
    
}

render()

document.addEventListener("stateChanged", customEvent => {
  render()
  })
