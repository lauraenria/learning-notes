# Documentations Ubuntu

## Index 

* [Paths](#Paths)
* [ls](##ls)
* [cd](##cd)
* [mv](##mv)
* [man](##man)
* [mkdir](##mkdir)
* [rmdir](##rmdir)
* [touch](##touch)
* [rm](##rm)
* [Extra commands](###Extra-commands)
* [Resources](##Resources)

#  Paths

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

## cd

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
                a non-zero status
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

## mv

3. **mv** : move (rename) files - Syntax:

## man

4. **man** : the manual command - is used to show you all information about the command you are using.

## mkdir

5. **mkdir** : make directory - command allows the user to make a new directory.
    mv [OPTION]... [-T] SOURCE DEST
    mv [OPTION]... SOURCE... DIRECTORY
    mv [OPTION]... -t DIRECTORY SOURCE...


##   rmdir 

6. rmdir : remove directory - command allows the user to remove an existing command using the Linux CLI

## touch

7. **touch** : allows users to make files
`syntax: touch nameFile.txt` (if you want a text file)

## rm

8. **rm** :  remove - like the rmdir command is meant to remove files from your Linux OS. Whereas the rmdir command will remove directories and files held within, the rm command will delete created files. An example of the rm command: rn - r

* sudo apt-get dist-upgrade

### Extra commands
 * `sudo apt-get update && sudo apt-get dist-upgrade` : to get newest versions possible as per version requirements of dependencies

### Resources

* [Linux CSommand](http://www.linuxcommand.org/tlcl.php/)
* [ryanstutorials Linux](https://ryanstutorials.net/)