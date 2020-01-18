class Quizz {
    constructor() {
        this.titre = '';
        this.questions = [];
    }

    isValid() {
        if (this.titre.trim() === "") return false;
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
            "owner": "DEFAULT",
            "title": this.titre,
            "questions": []
        };

        this.questions.forEach(ques => {
            obj.questions.push(ques.toJSON());
        });

        return obj;
    }
}

export default Quizz;