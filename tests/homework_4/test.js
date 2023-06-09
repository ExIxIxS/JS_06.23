
import testSets from './testSets.js';
import { createDebounceFunction, RickAndMorty } from '../../src_js/homework_4.js'

const firstApiCharacter =  {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1'
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
    'https://rickandmortyapi.com/api/episode/4',
    'https://rickandmortyapi.com/api/episode/5',
    'https://rickandmortyapi.com/api/episode/6',
    'https://rickandmortyapi.com/api/episode/7',
    'https://rickandmortyapi.com/api/episode/8',
    'https://rickandmortyapi.com/api/episode/9',
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/12',
    'https://rickandmortyapi.com/api/episode/13',
    'https://rickandmortyapi.com/api/episode/14',
    'https://rickandmortyapi.com/api/episode/15',
    'https://rickandmortyapi.com/api/episode/16',
    'https://rickandmortyapi.com/api/episode/17',
    'https://rickandmortyapi.com/api/episode/18',
    'https://rickandmortyapi.com/api/episode/19',
    'https://rickandmortyapi.com/api/episode/20',
    'https://rickandmortyapi.com/api/episode/21',
    'https://rickandmortyapi.com/api/episode/22',
    'https://rickandmortyapi.com/api/episode/23',
    'https://rickandmortyapi.com/api/episode/24',
    'https://rickandmortyapi.com/api/episode/25',
    'https://rickandmortyapi.com/api/episode/26',
    'https://rickandmortyapi.com/api/episode/27',
    'https://rickandmortyapi.com/api/episode/28',
    'https://rickandmortyapi.com/api/episode/29',
    'https://rickandmortyapi.com/api/episode/30',
    'https://rickandmortyapi.com/api/episode/31',
    'https://rickandmortyapi.com/api/episode/32',
    'https://rickandmortyapi.com/api/episode/33',
    'https://rickandmortyapi.com/api/episode/34',
    'https://rickandmortyapi.com/api/episode/35',
    'https://rickandmortyapi.com/api/episode/36',
    'https://rickandmortyapi.com/api/episode/37',
    'https://rickandmortyapi.com/api/episode/38',
    'https://rickandmortyapi.com/api/episode/39',
    'https://rickandmortyapi.com/api/episode/40',
    'https://rickandmortyapi.com/api/episode/41',
    'https://rickandmortyapi.com/api/episode/42',
    'https://rickandmortyapi.com/api/episode/43',
    'https://rickandmortyapi.com/api/episode/44',
    'https://rickandmortyapi.com/api/episode/45',
    'https://rickandmortyapi.com/api/episode/46',
    'https://rickandmortyapi.com/api/episode/47',
    'https://rickandmortyapi.com/api/episode/48',
    'https://rickandmortyapi.com/api/episode/49',
    'https://rickandmortyapi.com/api/episode/50',
    'https://rickandmortyapi.com/api/episode/51'
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
};

const firstApiEpisode = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/35',
    'https://rickandmortyapi.com/api/character/38',
    'https://rickandmortyapi.com/api/character/62',
    'https://rickandmortyapi.com/api/character/92',
    'https://rickandmortyapi.com/api/character/127',
    'https://rickandmortyapi.com/api/character/144',
    'https://rickandmortyapi.com/api/character/158',
    'https://rickandmortyapi.com/api/character/175',
    'https://rickandmortyapi.com/api/character/179',
    'https://rickandmortyapi.com/api/character/181',
    'https://rickandmortyapi.com/api/character/239',
    'https://rickandmortyapi.com/api/character/249',
    'https://rickandmortyapi.com/api/character/271',
    'https://rickandmortyapi.com/api/character/338',
    'https://rickandmortyapi.com/api/character/394',
    'https://rickandmortyapi.com/api/character/395',
    'https://rickandmortyapi.com/api/character/435'
  ],
  url: 'https://rickandmortyapi.com/api/episode/1',
  created: '2017-11-10T12:56:33.798Z'
}

describe(`homework_4 - createDebounceFunction`, () => {
  const methodName = 'createDebounceFunction';
  jest.useFakeTimers();

  it('should call the callback after the specified delay', () => {
    const callback = jest.fn();
    const delay = 1000; //
    const debouncedFunction = createDebounceFunction(callback, delay);
    debouncedFunction();
    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.clearAllTimers();
  });

  it('should call the callback after the 1.5 delay', () => {
    const callback = jest.fn();
    const delay = 4000;
    const halfDelay = delay * 0.5;
    const prolongedDelay = delay * 1.5;
    const debouncedFunction = createDebounceFunction(callback, delay);
    debouncedFunction();
    setTimeout(debouncedFunction, halfDelay)
    jest.advanceTimersByTime(prolongedDelay);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.clearAllTimers();
  });

  it('should call the callback twice after the 3 delay', () => {
    const callback = jest.fn();
    const delay = 2000;
    const doubleDelay = delay * 2;
    const tripleDelay = delay * 3;
    const debouncedFunction = createDebounceFunction(callback, delay);
    debouncedFunction();
    setTimeout(debouncedFunction, doubleDelay)
    jest.advanceTimersByTime(tripleDelay);
    expect(callback).toHaveBeenCalledTimes(2);
    jest.clearAllTimers();
  });

  testSets[methodName].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const args = testObj.args;
    const errorText = testObj.errorText;

    test(`${methodName}() - invalid - ${caseTitle}`, () => {
    expect(() => {
      createDebounceFunction(...args);
    }).toThrow(errorText);
    });
  });
});


describe(`homework_4 - RickAndMorty`, () => {
  const methodName = 'RickAndMorty';
  const api = new RickAndMorty();

  it('get the first Api character', async() => {
    const character = await api.getCharacter(1);
    expect(character).toEqual(firstApiCharacter);
  });

  it('try to get unknown character', async() => {
    const character = await api.getCharacter(999999999);
    expect(character).toEqual(null);
  });

  it('get the first Api episode', async() => {
    const episode = await api.getEpisode(1);
    expect(episode).toEqual(firstApiEpisode);
  });

  it('try to get unknown episode', async() => {
    const episode = await api.getEpisode(999999999);
    expect(episode).toEqual(null);
  });

  testSets[methodName].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const id = testObj.id;

    it(`getCharacter() - invalid - ${caseTitle}`, () => {
    expect(() => {
      api.getCharacter(id);
    }).toThrow(testSets.INVALID_CHARACTER_ID_MESSAGE);
    });

    it(`getEpisode() - invalid - ${caseTitle}`, async () => {
      await expect(api.getEpisode(id)).rejects.toThrow(testSets.INVALID_EPISODE_ID_MESSAGE);
    });
  });
});
