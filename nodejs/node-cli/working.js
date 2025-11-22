#!/usr/bin/env node



import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import fs from 'node:fs/promises';


const DB_PATH = new URL('./db.json', import.meta.url).pathname;

yargs(hideBin(process.argv))
  .command('new <note>'  , 'create new', (yargs) => {
    return yargs
      .positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string'
      })
  }, async (argv) => {
    

    const tags = argv.tags ? argv.tags.split(',') : [];

    const note   = argv.note

    const newNote = {
        tags,
        content:note,
        id:Date.now()
    }


    const db = await fs.readFile(DB_PATH, 'utf-8')


    const parsedDb = JSON.parse(db)

    parsedDb.notes.push(newNote)

    await fs.writeFile(DB_PATH, JSON.stringify(parsedDb, null, 2))

    console.log('Note added', newNote.id)

  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .parse()