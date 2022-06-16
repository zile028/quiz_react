import axios from "axios";

class Utils {
  static getQuestions = () => {
    return axios.get(
      "https://raw.githubusercontent.com/zile028/fake-db/main/all_questions.json"
    );
  };

  static randomize = (arr) => {
    let copyArr = [...arr];
    let randomArr = [];
    arr.forEach((el) => {
      let rnd = Math.floor(Math.random() * copyArr.length);
      randomArr.push(copyArr[rnd]);
      copyArr.splice(rnd, 1);
    });
    return randomArr;
  };
}

export default Utils;
