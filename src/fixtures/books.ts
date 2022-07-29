import { Book } from '@/models'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const DATA: Array<Book> = []

const capitalizeFirstLetter = ([first, ...rest]: string) =>
  first.toLocaleUpperCase() + rest.join('')

for (let i = 0; 1 < 100; ++i) {
  DATA.push({
    id: shortid.generate(),
    name: capitalizeFirstLetter(
      lorem.generateSentences(Math.round(Math.random() * 4))
    )
  })
}

export default DATA
