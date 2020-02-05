class Response {
    constructor(correct) {
        this.text = '';
        this.correct = correct;
        this.id = null;
    }

    isValid() {
        if (this.text.trim() === "") return false;
        return true;
    }
}

export default Response;