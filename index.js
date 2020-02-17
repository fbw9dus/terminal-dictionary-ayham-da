const args = process.argv.slice(2)
const word = args[0]


const https = require('https')
const axios = require('axios')
const url = require('url')

const api_endpoint = `entries/`
const language_code = "en-us/"
const word_id = word
const api_key = 'd9157a16ad864796ce812e2622e3f295'
const app_id  = "f6d87272"

const api_base_url = "https://od-api.oxforddictionaries.com/api/v2/"

const request_url = url.resolve(api_base_url, api_endpoint) +`${language_code}` + `${word_id}`




async function getOxFord() {
    const res = await axios.get(request_url, {headers: {"app_id":app_id, "app_key": api_key}})
    const data = await res.data

    const type = data.results[0].lexicalEntries[0].lexicalCategory.text
    const discription = data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions
    const definitions1 = data.results[0].lexicalEntries[0].entries[0].senses[1].definitions
    const definitions2 = data.results[0].lexicalEntries[0].entries[0].senses[2].definitions

    const Provided = data.metadata.provider

    console.log(`${word} (${type}) 
    \n 1. ${discription}
    \n 2. ${definitions1}
    \n 3. ${definitions2}
    \n Provided by:${Provided} `)
}

getOxFord()


