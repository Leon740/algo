const NAME = 'Leonid Dobrinov';

const getFirstNameAndLastName_Bad = () => {
  return NAME.split(' ');
};
console.log(getFirstNameAndLastName_Bad());

const getFirstNameAndLastName = (name: string): { firstName: string; lastName: string } => {
  const separatedNames = name.split(' ');

  return {
    firstName: separatedNames[0],
    lastName: separatedNames[1]
  };
};
console.log(getFirstNameAndLastName(NAME));
