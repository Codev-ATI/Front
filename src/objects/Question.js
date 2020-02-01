import Reponse from "./Response";

class Question {
    constructor() {
        this.text = '';
        this.correctReponse = new Reponse(true);
        this.reponses = [];
    }

    isValid() {
        if (this.text.trim() === "") return false;
        if (!this.correctReponse.isValid()) return false;
        if (this.reponses.length == 0) return false;

        let valid = true;

        this.reponses.forEach(rep => {
            if (!rep.isValid()) {
                valid = false;
                return;
            }
        });

        return valid;
    }

    toJSON() {
        let obj = {
            "question": this.text,
            "correct": 1,
            "answeres": []
        };

        obj.answeres.push({
            "index": 1,
            "answere": this.correctReponse.text
        });

        let index = 2;
        this.reponses.forEach(rep => {
            obj.answeres.push({
                "index": index,
                "answere": rep.text
            });

            index++;
        });

        return obj;
    }
}

export default Question;