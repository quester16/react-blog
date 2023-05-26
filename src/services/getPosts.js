export default class GetPosts{
    constructor() {
        this._url = 'http://localhost:3000/posts'
    }
    async getData(){
        const request = await fetch('http://localhost:3000/posts')

        if(!request.ok){
            throw new Error(`cannot get data from ${this._url}`)
        }

        return await request.json()
    }
}


