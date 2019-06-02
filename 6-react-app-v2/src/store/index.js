
const store = {
    getState() {
        return {
            topics: [
                "java",
                "js",
                "scala",
                "python"
            ],
            comments: {
                "java": [
                    "best one",
                    "widely used",
                    "proven language"
                ]
            }
        }
    },
    subscribe(callback) {
        //..
    },
    unsubscribe() {

    }
}

export default store;