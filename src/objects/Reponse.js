class Reponse {
    constructor(correct) {
        this.text = '';
        this.correct = correct;
    }

    isValid() {
        if (this.text.trim() === "") return false;
        return true;
    }
}

export default Reponse;