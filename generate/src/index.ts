import fs from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import generateOntology from './ontology.js'
import generateRml from './rml.js'

const esmDirname = dirname(fileURLToPath(import.meta.url))
const ontologyDirname = resolve(esmDirname, '../../artifacts/ontologies/')
const rmlDirname = resolve(esmDirname, '../../artifacts/rml/')

await fs.promises.mkdir(ontologyDirname, { recursive: true })
await fs.promises.mkdir(rmlDirname, { recursive: true })

console.log('generating netex fixed objects ontology')
await fs.promises.writeFile(resolve(ontologyDirname, './netex.ttl'), await generateOntology('netex'), { encoding: 'utf-8' })

console.log('generating db stations ontology')
await fs.promises.writeFile(resolve(ontologyDirname, './db.ttl'), await generateOntology('db-stations'), { encoding: 'utf-8' })

console.log('generating rml mapping')
await fs.promises.writeFile(resolve(rmlDirname, './mapping.ttl'), await generateRml(), { encoding: 'utf-8' })
