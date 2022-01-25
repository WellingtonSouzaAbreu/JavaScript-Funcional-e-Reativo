const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll } = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/WellingtonSouzaAbreu/repos'
})
    .pipe(
        map(resp => resp.xhr.responseText) // Convert to JSON
    )
    .subscribe(console.log)