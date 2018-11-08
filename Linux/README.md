# Documentations Ubuntu

## Index 

* [Paths](#Paths)
* [VSCODE](###Editor-VSCODE)
* [cd](##cd)
* [ls](##ls)
* [cp](##cp)
* [mv](##mv)
* [rm](##rm)
* [mkdir](##mkdir)
* [rmdir](##rmdir)
* [cat](##cat)
* [find](##find)
* [grep](##grep)
* [touch](##touch)
* [Pipe](##Pipe)
* [less](##less)
* [more](##more)
* [man](##man)
* [history](##history)
* [whatis](##whatis)
* [echo](##echo)
* [Extra commands](###Extra-commands)
* [Resources](##Resources)

# Paths

* `alt + tab` shortcut program I am running
* `alt + esc` for the windows desktop

* `absolute` and `relative path`
    
    **root directory**: It is denoted by a single slash ( / ). 
    
    **`Absolute paths` specify a location (file or directory) in relation to the root directory**. You can identify them easily as they always begin with a forward slash ( / )

    **`Relative paths` specify a location (file or directory) in relation to where we currently are in the system**. They will not begin with a slash.

    ### More on Paths

   * `~` **(tilde)** - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents

* `.` **(dot)** - This is a reference to your current directory.

* `..` **(dotdot)** - This is a reference to the parent directory.

* `/etc` - Stores config files for the system.

* `/var/log` - Stores log files for various system programs. (You may not have permission to look at everything in this directory.)

* `/bin` - The location of several commonly used programs.

* `/usr/bin` - Another location for programs on the system.

### Editor VSCODE 
[-i](##Index)

* Use the command `code /path/to/file/or/directory/you/want/to/open` to open your file in VS Code.

* Launch VS Code. Now open the Command Palette (F1)/ Fn + (F1) and type shell command to find the Shell Command: Install 'code' command in PATH command. Restart your terminal.

In the case of Linux and Mac, you want to navigate to the directory that you extracted the VSCode files using the 'cd' command. For example:

`cd ~/Downloads/VSCode` ()

Then you start the application by running..

`./Code` 'Code' being the name of the executable.

If you have root access on the machine, you can configure the system to allow you to start VSCode from anywhere by linking it to /usr/bin, where links to executables are often stored.

`sudo ln -s /path/to/VSCode/folder/Code /usr/bin/Code`

You can now launch VSCode from anywhere by typing:

`Code`

OR

`cd directory`

`code .` : Open VS Code within the context of a folder

## Linux commands 

## ls
[-i](##Index)
1. `ls [OPTION]... [FILE]...` List  information about the FILEs (the current directory by default).  Sort entries alphabetically

     `total [number]` : That is the total number of file system blocks, including indirect
    blocks, used by the listed files.

    * `ls /etc` : list that directories contents.

    * `-a`, `--all`
              do not ignore entries starting with .

        `-A`, `--almost-all`
              do not list implied . and ..

       `--author`
              with `-l`, print the author of each file

       `-b`, `--escape`
              print C-style escapes for nongraphic characters

       `--block-size=SIZE`
              scale sizes by SIZE before printing them; e.g., `'--block-size=M'` prints sizes in  units
              of 1,048,576 bytes; see SIZE format below

       `-B`, `--ignore-backups`
              do not list implied entries ending with ~

       `-c`     with  `-lt`:  sort by, and show, ctime (time of last modification of file status informa‐
              tion); with `-l`: show ctime and sort by name; otherwise: sort by ctime, newest first

       `-C`     list entries by columns

       `--color[=WHEN]`
              colorize the output; WHEN can be 'always' (default if  omitted),  'auto',  or  'never';
              more info below

       `-d`, --directory
              list directories themselves, not their contents

       `-D`, --dired
              generate output designed for Emacs' dired mode

       `-f`     do not sort, enable -aU, disable -ls --color

       `-F`, --classify
              append indicator (one of */=>@|) to entries
        
        `--file-type`
              likewise, except do **not append '*'**

       `--format=`**WORD**
              across -x, commas -m, horizontal -x, long -l, single-column -1, verbose -l, vertical -C

       `--full-time`
              like -l --time-style=full-iso

       `-g`     like `-l`, but do not list owner

       `--group-directories-first`
              group directories before files;
              can  be augmented with a `--sort` option, but any use of --sort=none (-U) disables group‐
              ing

       `-G`, `--no-group`
              in a long listing, don't print group names

       `-h`, `--human-readable`
              with `-l` and/or `-s`, print human readable sizes (e.g., 1K 234M 2G)

       `--si`   likewise, but use powers of 1000 not 1024

       `-H`, `--dereference-command-line`
              follow symbolic links listed on the command line

       --dereference-command-line-symlink-to-dir
              follow each command line symbolic link
              that points to a directory

       `--hide=PATTERN`
              do not list implied entries matching shell PATTERN (overridden by -a or -A)

       `--hyperlink[=WHEN]`
              hyperlink file names; WHEN can be 'always' (default if omitted), 'auto', or 'never'

       `--indicator-style=`**WORD**
              append indicator with style WORD to entry names: none (default), slash (-p),  file-type
              (--file-type), classify (-F)

       `-i`, `--inode`
              print the index number of each file
        `-k`, `--kibibytes`
              default to 1024-byte blocks for disk usage

       `-l`     use a long listing format

       `-L`, `--dereference`
              when  showing  file  information for a symbolic link, show information for the file the
              link references rather than for the link itself

       `-m`     fill width with a comma separated list of entries

       `-n`, `--numeric-uid-gid`
              like -l, but list numeric user and group IDs

       `-N`, `--literal`
              print entry names without quoting

       `-o`     like -l, but do not list group information

       `-p`, --indicator-style=slash
              append / indicator to directories

       `-q`, --hide-control-chars
              print ? instead of nongraphic characters

       `--show-control-chars`
              show nongraphic characters as-is (the default, unless program is 'ls' and output  is  a
              terminal)

       `-Q`, `--quote-name`
              enclose entry names in double quotes

       `--quoting-style`=**WORD**
              use  quoting  style  WORD  for  entry  names:  literal,  locale,  shell,  shell-always,
              shell-escape, shell-escape-always, c, escape

       `-r`, `--reverse`
              reverse order while sorting

       `-R`, `--recursive`
              list subdirectories recursively

       `-s`, `--size`
              print the allocated size of each file, in blocks
        `-S`     sort by file size, largest first

       `--sort=`**WORD**
              sort by WORD instead of name: none (-U), size (-S), time (-t), version (-v),  extension
              (-X)

       `--time=`**WORD**
              with -l, show time as WORD instead of default modification time: atime or access or use
              (-u); ctime or status (-c); also use specified time as sort key if --sort=time  (newest
              first)

       `--time-style=`**STYLE**
              with  -l,  show  times  using style STYLE: full-iso, long-iso, iso, locale, or +FORMAT;
              FORMAT is interpreted like in 'date'; if FORMAT is FORMAT1 FORMAT2,  then  FOR‐
              MAT1 applies to non-recent files and FORMAT2 to recent files; if STYLE is prefixed with
              'posix-', STYLE takes effect only outside the POSIX locale

       `-t`     sort by modification time, newest first

       `-T`, --tabsize=COLS
              assume tab stops at each COLS instead of 8

       `-u`     with -lt: sort by, and show, access time; with -l: show access time and sort  by  name;
              otherwise: sort by access time, newest first

       `-U`     do not sort; list entries in directory order

       `-v`     natural sort of (version) numbers within text

        `-w`, `--width`=**COLS**
              set output width to COLS.  0 means no limit

       `-x`     list entries by lines instead of by columns

       `-X `    sort alphabetically by entry extension

       `-Z`, `--context`
              print any security context of each file

       `-1`     list one file per line.  Avoid '\n' with -q or `-b`

       `--help` display this help and exit

       `--version`
              output version information and exit

The  `SIZE`  argument  is  an  `integer`  and  `optional unit` (example: 10K is 10*1024).  Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,... (powers of 1000).

Using color to distinguish file types is disabled both  by  default  and  with  --color=never.
With  --color=auto, ls emits color codes only when standard output is connected to a terminal.
The LS_COLORS environment variable can change the settings.  Use the dircolors command to  set it.

* ls -lahtr


## cd 
[-i](##Index)

2. [**cd**](http://www.linfo.org/cd.html) : change directory eg. `cd/arora/applications`
    * use **relative path** or **absolute path** `cd /path/to/directory`
    * `cd -` : returns the user to the previous current directory and reports on a new line the absolute pathname of that directory
    * `cd --` :  Show last working directory from where we moved (use ‘–‘ switch)
    * `cd .` : current directory (present directory).
    * `cd ..` : Change Current directory to parent directory.
    * `cd ../ ../ ` : Move two directory up from where you are now.
    * `cd ~` : Move to users home directory from anywhere.
    * `cd .` or `cd ./` : Change working directory to current working directory
    * `cd + tab` : autocompletation name
    * `cd + tab + tab` : show you multuple file
    * 
* `cd -P [symbolic link-name]` : move you to the physical location of the symbolic link

* `cd -L` :  forces symbolic links (nested) to be followed.
* `cd -e` : like try and catch in JS, if there is a error stop the script and return the error. If the -P option is supplied, and the current working
                directory cannot be determined successfully, exit with
                a non-zero status eg the directory doesn't exist
* `cd -@` on systems that support it, present a file with extended attributes as a directory containing the file attributes

* `CDPATH`: environment variabe can be used to define base directory for the cd command. 
    * For example, in one of the earlier options, we discussed the ‘`cd ~`’ command which quickly takes you to the home directory from any location of your system. In the same way, if you want to quickly switch to any other particular directory irrespective of your current location, you can do this by defining a base directory using the `CDPATH` environment variable. 
    eg. `$ export CDPATH =/home/howtoforge`

 * `$HOME` variable: home directory of current users.

* `cdable_vars`: variable which **set a nickname for a path**. 
    * If this variable is set, an argument to the cd command that is not a directory is assumed to be the name of a variable whose value is the directory to change to.

    *  first of all we have to set ‘`cdable_vars`’ eg `$ shopt -s cdable_vars`

    * check whether the cdable_vars is set or not `$ shopt`

    * you can define a variable that contains the path for which you want to set a nickname `$ [variable-name] = [path-to-destination-directory]`

    * example = `$ [variable-name] = [path-to-destination-directory]`

* `$ mkdir [dir-name] && cd [dir-name] `
    * `$ mkdir [dir-name] && cd $_` : create directory and switch to it using single command
    * `$` means call a variable
    * `$_` expands to the last argument of the previous command.
   



* `$ cd ./-` : create a directory named ‘-’ and switch to it

* run `info cd` or `help cd` commands for more info 

## cp 
[-i](##Index)

3. **cp** : copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.
    
    SYNOPSIS

   cp [OPTION]... [-T] SOURCE DEST
   cp [OPTION]... SOURCE... DIRECTORY
   cp [OPTION]... -t DIRECTORY SOURCE...

        -a, --archive
              same as -dR --preserve=all

       --attributes-only
              don't copy the file data, just the attributes

       --backup[=CONTROL]
              make a backup of each existing destination file

       -b     like --backup but does not accept an argument

       --copy-contents
              copy contents of special files when recursive

       -d     same as --no-dereference --preserve=links

       -f, --force
              if  an  existing  destination file cannot be opened, remove it and try again (this
              option is ignored when the -n option is also used)

       -i, --interactive
              prompt before overwrite (overrides a previous -n option)

       -H     follow command-line symbolic links in SOURCE

       -l, --link
              hard link files instead of copying

       -L, --dereference
              always follow symbolic links in SOURCE

       -n, --no-clobber
              do not overwrite an existing file (overrides a previous -i option)

       -P, --no-dereference
              never follow symbolic links in SOURCE

       -p     same as --preserve=mode,ownership,timestamps

       --preserve[=ATTR_LIST]
              preserve the specified attributes (default: mode,ownership,timestamps), if  possi‐
              ble additional attributes: context, links, xattr, all

       --no-preserve=ATTR_LIST
              don't preserve the specified attributes

       --parents
              use full source file name under DIRECTORY

       -R, -r, --recursive
              copy directories recursively (even sub directory)

        --reflink[=WHEN]
              control clone/CoW copies. See below

       --remove-destination
              remove  each existing destination file before attempting to open it (contrast with
              --force)

       --sparse=WHEN
              control creation of sparse files. See below

       --strip-trailing-slashes
              remove any trailing slashes from each SOURCE argument

       -s, --symbolic-link
              make symbolic links instead of copying

       -S, --suffix=SUFFIX
              override the usual backup suffix

       -t, --target-directory=DIRECTORY
              copy all SOURCE arguments into DIRECTORY

       -T, --no-target-directory
              treat DEST as a normal file

       -u, --update
              copy only when the SOURCE file is newer than the destination file or when the des‐
              tination file is missing

       -v, --verbose
              explain what is being done

       -x, --one-file-system
              stay on this file system

       -Z     set SELinux security context of destination file to default type

       --context[=CTX]
              like  -Z, or if CTX is specified then set the SELinux or SMACK security context to
              CTX

       --help display this help and exit

       --version
              output version information and exit

`yes|command that you want` : In order to overwrite multiple files to save time pressing multiple yes eg `yes|cp command`

You can copy multiple files and directories as well as use wildcards. A `wildcard` is a character that can be substituted for a pattern based selection. 

* `*` the wildcard of wildcards, it's used to represent all single characters or any string.
* `?`` used to represent one character
* `[]` used to represent any character within the brackets

## mv 
[-i](##Index)

4. **mv** : move (rename) files - Syntax:

    mv [OPTION]... [-T] SOURCE DEST
    mv [OPTION]... SOURCE... DIRECTORY
    mv [OPTION]... -t DIRECTORY SOURCE...

    if the destination file doesn’t exist, it will be created. If the destination file exist, then it will be overwrite and the source file will be deleted.

        --backup[=CONTROL]
              make a backup of each existing destination file (no (~) appended to it.)

       -b     like --backup but does not accept an argument 

       With this option it is easier to take a backup of an existing file that will be overwritten as a result of the mv command. This will create a backup file with the tilde character(~) appended to it.

       -f, --force
              do not prompt before overwriting
              
              mv prompts for confirmation overwriting the destination file if a file is write protected. The -f option overrides this minor protection and overwrite the destination file forcefully and delete the source file.

       -i, --interactive
              prompt before overwrite. 

              Ask the user for confirmation before moving a file that would overwrite an existing file, you have to press `y` for confirm moving, any other key leaves the file as it is. This option doesn’t work if the file doesn’t exist, it simply rename it or move it to new location.

       -n, --no-clobber
              do not overwrite an existing file
              

       If you specify more than one of -i, -f, -n, only the final one takes effect.

       --strip-trailing-slashes
              remove any trailing slashes from each SOURCE argument

       -S, --suffix=SUFFIX
              override the usual backup suffix

       -t, --target-directory=DIRECTORY
              move all SOURCE arguments into DIRECTORY

       -T, --no-target-directory
              treat DEST as a normal file

       -u, --update
              move only when the SOURCE file is newer than the destination file or when the destination file is missing

       -v, --verbose
              explain what is being done

       -Z, --context
              set SELinux security context of destination file to default type

       --help display this help and exit

       --version
              output version information and exit
              
        The  backup  suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.  The version control method may be selected via the --backup option or through the VERSION_CONTROL environment variable.
       Here are the values:

       none, off
              never make backups (even if --backup is given)

       numbered, t
              make numbered backups

       existing, nil
              numbered if numbered backups exist, simple otherwise

       simple, never
              always make simple backups
              
       move more than one file:
            $ mv file_1 file_2 /somedirectory





## rm 
[-i](##Index)

5. **rm** :  remove - like the rmdir command is meant to remove files from your Linux OS. Whereas the rmdir command will remove directories and files held within, the rm command will delete created files. An example of the rm command: rm - r

        -f, --force
              ignore nonexistent files and arguments, never prompt

       -i     prompt before every removal

       -I     prompt once before removing more than three files, or when removing recursively; less intrusive than -i, while still giving protection against most mistakes

       --interactive[=WHEN]
              prompt according to WHEN: never, once (-I), or always (-i); without WHEN, prompt always

       --one-file-system
              when removing a hierarchy recursively, skip any directory that is on a file system different from that of the corresponding command line argument

       --no-preserve-root
              do not treat '/' specially
              when you remove a directory, don’t care if it deletes even the / (root) directory — which is kind of delete everything, no warning.

       --preserve-root
              do not remove '/' (default)
               ensure / (root) directory  won’t be deleted… It’s mostly due to when you delete things recursively or using regex, and you want that extra certainty you either “REALLY” just delete everything even if it’s matching the root directory, or you want to “ENSURE” no root directory will be removed.
               
               Extra flag for when you delete things you are certain what you’re doing

       -r, -R, --recursive
              remove directories and their contents recursively

       -d, --dir
              remove empty directories

       -v, --verbose
              explain what is being done

       --help display this help and exit

       --version
              output version information and exit

       By default, rm does not remove directories.  Use the --recursive (-r or -R) option to remove each listed directory, too, along with all of its contents.

       To remove a file whose name starts with a '-', for example '-foo', use one of these commands:

              rm -- -foo

              rm ./-foo
              
              rm -rf * 
                  remove everything within the directory but leave the directory itself


## mkdir 
[-i](##Index)

6. **mkdir** : make directory - command allows the user to make a new directory.

SYNOPSIS
       mkdir [OPTION]... DIRECTORY...

        -m, --mode=MODE
              set file mode (as in chmod), not a=rwx - umask eg Read mode only

       -p, --parents
              no error if existing, make parent directories as needed
              eg mkdir -p a/b/c
            .
            ./a
            ./a/b
            ./a/b/c

       -v, --verbose
              print a message for each created directory

       -Z     set SELinux security context of each created directory to the default type

       --context[=CTX]
              like -Z, or if CTX is specified then set the SELinux or SMACK security context to CTX

       --help display this help and exit

       --version
              output version information and exit

   * `mkdir dir_1 dir_2 ...dirN` create multiple directories at once with mkdir

   * `mkdir dir1 dir2/{subdir1, subdir2, subdir3, subdirN} dir3 dirN` : create multiple subdirectories then you can pass those argument in `{}`



## rmdir 
[-i](##Index)

7. rmdir : remove empty directories

SYNOPSIS
      rmdir [OPTION]... DIRECTORY...



       --ignore-fail-on-non-empty

            ignore each failure that is solely because a directory is non-empty

       -p, --parents
       
            remove DIRECTORY and its ancestors; e.g., 'rmdir -p a/b/c' is similar to 'rmdir a/b/c a/b a'

       -v, --verbose
       
            output a diagnostic for every directory processed

       --help display this help and exit

       --version
       
            output version information and exit


## [cat](http://www.linfo.org/cat.html) 
[-i](##Index)

8. cat - concatenate files and print on the standard output

SYNOPSIS
       cat [OPTION]... [FILE]...

DESCRIPTION
       Concatenate FILE(s) to standard output.

       With no FILE, or when FILE is -, read standard input.

       -A, --show-all
              equivalent to -vET

       -b, --number-nonblank
              number nonempty output lines, overrides -n

       -e     equivalent to -vE

       -E, --show-ends
              display $ at end of each line

       -n, --number
              number all output lines

       -s, --squeeze-blank
              suppress repeated empty output lines

       -t     equivalent to -vT

       -T, --show-tabs
              display TAB characters as ^I

       -u     (ignored)

       -v, --show-nonprinting
              use ^ and M- notation, except for LFD and TAB

       --help display this help and exit

       --version
              output version information and exit

       EXAMPLES
       cat f - g
              Output f's contents, then standard input, then g's contents.

       cat    
            Copy standard input to standard output.


* cat filename | less 
* cat filename | more


```
<!-- INTERACTIVE WAY TO WRITE -->
cat > random.txt <<EOF
> asjkdfjkasd
> asdfjasdkjfa
> asdfjasdjgfkajsdjkffasdkhf
> 
> 
> asdfjasgdgjfasd
> EOF
<!-- this is going to run the script -->
```



## find 
[-i](##Index)
9. find - search for files in a directory hierarchy

```
 find [-H] [-L] [-P] [-D debugopts] [-Olevel] [starting-point...] [expression]

$ find [where to start searching from]
 [expression determines what to find] [-options] [what to find]

```

GNU find searches the directory tree rooted at each given start‐ing-point by evaluating the given expression from left to right, according to the rules  of  precedence (see  section
OPERATORS),  until  the outcome is known (the left hand side is false for and operations, true for or), at which point
find moves on to the next file name.  If no starting-point is specified, '`.`' is assumed.

 If you are using find in an environment where security is important look at **Finding Files**

 The  `-H`,  `-L` and `-P` options control the treatment of symbolic links.  Command-line arguments following these are taken
 to be names of files or directories to be examined, up to the first argument that begins with `-`, or the argument `(`
 or  `!`.   That  argument and any following arguments are taken to be the expression describing what is to be searched
 for.  If no paths are given, the current directory is used.  If no expression is given, the expression `-print` is  used
 (but you should probably consider using `-print0` instead, anyway).

* `find /` To start searching the whole drive (**/** root folder)
* `find . ` start searching for the folder you are currently

* `find / -name myresume.txt`
* 1. command
      * 2. where to start searching
      * 3. the expression  which determines what to find.
      * 4. last part is the name of the thing to find.
* `find ~ -name game` to search for the home folder

### Expressions

* **`-name`** search for the name of a file or folder
* `-amin n` - The file was last accessed n minutes ago
* `-anewer` - The file was last accessed more recently than it was modified
* `-atime n` - The file was last accessed more n days ago
* `-cmin n` - The file was last changed n minutes ago
* `-cnewer` - The file was last changed more recently than the file was modified
* `-ctime n` - The file was last changed more than n days ago
* **`-empty`** - The file is empty
* `-exec` executable files
* `-executable` - The file is executable
* `-exec CMD` - The file being searched which meets the above criteria and returns 0 for as its exit status for sucessful command execution.
* **`-ok CMD`** - It works same as -exec except the user is prompted first.
* `-false` - Always false
* `-fstype type` - The file is on the specified file system
* `-gid n` - The file belongs to group with the ID n
* `-group groupname` - The file belongs to the named group
* `-ilname pattern` - Search for a symbolic line but ignore case
* `-iname pattern` - Search for a file but ignore case
* `-inum n` - Search for a file with the specified node
* `-ipath path` - Search for a path but ignore case
* `-iregex expression` - Search for a expression but ignore case
* `-links n` - Search for a file with the specified number of links
* `-lname name` - Search for a symbolic link
* `-mmin n` - File's data was last modified n minutes ago
* `-mtime n` - File's data was last modified n days ago
* **`-name namefile`** - Search for a file with the specified name
* `-newer name` - Search for a file edited more recently than the file given
* `-nogroup` - Search for a file with no group id
* `-nouser` - Search for a file with no user attached to it
* `-path path` - Search for a path
* `-print` If the file is found the path to the file will be printed as output.
* `-readable` - Find files which are readable
* **`-regex pattern`** - Search for files matching a regular expression
* **`-type type`** - Search for a particular type
* `-uid uid` - Files numeric user id is the same as uid
* `-user name` - File is owned by user specified
* `-writable` - Search for files that can be written to

* `\(expr \)` - True if ‘expr’ is true; used for grouping criteria combined with OR or AND.
* `! expr` - True if ‘expr’ is false.
* `find ./GFG -name sample.txt -exec rm -i {} \ ` - How to find and delete a file with confirmation.
* `find ./GFG -empty`- Search for empty files and directories.



## grep 
[-i](##Index)

10. `grep`, egrep, fgrep, rgrep - print lines matching a pattern

SYNOPSIS
       grep [OPTIONS] PATTERN [FILE...]
       grep [OPTIONS] -e PATTERN ... [FILE...]
       grep [OPTIONS] -f FILE ... [FILE...]
       
 
 DESCRIPTION
       grep  searches  for  PATTERN  in  each FILE.  A FILE of “-” stands for standard input.  If no FILE is given, recursive
       searches examine the working directory, and nonrecursive searches read standard input.  By default,  grep  prints  the
       matching lines.

       In  addition, the variant programs egrep, fgrep and rgrep are the same as grep -E, grep -F, and grep -r, respectively.
       These variants are deprecated, but are provided for backward compatibility.

example

* grep fox sample.txt

* grep -i somepattern somefile

* env | grep -i User

* ls /somedir | grep '.txt$' 
      * Should return all files ending with .txt in somedir.



## touch 
[-i](##Index)

11. **touch** : allows users to make files
`syntax: touch nameFile.txt` (if you want a text file)

NO SPACE {inside}

* `touch {subfile1, subfal2, subfile3, subfileN} file3...filerN` create multiple file

* `{subfile1, subfal2, subfile3, subfileN}.typeFile`
    eg. touch {green,red,blue,pink}.txt 

## man 
[-i](##Index)

12. **man** : the manual command - is used to show you all information about the command you are using.

SYNOPSIS
       man  [-C  file]  [-d] [-D] [--warnings[=warnings]] [-R encoding] [-L locale] [-m system[,...]] [-M path] [-S list] [-e
       extension] [-i|-I] [--regex|--wildcard] [--names-only] [-a] [-u] [--no-subpages]  [-P  pager]  [-r  prompt]  [-7]  [-E
       encoding]  [--no-hyphenation]  [--no-justification]  [-p string] [-t] [-T[device]] [-H[browser]] [-X[dpi]] [-Z] [[sec‐
       tion] page[.section] ...] ...
       man -k [apropos options] regexp ...
       man -K [-w|-W] [-S list] [-i|-I] [--regex] [section] term ...
       man -f [whatis options] page ...
       man -l [-C file] [-d] [-D] [--warnings[=warnings]] [-R encoding] [-L locale] [-P pager] [-r prompt] [-7] [-E encoding]
       [-p string] [-t] [-T[device]] [-H[browser]] [-X[dpi]] [-Z] file ...
       man -w|-W [-C file] [-d] [-D] page ...
       man -c [-C file] [-d] [-D] page ...
       man [-?V]


* `man + search term` : Look up the manual page for a particular command.

* `man -k + search term` : Do a keyword search for all manual pages containing the given search term.

* search within a manual page :  `slash / + word` then `enter`. Cycle through them by pressing the `n` button for next eg `eg /word`
`shift + n` to go back

## file 
[-i](##Index)

**file** — determine file type

 <pre>
file [-bcdEhiklLNnprsvzZ0] [--apple] [--extension] [--mime-encoding] [--mime-type] [-e testname] [-F separator] [-f namefile] [-m magicfiles] [-P name=value] file ...
    
file -C [-m magicfiles]
file [--help]
 </pre>

 ## less
 [-i](##Index)

 $ less /home/pete/Documents/text1

* `q` - Used to quit out of less and go back to your shell.
Page up, Page down, Up and Down - Navigate using the arrow keys and page keys.
* `g` - Moves to beginning of the text file.
* `G` - Moves to the end of the text file.
* `/search` - You can search for specific text inside the text document. Prefacing the words you want to search with /
* `h` - If you need a little help about how to use less while you’re in less, use help.

## history
[-i](##Index)

history of the commands that you previously entered

## whatis
[-i](##Index)
whatis - display one-line manual page descriptions

 whatis [-dlv?V] [-r|-w] [-s list] [-m system[,...]] [-M path] [-L locale] [-C file] name ...

 Each  manual page has a short description available within it.  whatis searches the manual page names and displays the
 manual page descriptions of any name matched.
 name may contain wildcards (-w) or be a regular expression (-r). **Index**  databases  are  used  during the search, and are updated by the mandb program. 

       -d, --debug
              Print debugging information.

       -v, --verbose
              Print verbose warning messages.

       -r, --regex
              Interpret  each name as a regular expression.  If a name matches any part of a page name, a match will be made.
              This option causes whatis to be somewhat slower due to the nature of database searches.

       -w, --wildcard
              Interpret each name as a pattern containing shell style wildcards.  For a match to be made,  an  expanded  name
              must match the entire page name.  This option causes whatis to be somewhat slower due to the nature of database
              searches.

       -l, --long
              Do not trim output to the terminal width.  Normally, output will be truncated to the terminal  width  to  avoid
              ugly results from poorly-written NAME sections.

       -s list, --sections list, --section list
              Search  only  the given manual sections.  list is a colon- or comma-separated list of sections.  If an entry in
              list is a simple section, for example "3", then the displayed list of descriptions will include pages  in  sec‐
              tions  "3", "3perl", "3x", and so on; while if an entry in list has an extension, for example "3perl", then the
              list will only include pages in that exact part of the manual section.

       -m system[,...], --systems=system[,...]
              If this system has access to other operating system's manual page  names,  they  can  be  accessed  using  this
              option.  To search NewOS's manual page names, use the option -m NewOS.

              The  system  specified  can be a combination of comma delimited operating system names.  To include a search of
              the native operating system's manual page names, include the system name man  in  the  argument  string.   This
              option will override the $SYSTEM environment variable.

       -M path, --manpath=path
              Specify  an  alternate  set  of colon-delimited manual page hierarchies to search.  By default, whatis uses the
              $MANPATH environment variable, unless it is empty or unset, in which case it will determine an appropriate man‐
              path based on your $PATH environment variable.  This option overrides the contents of $MANPATH.

       -L locale, --locale=locale
              whatis  will normally determine your current locale by a call to the C function setlocale(3) which interrogates
              various environment variables, possibly including $LC_MESSAGES and $LANG.  To temporarily override  the  deter‐
              mined  value,  use this option to supply a locale string directly to whatis.  Note that it will not take effect
              until the search for pages actually begins.  Output such as the help message will always be  displayed  in  the
              initially determined locale.

       -C file, --config-file=file
              Use this user configuration file rather than the default of ~/.manpath.

       -?, --help
              Print a help message and exit.

       --usage
              Print a short usage message and exit.



## Echo
[-i](##Index)

echo - display a line of text

SYNOPSIS

 echo [SHORT-OPTION]... [STRING]...

 echo LONG-OPTION

       -n     do not output the trailing newline

       -e     enable interpretation of backslash escapes

       -E     disable interpretation of backslash escapes (default)

       --help display this help and exit

       --version
              output version information and exit

       If -e is in effect, the following sequences are recognized:

       \\     backslash

       \a     alert (BEL)

       \b     backspace

       \c     produce no further output

       \e     escape

       \f     form feed

       \n     new line

       \r     carriage return

       \t     horizontal tab

       \v     vertical tab

### Extra commands 
[-i](##Index)

* `sudo apt-get dist-upgrade`

 * `sudo apt-get update && sudo apt-get dist-upgrade` : to get newest versions possible as per version requirements of dependencies

 ## General Knowledge 
 [-i](##Index)
 
 * `file [path]` obtain information about what type of file a file or directory is
 * Linux is Case Sensitive
 * Spaces in names

    * **single or double** Quotes eg `cd 'Holiday Photos'`
    * **Escape Characters** backslash ( \ ) which  escape (or nullify) the special meaning of the next character eg `cd Holiday\ Photos`

* Hidden Files and Directories


### Resources [-i](##Index)


* [linfo Linux CSommands](http://www.linfo.org/command_index.html)
* [Linux Commands](http://www.linuxcommand.org/tlcl.php/)
* [ryanstutorials Linux](https://ryanstutorials.net/)
