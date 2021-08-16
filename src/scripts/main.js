import { SinkRepair } from "./SinkRepair.js"
import { deleteRequest, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged", CustomEvent => {
        render()
    }
)