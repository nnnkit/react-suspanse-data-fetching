/*
The createResource fucntion needs to be in special format to work with React Suspence
createResouce
@paren Promise
@return Function (read)

read function returns
  Suspender (if promise is not pending)
  Data (if promise is fulfilled)
*/
const PENDING = 'pending';
const ERROR = 'error';
const SUCCESS = 'success';

export default function createResouce(thenable) {
  let status = PENDING;
  let result = '';
  let suspender = thenable.then(
    res => {
      status = SUCCESS;
      result = res;
    },
    error => {
      status = ERROR;
      result = error;
    },
  );
  return {
    read() {
      switch (status) {
        case PENDING:
          throw suspender;
        case ERROR:
          throw result;
        default:
          return result;
          break;
      }
    },
  };
}

// const userData = createResouce(
//   fetch(`https://api.github.com/users/nnnkit`)
//     .then(res => res.json())
//     .then(user => user),
// );

// console.log(userData);
