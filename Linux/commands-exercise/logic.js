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
    message: 'list append indicator (one of */=>@|) to entries?',
    choices: ['ls -F', 'ls --classify'],
    validate: function (value) {
      return validating(['-F', 'ls --classify'], value);
    }
  },
  create('in a long listing, dont print group names ?', ['ls -G', 'ls --no-group','skip']),
  create('like -l, but do not list owner ?', ['ls -g','skip']),
  create('ls likewise, except do not append * ?', ['ls --file-type','skip']),
  create('print human readable sizes ?', ['ls -h','--human-readable','skip']),
  create('use a long listing format?', ['ls -l','skip']),
  create('fill width with a comma separated list of entries?',['ls -m','skip']),
  create('like -l, but list numeric user and group IDs?', ['ls -n','ls --numeric-uid-gid','skip']),
  create('reverse order while sorting?', ['ls -r','ls --reverse','skip']),
  create('list subdirectories recursively?', ['ls -R','ls --recursive','skip']),
  create('list print the allocated size of each file, in blocks?', ['ls -s','ls --size','skip']),
  create('sort by file size, largest first?', ['ls -S','skip']),
  create('sort by modification time, newest first', ['ls -t','skip']),
  create('Change the shell working directory?', ['cd','skip']),
  create('cdforce symbolic links to be followed?', ['cd -L','skip']),
  create('use the physical directory structure without following symbolic links', ['cd -P','skip']),
  create('copy files and directories?', ['cp','skip']),
  create('copy and same as -dR --preserve=all?', ['cp -a','cp --archive','skip']),
  create('copy make a backup of each existing destination file?', ['cp --backup', 'cp --backup[=CONTROL]','skip']),
  create('copy like --backup but does not accept an argument?', ['cp -b','skip']),
  create('copy contents of special files when recursive?', ['cp --copy-contents','skip']),
  create('copy same as --no-dereference --preserve=links', ['cp -d','skip']),
  create('copy - if  an  existing  destination  file  cannot be opened, remove it and try again?', ['cp -f','cp --force','skip']),
  create('copy prompt before overwrite', ['cp -i', 'cp --interactive','skip']),
  create('copy always follow symbolic links in SOURCE?', ['cp -L', 'cp --dereference','skip']),
  create('copy do not overwrite an existing file?', ['cp -n', 'cp --no-clobber','skip']),
  create('copy directories recursively', ['cp -R', 'cp -r', 'cp --recursive','skip']),
  create('copy make symbolic links instead of copying?', ['cp -s', 'cp --symbolic-link','skip']),
  create('copy only when the SOURCE file is newer than the destination file or when the destination file is missing (update)?', ['cp -u', 'cp --update','skip']),
  create('copy explain what is being done', [ 'cp -v', 'cp --verbose','skip']),
  create('copy file1 file2 file3 from current directory to cartella',['cp -t ./cartella file1 file2 file3']),
  create('move (rename) files?', ['mv','skip']),
  create('move make a backup of each existing destination file?', ['mv --backup','mv --backup[=CONTROL','skip']),
  create('move like --backup but does not accept an argument?', ['mv -b','skip']),
  create('move if an existing destination file cannot be opened, remove it  and try  again?', ['mv -f', 'mv --force','skip']),
  create('remove ignore nonexistent files and arguments, never prompt', ['rm -f', 'rm --force','skip']),
  create('remove prompt once before removing more than three files, or when removing recursively, less intrusive than -i',['rm -I', 'skip']),
  create('prompt before every removal?',['rm -i']),
  create('remove DIRECTORY and its ancestors a b c',['rmdir -p a/b/c','rmdir a/b/c a/b a']),
  create('create 3 folder and file: root/1 root/2/2.1/filename', ['mkdir 1 2/2.1 && touch 2/2.1/filename','skip']),
  create('read file1', ['cat file1','skip']),
  create('read file1, file2, file3', ['cat file1 file2 file3','skip']),
  create('Redirect content from file1 to empty file2 - it will be overwritten', ['cat file1 > file2','skip']),
  create('read file1 and the text will scroll down easily', ['cat file1 | less','skip']),
  create('Overwrite file1 using the redirector operator, SOME TEXT', ['cat > file1','skip']),
  create('restore CAT', ['ctrl d','skip']),
  create('causes the text to be sent to standard output, i.e., to be repeated on the monitor screen', ['cat','skip']),
  create('Concatenate file1,file2,file3', ['cat file1 file2 file3','skip']),
  create('redirected content file3 using the output redirection operator to another file, such as file4',['cat file3 > file4','skip']),
  create('order file1 file2 file3 to alphabetize the lines of text after concatenation and prior to writing to file4?',['cat file1 file2 file3 | sort > file4','skip']),
  create('Redirect content file1,file2,file3 in a new file f4?',['cat file1 file2 file3 > file4','skip']),
  create('create a new file1 then add text,no overwritten?',['cat >> file1','skip']),
  create('create a new file2 and transfer to it the data from an existing file1, basically a copy (but not use cp)?',['cat file1 > file2','skip']),
  create('INTERACTIVE WAY TO WRITE - random.txt',['cat > random.txt <<EOF','skip']),
  create('sort and display content of file1 file2 file3 alphabetically in a new file4',['cat file1 file2 file3 | sort > file4','skip']),
  create('find from the current directory all the folders ',['find . -type d']),
  create('display all',['cat -A', 'cat --show-all','skip']),
  create('display number nonempty output lines, overrides -n',['cat -b', 'cat --number-nonblank','skip']),
  create('display equivalent -vE - $ end of each line',['cat -e','skip']),
  create('display $ at end of each line',['cat -E','cat --show-ends','skip']),
  create('display number all output lines',['cat -n','cat --number','skip']),
  create('grep in logic.js any line with ]),',['$ grep $"])," logic.js','skip']),
  create('list the contents of all file directories starting with d in the current directory?',['ls -l d*','skip']),
  create('List the size of all the file directories in the /home directory in an easy-to-understand format?',['ls -alh /home','ls -lha /home','skip']),
  create('rm the parent folder zohy and its content',['rm ../zohy -rf','skip']),
  create('display the connection path of the current directory, use the following command?',['pwd -L','skip']),
  create('display/Print the physical path of the current directory?',['pwd -P','skip']),
  create('create a directory zhou with privilege 777?',['mkdir -m 777 zhou','skip']),
  // create('',['mkdir -vp shiyanlou/{lib/,bin/,doc/{info,product}}','skip']),
  create('show structure shiyanlou',['tree shiyanlou/','skip']),
  create('display the contents of a new file1 txt with line number',['cat -n file1.txt','skip']),
  create('remove labex.log never prompt',['rm -f labex.log','skip']),
  create('remove all the files ending with .log , prompt before every removal',['rm -i *.log','skip']),
  // create('',['myrm(){ D=/tmp/$(date +%Y%m%d%H%M%S); mkdir -p $D; mv "$@" $D && echo "moved to $D ok"; }','skip']),
  create('Copy all the files in the test1 directory to the test2 directory. Before overwriting, you can use the following command?',['cp -i test1/* test2','skip']),
  create('Copy the most recently updated file from the test1 directory to the test2 directory. Before overwriting, use the following command, prompt before overwrite?',['cp -iu test1/* test2','skip']),
  // create('Display\input labex.log file with line number and input zhou.log file',['input labex.log file with line number and input zhou.log file','skip']),
  // create('Display\input Input labex.log file with line number and input zhou.log file, replace multi-line blank line with one line output?',['cat -ns labex.log > zhou.log','skip']),
  create('To reverse the contents of the zhou.log file',['tac  zhou.log']),
  create('To display the contents of the labex.log file from the fifth line,',['more +5 labex.log','skip']),
  create('M To set the number of lines per screen to 5, labex.log',['more -5 labex.log']),
  // create('Using the ll and more commands to display the /etc directory information (-10), Ctrl+F or Space will display the next 10 file information.',['ll /etc | more -10','skip']),
  create('L Display the contents of the labex.log file and display the line number',['less -N labex.log','skip']),
  create('ps checks the process information and displays it through less pages',['ps -f | less','skip']),
  create('delete all the files except ‘html‘ file all at once?',['rm -r !(*.html)']),
  create('To print a list of file directories in the current directory only the first 10 rows ',['find . -print | head -10','skip']),
  create('Print all the file names ending in .txt in the current directory, 10 (the screenshot shows only part)?',['find . -name "*.txt" -print | head -10','skip']),
  create('To print all file names ending with .txt or .pdf in the current directory (screenshot shows only part)?',['find . \(-name "*.pdf" -or -name "*.txt"\)','find . \(-name "*.pdf" -or -name "*.txt"\)','skip']),
  create('Print all file names in the current directory that do not end with .txt?',['find . ! -name "*.txt"']),
  create('To print all symbolic links ending in .txt in the current directory?',['find . -type l -name "*.txt" -print','skip']),
  // create('',['']),
  create('To print all files owned by the root user in the current directory',['find . -type f -user root','skip']),
  // create('Print all files whose permissions under the current directory are not 777 and 664?',['find . -type f \(! -perm 777 -and ! -perm 644\)'],'skip'),
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