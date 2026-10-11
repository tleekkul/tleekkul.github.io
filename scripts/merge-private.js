// Merges gitignored private.json (phone) into resume.json for local PDF builds.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const resume = JSON.parse(readFileSync('resume.json', 'utf8'))
const priv = existsSync('private.json') ? JSON.parse(readFileSync('private.json', 'utf8')) : {}
resume.basics = { ...resume.basics, ...priv.basics }

mkdirSync('dist', { recursive: true })
writeFileSync('dist/resume.json', JSON.stringify(resume, null, 2))
