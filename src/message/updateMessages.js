export function updateMessages(messages, setMessagesFuncs, newName, newText) {
    for (let i = 9; i > 0; i--) {
        setMessagesFuncs[i]({
            name: messages[i-1].name,
            message: messages[i-1].message
        })
    }
    setMessagesFuncs[0]({
        name: newName,
        message: newText
    })
}

/*const messageData = [
    {name: "Clayton", message: "And I just got back"},
    {name: "Andrew", message: "I can set up your password in an hour"},
    {name: "Jacob", message: "This is a real message"},
    {name: "Jeffery", message: "I will be gone for the next 3 hours."},
    {name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"},
    {name: "Clayton", message: "I will be gone for the next 2 hours."},
    {name: "Clayton", message: "And I just got back"},
    {name: "Andrew", message: "I can set up your password in an hour"},
    {name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"},
    {name: "Clayton", message: "I will be gone for the next 2 hours."}
]*/

/*export function getMessages(setMessagesFuncs, numMessages) {
    for (let i = 0; i < numMessages; i++) {
        setMessagesFuncs[i]({
            name: messageData[i].name,
            message: messageData[i].message
        })
    }
}*/