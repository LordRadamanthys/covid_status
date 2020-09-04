
export function getDate() {
    const date = new Date()
    let dateNow = ''
    if (date.getDay() < 10 && date.getMonth() < 10) {
       return dateNow = `0${date.getDay()}/0${date.getMonth()}/${date.getFullYear()}`
    } else {
        return dateNow = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

    }
}