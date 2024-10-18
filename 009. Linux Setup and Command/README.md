# LINUX SETUP AND COMMANDS

* `whoami` - gives the current user

* `logout` - Logout or exit from the session

## ⭐ Directory 

* `pwd` - print current working directory

* `ls` - List

* `mkdir` - make directory (create new folder)
  
* `touch demo.txt` - creating file

* `vim demo.txt` - open vim editor

* `rmdir demofolder` - deletes directory(folder)

  ---

  ## ⭐ FILES

* `vi demofile` - create file and open
 
* `touch filename` - create file only
 
* `cat > filename` - create file and text in cmd
* `less filename` - to open the file
* `more filename` - open file in command (around 60%)
* `tail filename` - last number of lines
* `rm filename` - remove file
* `rm -r dirname` - if dir is not empty
* `cp sourcefile destinationfile` - copy
* `mv sourcefile destinationfile` - move sourcefile to newfile and sourcefile will deleted
* `rm -rf *` - will delete every files and directory in current directory

## VI EDITOR

* command mode - (ESC)
  
* Insert mode - (i)
* `:q` to quit (short for :quit)
* `:q!` to quit without saving (short for :quit!)
* `:wq` to write and quit
* `:wq!` to write and quit, attempting to force the write if the file lacks write permission
* `:x` to write and quit; like :wq but writes only if modified (short for :exit)
* `:qa` to quit all (short for :quitall)
* `:cq` to quit, without saving, with a nonzero exit code to indicate failure (short for :cquit)
* `:?words` - search words from bottom to top
* `:/words` - search words from top to bottom
* `:%s/words/WORDS` - replace first occurence `words` with `WORDS`
