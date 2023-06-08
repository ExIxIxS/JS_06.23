const INVALID_ARG_MESSAGE = 'Invalid argument.';

const customFilter = {
  valid: [
    {
      caseTitle: 'item check',
      arr: [0, 1, 2, 3],
      args: [
        (item, index, arr) => item > 0,
        {}
      ],
      expectedResult: [1, 2, 3],
    },
    {
      caseTitle: 'index check',
      arr: [0, 1, 2, 3],
      args: [
        (item, index, arr) => index > 1,
        {}
      ],
      expectedResult: [2, 3],
    },
    {
      caseTitle: 'index check',
      arr: [0, 1, 2, 3],
      args: [
        (item, index, arr) => arr.length === 4,
        {}
      ],
      expectedResult: [0, 1, 2, 3],
    },
    {
      caseTitle: 'thisArg check',
      arr: [0, 1, 2, 3],
      args: [
        function(item, index, arr) {
          return index > this.indexLimit;
        },
        {indexLimit: 1}
      ],
      expectedResult: [2, 3],
    },
    {
      caseTitle: 'nonArror function check without thisArg',
      arr: [0, 1, 2, 3],
      args: [
        function(item, index, arr) {
          return index > 1;
        },
      ],
      expectedResult: [2, 3],
    },
  ],
  invalid: [
    {
      caseTitle: 'empty args',
      arr: [],
      args: [],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'the first arg is not a function',
      arr: [],
      args: [23],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'the second arg is not a object',
      arr: [],
      args: [
        (item, index, arr) => index > 1,
        34
      ],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'the second arg is a null',
      arr: [],
      args: [
        (item, index, arr) => index > 1,
        null
      ],
      errorText: INVALID_ARG_MESSAGE,
    },
  ]
}

const bubbleSort = {
  valid: [
    {
      arr: [],
      expectedResult: []
    },
    {
      arr: [-3, 0, 4567, 24, -1000],
      expectedResult: [-1000, -3, 0, 24, 4567]
    },
    {
      arr: [2, 4, 9, 3],
      expectedResult: [2, 3, 4, 9]
    },
    {
      arr: [4, 2, 4, 4, 2, 4, 3, 3, 1, 3],
      expectedResult: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    },
  ],
  invalid: [
    {
      arr: [2, -23, NaN],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      arr: [2, -23, -Infinity, 3434],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      arr: [2, -23, Infinity, 3434],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      arr: undefined,
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      arr: 345,
      errorText: INVALID_ARG_MESSAGE,
    },
  ]
}

let storageWrapperCounter = 0;
const storageWrapperLog = [];

const storageWrapper = {
  valid: [
    {
      args: [
        () => storageWrapperCounter++,
        [9, 8, 7]
      ],
      expectedResult: () => storageWrapperCounter - 1,
    },
    {
      args: [
        () => storageWrapperCounter++,
      ],
      expectedResult: () => {
        storageWrapperLog.push(storageWrapperCounter - 1);
        return storageWrapperLog;
      },
    },
  ],
  invalid: [
    {
      args: [],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      args: ['invalid'],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      args: [() => storageWrapperCounter++, 'invalid'],
      errorText: INVALID_ARG_MESSAGE,
    },
  ]
}

export default {
  customFilter,
  bubbleSort,
  storageWrapper,
}
