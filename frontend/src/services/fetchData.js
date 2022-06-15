import axios from "axios";

class FetchData {
  static getQuestions = () => {
    return axios.get(
      "https://raw.githubusercontent.com/zile028/fake-db/main/all_questions.json"
    );
  };
}

export default FetchData;
