'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener('click', (e) => {
    createNote(notes)
    saveNotes(notes)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const now = moment()

now.minute(1)
now.subtract(1, 'week').subtract(20, 'days')

const nowTimestamp = now.valueOf()

const bday = moment("09-12-1984", "MM-DD-YYYY")