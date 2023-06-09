const INVALID_ARG_MESSAGE = 'Invalid argument.';
const INVALID_CHARACTER_ID_MESSAGE = 'Invalid character id';
const INVALID_EPISODE_ID_MESSAGE = 'Invalid episode id';

const createDebounceFunction = {
  invalid: [
    {
      caseTitle: 'empty args',
      args: [],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'empty delay',
      args: [() => console.log()],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'not a function',
      args: [{length: 4, name: 'function'}, 1234],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'not a function',
      args: [null, 1234],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'not a function',
      args: [undefined, 1234],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'not a positive delay',
      args: [() => console.log(), -1234],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'delay is a float',
      args: [() => console.log(), 12.3],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'delay is a NaN',
      args: [() => console.log(), NaN],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'delay is a string',
      args: [() => console.log(), '1234'],
      errorText: INVALID_ARG_MESSAGE,
    },
    {
      caseTitle: 'delay is an Infinity',
      args: [() => console.log(), Infinity],
      errorText: INVALID_ARG_MESSAGE,
    },
  ]
}

const RickAndMorty = {
  invalid: [
    {
      caseTitle: 'empty args',
      id: undefined,
    },
    {
      caseTitle: 'NaN',
      id: NaN,
    },
    {
      caseTitle: 'string',
      id: '2',
    },
    {
      caseTitle: 'not positive integer',
      id: -2,
    },
    {
      caseTitle: 'Infinity',
      id: Infinity,
    },
  ]
}


export default {
  createDebounceFunction,
  RickAndMorty,
  INVALID_CHARACTER_ID_MESSAGE,
  INVALID_EPISODE_ID_MESSAGE,
}
