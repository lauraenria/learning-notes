# VSCODE UBUNTU

*  Use the command `code /path/to/file/or/directory/you/want/to/open` to open your file in VS Code.

* Launch VS Code. Now open the Command Palette (F1) and type shell command to find the Shell Command: Install 'code' command in PATH command. Restart your terminal.

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

# Linux commands

1.  `ls [OPTION]... [FILE]...` show all of the major directories filed under a given file system



2. [**cd**](http://www.linfo.org/cd.html) : change directory eg. `cd/arora/applications`
    * use **relative path** or **absolute path** `cd /path/to/directory`
    * `cd -` : returns the user to the previous current directory and reports on a new line the absolute pathname of that directory
    * `cd --` :  Show last working directory from where we moved (use ‘–‘ switch)
    * `cd .` : current directory (present directory).
    * `cd ..` : Change Current directory to parent directory.
    * `cd ../ ../ ` : Move two directory up from where you are now.
    * `cd ~` : Move to users home directory from anywhere.
    * `cd .` or `cd ./` : Change working directory to current working director
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

* `$ mkdir [dir-name] && cd $_` : create directory and switch to it using single command
    * `$_` expands to the last argument of the previous command.

* `$ cd ./-` : create a directory named ‘-’ and switch to it

* run `info cd` or `help cd` commands for more info 



3. **mv** : move - allows a user to move a file to another folder or directory. Just like dragging a file. Syntax:

4. **man** : the manual command - is used to show you all information about the command you are using.

5. **mkdir** : make directory - command allows the user to make a new directory.

6. rmdir : remove directory - command allows the user to remove an existing command using the Linux CLI

7. **touch** : allows users to make files
`syntax: touch nameFile.txt` (if you want a text file)

8. **rm** :  remove - like the rmdir command is meant to remove files from your Linux OS. Whereas the rmdir command will remove directories and files held within, the rm command will delete created files. An example of the rm command: rn - r

* sudo apt-get dist-upgrade


 extra commands
 * `sudo apt-get update && sudo apt-get dist-upgrade` : to get newest versions possible as per version requirements of dependencies

# Resources

* [Linux CSommand](http://www.linuxcommand.org/tlcl.php/)














