import { getRequests } from "./dataAccess.js";
export const Requests = () => {

    const requests = getRequests()

    const allServiceRequestsInListForm = (request) => {
        return `<li>${request.description}</li>`
    }
    
    let html = `
        <ul>
            ${requests.map(allServiceRequestsInListForm).join("")}
        </ul>
    `

    return html
}