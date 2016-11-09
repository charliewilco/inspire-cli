#!/usr/bin/env node

import meow from 'meow'
import boxen from 'boxen'
import chalk from 'chalk'
import quotes from './quotes'

function quote (dir = 'center') {
  const formatQuote = s => {
    const q = `${s.quote}

      -- ${chalk.yellow(s.source)}`

    return boxen(q, {
      padding: 1,
      borderStyle: 'classic',
      float: `${dir}`
    })
  }

  const y = Math.floor(Math.random() * quotes.length)
  const quote = formatQuote(quotes[y])

  return process.stdout.write(`\n${quote}\n`)
}

function inspire (x, flags) {
  let direction

  flags ? direction = flags.direction : null

  quote(direction)
}

const cli = meow(`
  Usage
    $ keep-going
  Options
    $ keep-going --direction, -d [left, right, center] aligns quote in given direction
    $ keep-going --version, -v Print out the version number
    $ keep-going --help Prints out this helpful instruction
`, {
  alias: {
    v: 'version',
    d: 'direction'
  }
})

module.exports = inspire(cli.input[0], cli.flags)
