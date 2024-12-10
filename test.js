const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

console.log(encode({ "form-name": "contact", name: 'test', email: 'fad@dfajk.adfa', message: 'fadfadf' }));