export default function slider(array, index) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Add an array with elements")
    }

    if (index < 0 || index >= array.length) {
        throw new Error("Add a positive index")
    }

    let prev, curr, next

    prev = index <= 0 ? array[array.length - 1] : array[index - 1]
    next = index >= array.length - 1 ? array[0] : array[index + 1]
    curr = array[index]

    return { prev, curr, next }
}
