// libs
const Promise = require('bluebird')
const sharp = require('sharp')

// node core
const fs = Promise.promisifyAll(require('fs'))
const path = require('path')
const fg = require('fast-glob')
const cwd = process.cwd()

async function start () {
  const entries = await fg('assets/images/**/*.*', {
    dot: true,
    cwd
  })

  for (const entry of entries) {
    if (entry.includes('compressed')) {
      continue
    }

    const entryBuffer = await fs.readFileAsync(entry)
    const newBuffer = await sharp(entryBuffer)
      .jpeg({
        quality: 20
      })
      .toBuffer()

    const extension = path.extname(entry)
    const base = entry.replace(new RegExp(`${extension}$`, 'gi'), '')
    await fs.writeFileAsync(`${base}-compressed${extension}`, newBuffer)

  }
}

start()