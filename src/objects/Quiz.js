class Quiz {
    constructor() {
        this.title = '';
        this.questions = [];
        this.owner = '';
        this.id = null;
        this.nbQuestions = null;
    }

    isValid() {
        if (this.title.trim() === "") return false;
        if (this.questions.length == 0) return false;

        let valid = true;

        this.questions.forEach(ques => {
            if (!ques.isValid()) {
                valid = false;
                return;
            }
        });

        return valid;
    }

    toJSON() {
        let obj = {
            "owner": this.owner,
            "title": this.title,
            "questions": []
        };

        this.questions.forEach(ques => {
            obj.questions.push(ques.toJSON());
        });

        return obj;
    }
}

export default Quiz;