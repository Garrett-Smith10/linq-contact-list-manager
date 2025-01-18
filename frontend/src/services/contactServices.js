export const getAllContacts = () => {
    return fetch("http://localhost:8088/contacts").then((res) => res.json)
}

export const createContact = (newContact) => {
    return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)

    })
    .then((res) => res.json())
}