import axios from "axios";
let wholeDAta = [];
function App() {
  const userList = async () => {
    let formsdata = new FormData();
    formsdata.append("user_id", 1);
    formsdata.append("role", 1);
    await axios
      .post(
        "https://join.mmbaicindia.com/api/ApiCommonController/getuserlist",
        formsdata
      )
      .then((res) => {
        console.log(res?.data?.data?.users);
      });
    debugger;
  };
  const ProductList = async () => {
    let formsdata = new FormData();
    formsdata.append("user_id", 1);
    formsdata.append("role", 1);
    await axios
      .post(
        "https://join.mmbaicindia.com/api/ApiCommonController/productlistapi",
        formsdata
      )
      .then((res) => {
        console.log(res?.data?.data?.users);
      });
    debugger;
  };
  const UpdateRole = async () => {
    let formdata = new FormData();
    formdata.append("user_id", 1);
    formdata.append("role", 1);

    await axios
      .post(
        "https://join.mmbaicindia.com/api/ApiCommonController/getrolelist",
        formdata
      )
      .then((res) => {
        let wholeRole = res?.data?.data;
        wholeDAta.push(wholeRole);
        wholeRole?.forEach((ele) => {
          let formsdata = new FormData();
          formsdata.append("user_id", 1);
          formsdata.append("role_name", ele?.id);
          formsdata.append("description", "");
          formsdata.append("selectedarray", []);
          axios.post(
            "https://join.mmbaicindia.com/api/ApiCommonController/editrolesubmit",
            formsdata
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // let formsdata = new FormData();
    // formsdata.append("user_id", 1);
    // formsdata.append("role_name", 1);
    // formsdata.append("description", 1);
    // formsdata.append("selectedarray", []);
    // // const [CustomeData, UserData, ExpensesData] = await Promise.all([
    // axios.post(
    //   "https://join.mmbaicindia.com/api/ApiCommonController/editrolesubmit",
    //   formsdata
    // );
  };
  return (
    <div className="App">
      <button onClick={UpdateRole}>Update Role</button>
      <button onClick={userList}>UserList</button>
      <button onClick={ProductList}>ProductList</button>
    </div>
  );
}

export default App;
