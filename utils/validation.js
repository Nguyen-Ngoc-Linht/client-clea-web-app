let emailFormat = () => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (v) => regex.test(v) || false;
};

export default {
  emailFormat,
};
