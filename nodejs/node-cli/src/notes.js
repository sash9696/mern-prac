import { getDB, insert,saveDB } from "./db.js"



export const newNote = async (note, tags) => {
    const data = {
        tags,
        content: note,
        id:Date.now()
    }
    await insert(data)
    return data
}


export const getAllNotes = async () => {

    const db = await getDB();

    return db.notes;

}


export const findNotes = async (filter) => {

}


export const removeNote = async (id) => {

}

export const removeAllNotes = async () => {
    await saveDB({notes:[]})
}