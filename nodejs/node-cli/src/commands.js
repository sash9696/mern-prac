

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getAllNotes, newNote, removeAllNotes } from './notes.js';
import { listNotes } from '../utils.js';


yargs(hideBin(process.argv))
  .command('new <note>'  , 'create new', (yargs) => {
    return yargs
      .positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string'
      })
  }, async (argv) => {
    
    const tags = argv.tags ? argv.tags.split(',') : [];
    const note  = await newNote(argv.note, tags);
    console.log('Note added', note.id)

  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all'  , 'get all notes', (yargs) => {}, async (argv) => {

    const notes  = await getAllNotes();

    listNotes(notes)

  })
  .command('find <filter>'  , 'get matching notes', (yargs) => {
    return yargs
      .positional('filter', {
        describe: 'The search keyword to filer notes  and will be applied to node.content',
        type: 'string'
      })
  }, async (argv) => {

  })
  .command('remove <id>'  , 'remove a note by its id', (yargs) => {
    return yargs
      .positional('id', {
        describe: 'The id of the note you want to remove',
        type: 'number'
      })
  }, async (argv) => {

  })
  .command('clean'  , 'remove all notes', (yargs) => {}, async (argv) => {
    await removeAllNotes();
    console.log('All notes removed')
  })
  .parse()