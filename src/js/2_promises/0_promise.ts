import { runTests, type Test } from '@src/utils/log1.ts';

// Basic example of promise

interface User {
  firstName: string;
  lastName: string;
  dob: string;
}

type FirstName = string;

const fetchUser = (firstName: FirstName): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName === 'Leonid') {
        resolve({
          firstName,
          lastName: 'Dobrinov',
          dob: '04/01/2001'
        });
      } else {
        reject(`user ${firstName} not found`);
      }
    }, 2000);
  });
};

type HandleFetchUserReturn = User | string;

export const handleFetchUser = async (firstName: FirstName): Promise<HandleFetchUserReturn> => {
  try {
    const fetchedUser = await fetchUser(firstName);
    console.log('Promise Resolved');
    console.log(fetchedUser);
    return fetchedUser;
  } catch (error) {
    console.error('Promise Rejected');
    console.log(error);
    return error as string;
  } finally {
    console.log('Promise Finally completed');
  }
};

(async () => {
  const handleFetchUser_tests: Test<HandleFetchUserReturn, HandleFetchUserReturn>[] = [
    {
      name: 'if user firstName is Leonid, returns user data',
      expected: {
        firstName: 'Leonid',
        lastName: 'Dobrinov',
        dob: '04/01/2001'
      },
      actual: await handleFetchUser('Leonid')
    },
    {
      name: 'if user firstName is not Leonid, returns "user firstName not found"',
      expected: 'user Ivan not found',
      actual: await handleFetchUser('Ivan')
    }
  ];

  runTests({
    name: 'handleFetchUser',
    tests: handleFetchUser_tests
  });
})();
