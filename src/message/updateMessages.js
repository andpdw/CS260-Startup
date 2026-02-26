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