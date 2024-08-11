function Hello() {
  
  let name = "Prasant";
  let number = 43;

  let fullName = () => {
    return "Prasant jain";
  }

  return (
    <h1>Message No. {number}: this is your master { fullName() }</h1>
  )
};

export default Hello;

