import { basename, resolve } from 'path'
import { addTemplate, defineNuxtModule } from '@nuxt/kit'

const padding = ' '.repeat(4)
const autoImportEslint = defineNuxtModule({
  setup (_, nuxt) {
    const autoImports = {
      global: [
        '$fetch',
        'useCloneDeep',
        'defineNuxtConfig',
        'definePageMeta',
        'defineI18nConfig'
      ]
    }

    nuxt.hook('imports:context', async context => {
      const imports = await context.getImports()
      imports.forEach(autoImport => {
        const list = autoImports[autoImport.from] || []
        const name = autoImport.as ? autoImport.as.toString() : autoImport.name.toString()
        autoImports[autoImport.from] = list.concat([name])
      })
    })

    nuxt.hook('imports:extend', composableImport => {
      autoImports.composables = composableImport.map(autoImport => {
        if (autoImport.as) return autoImport.as.toString()
        return autoImport.name.toString()
      })
    })

    nuxt.hook('modules:done', () => {
      const outDir = basename(nuxt.options.buildDir)
      const filename = '.eslint.globals.json'
      const fullPath = resolve(outDir, filename)

      const getContents = () => {
        // To prevent formatter accidentally fix padding of template string
        let contents = ''
        contents += '{\n'
        contents += '  "globals": {'
        for (const autoImport in autoImports) {
          for (let i = 0; i < autoImports[autoImport].length; i++) {
            const curr = autoImports[autoImport][i]
            contents += '\n'
            contents += `${padding}"${curr}": "readonly",`
          }
        }
        contents = `${contents.slice(0, -1)}\n`
        contents += '  }\n'
        contents += '}\n'

        return contents
      }

      addTemplate({
        filename,
        getContents,
        write: true
      })

      console.log(`globals file is generated at ${fullPath}`)
    })
  }
})

export default autoImportEslint