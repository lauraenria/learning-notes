'use strict';
const inquirer = require('inquirer');

console.log('Start');

// const sol = ['ls -A', 'ls -almost-all'];

let data = [
  ['with -l and/or -s, print human readable sizes', ['ls -h', 'ls --human-readable']],
  ['use a long listing format', ['ls -l']]
]

let questions = [{
    type: 'input',
    name: 'list-commands',
    message: 'list - do not ignore entries with . ?',
    choices: ['ls -a', 'ls -all'],
    validate: function (value) {
      return validating(['ls -a', 'ls -all'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - do not list implied . and .. ?',
    choices: ['ls -A', 'ls -almost-all'],
    validate: function (value) {
      return validating(['ls -A', 'ls -almost-all'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - author ?',
    choices: ['ls --author', 'ls -l --author'],
    validate: function (value) {
      return validating(['ls --author', 'ls -l --author'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - do not list implied entries ending with ~?',
    choices: ['ls -B', 'ls --ignore-backups'],
    validate: function (value) {
      return validating(['ls -B', 'ls --ignore-backups'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - list sort by show and ctime (discending) ?',
    choices: ['ls -clt', 'ls -clt'],
    validate: function (value) {
      return validating(['ls -clt', 'ls -clt'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - show ctime and sort by name ?',
    choices: ['ls -cl'],
    validate: function (value) {
      return validating(['ls -cl'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list - sort by ctime, newest first ?',
    choices: ['ls -c', 'ls -c'],
    validate: function (value) {
      return validating(['ls -c', 'ls -c'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list entries by columns?',
    choices: ['ls -C'],
    validate: function (value) {
      return validating(['ls -C'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'list directories themselves, not their contents ?',
    choices: ['ls -d', 'ls --directory'],
    validate: function (value) {
      return validating(['ls -d', 'ls --directory'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'do not sort ?',
    choices: ['ls -f'],
    validate: function (value) {
      return validating(['ls -f'], value);
    }
  },
  {
    type: 'input',
    name: 'list-commands',
    message: 'append indicator (one of */=>@|) to entries?',
    choices: ['-F', 'ls --classify'],
    validate: function (value) {
      return validating(['-F', 'ls --classify'], value);
    }
  },
  create('in a long listing, dont print group names ?', ['ls -G', 'ls --no-group']),
  create('like -l, but do not list owner ?', ['ls -g']),
  create('ls likewise, except do not append * ?', ['ls --file-type','escape']),
  create('print human readable sizes ?', ['ls -h','--human-readable']),
  create('use a long listing format?', ['ls -l']),
  create('fill width with a comma separated list of entries?',['ls -m']),
  create('like -l, but list numeric user and group IDs?', ['ls -n','ls --numeric-uid-gid']),
  create('reverse order while sorting?', ['ls -r','ls --reverse']),
  create('list subdirectories recursively?', ['ls -R','ls --recursive']),
  create('list print the allocated size of each file, in blocks?', ['ls -s','ls --size']),
  create('sort by file size, largest first?', ['ls -S']),
  create('sort by modification time, newest first', ['ls -t']),
  create('Change the shell working directory?', ['cd']),
  create('force symbolic links to be followed?', ['cd -L']),
  create('use the physical directory structure without following symbolic links', ['cd -P']),
  create('copy files and directories?', ['cp']),
  create('copy and same as -dR --preserve=all?', ['cp -a','cp --archive']),
  create('make a backup of each existing destination file?', ['cp --backup', 'cp --backup[=CONTROL]']),
  create('like --backup but does not accept an argument?', ['cp -b']),
  create('copy contents of special files when recursive?', ['cp --copy-contents']),
  create('copy same as --no-dereference --preserve=links', ['cp -d','escape']),
  create('copy - if  an  existing  destination  file  cannot be opened, remove it and try again?', ['cp -f','cp --force']),
  create('copy prompt before overwrite', ['cp -i', 'cp --interactive']),
  create('copy always follow symbolic links in SOURCE?', ['cp -L', 'cp --dereference']),
  create('do not overwrite an existing file?', ['cp -n', 'cp --no-clobber']),
  create('copy directories recursively', ['cp -R', 'cp -r', 'cp --recursive']),
  create('copy make symbolic links instead of copying?', ['cp -s', 'cp --symbolic-link']),
  create('copy only when the SOURCE file is newer than the destination file or when the destination file is missing?', ['cp -u', 'cp --update']),
  create('copy explain what is being done', [ 'cp -v', 'cp --verbose']),
  create('move (rename) files?', ['mv']),
  create('make a backup of each existing destination file?', ['mv --backup','mv --backup[=CONTROL]']),
  create('move like --backup but does not accept an argument?', ['mv -b']),
  create('move if an existing destination file cannot be opened, remove it  and try  again?', ['mv -f', 'mv --force']),
  create('remove ignore nonexistent files and arguments, never prompt', ['rm -f', 'rm --force']),
  create('create 3 folder and file: roo/1 root/2/2.1/filename', ['mkdir 1 2/2.1 && touch 2/2.1/filename']),
  create('read a file', ['cat file']),
  create('read file1, file2, file3', ['cat file1 file2 file3']),
  create('Redirect content from file1 to empty file2 - it will be overwritten', ['cat file1 > file2']),
  create('read file 1 and the text will scroll down easily', ['cat file1 | less']),
  create('Overwrite file1 using the redirector operator, SOME TEXT', ['cat > file1']),
  create('restore CAT', ['ctrl + d']),
  create('causes the text to be sent to standard output, i.e., to be repeated on the monitor screen', ['cat']),
  create('Concatenate file1,file2,file3', ['cat file1 file2 file3']),
  create('redirected content file3 using the output redirection operator to another file, such as file4',['cat file3 > file4']),
  create('order to alphabetize the lines of text after concatenation and prior to writing to file4?',['']),
  create('Redirect content file1,file2,file3 in a new file f4?',['cat file1 file2 file3 > file4']),
  create('create a new file1 then add text,no overwritten?',['cat >> file1']),
  create('create a new file and transfer to it the data from an existing file, basically a copy (but not use cp)?',['cat file1 > file2']),
  create('INTERACTIVE WAY TO WRITE - random.txt',['cat > random.txt <<EOF']),
  create('sort and display content of file1 file2 file3 alphabetically in a new file4',['cat file1 file2 file3 | sort > file4']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),
  // create('',['']),

];


let randomAnswer = questions[Math.floor(Math.random() * questions.length)];

inquirer.prompt(shuffle(questions)).then(questions => {
  console.log('\nWell Done, you finished the quiz!');
  // console.log(JSON.stringify(answers, null, '  '));
});

function validating(choices, value) {
  if (choices.includes(value)) {
    return true;
  }
  return 'close, try again!';
}

function create(instruction, commands) {
  let obj = {
    type: 'input',
    name: 'list-commands',
    message: instruction,
    choices: commands,
    validate: function (value) {
      return validating(commands, value);
    }
  }
  return obj
}

// passData(data);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}