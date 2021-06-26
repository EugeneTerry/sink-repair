import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


export const SinkRepair = () => {
  return `
  <header class="header">
  <img src = "./logos/sinkLogo.png" class="logo" />
  <h1>Maude and Merle's Sink Repair</h1>
  </header>
  <section class="serviceForm">
    <h2>Service Form</h2>
    ${ServiceForm()}
  </section>

  <section class="serviceRequests">
      <h2>Service Requests</h2>
      <article class = "deleteFlex">
      ${Requests()}
      </article>
  </section>
  `
}

