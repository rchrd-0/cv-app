const NewBasic = () => {
  return {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    title: '',
    location: '',
    desc: '',
  };
};

const NewEmployment = (id) => {
  return {
    id,
    name: '',
    position: '',
    yearStart: '',
    yearEnd: '',
    desc: '',
  };
};

const NewEducation = (id) => {
  return {
    id,
    name: '',
    programme: '',
    yearStart: '',
    yearEnd: '',
  };
};

export { NewBasic, NewEmployment, NewEducation };
