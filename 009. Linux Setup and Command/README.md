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
* `:%s/india/INDIA/g` - replace all occurence of `india` to `INDIA`
* `dd` - to delete lines
* `x` - to delete single character
* `:n` - take to the nth line
* `touch .sample` - create hidden file with (.)

  ## `ls` - to list

  * l - long listed format

  * r - reverse order
  * t - sort on time modified
  * a - to list the hidden file
 
  ## PERMISSION AND OWNERSHIP

   * Owner - rwx
 
   * group - rwx
   * others - rwx

 `drxwr-xr-x` 

 * `drxwr` - owner
 * `xr` - groups
 * `x` - others

rwx    rwx   rwx    ------> 777
421    421   421

rwx    r-x   r-x    -----> 755
421    4-1   4-1

rw-    r--   r--   ------> 644
42-    4--   4--

### to change the permission ownership of file

```cmd
chmod 777 filename
chmod 000 filename
chmod 731 filename
```

### to change the permission of folder(directory)

```cmd
chmod -R 777 foldername
chmod -R 000 foldername
```

### to change owner of file 

```cmd
chown ec2-user file1
```

### to change owner of folder 

```cmd
chown -R ec2-user foldername
```

### to change the group name 

```cmd
chgrp ec2-user filename
```

```cmd
chmod 777 filename
chmod -R 777 foldername
chown ownerid filename
chgrp groupid filename
chown ownerid:grpid filename
```

## CPU, MEMORY UTILIZATION, PROCESS LISTING

`ps -ef` -> task bar

`sar` -> memory utilized

`top` - troubleshooting

`free -m`

## FILE SYSTEM

* `df -h` - size of file system

* `du -sk filename` - file size

## FILE COMPRESSION 

* `zip`  - `unzip`

* `gzip` - `gunzip`

* `tar` - `untar`

```cmd
zip filename.zip filename
zip filename.zip file1 file2 file3


unzip filename.zip
```


```cmd
tar -cvf compress.tar dir1

tar -xvf compress.tar
```


---

mkdir dirname
rmdir dirname
rm -rf dirname (if dir is not empty)

vi filename
touch filename
rm -f filename
cp sourcefile destfile
mv sourcefile destfile


cat filename
less filename
	Shift+G - to reach EOF
	?searchstring - to find the string
	n - to go to previous search occurence
	q - to quit 
more filename
tail filename (tail -15f filename)

vi editor : 
Command mode (Esc) , Insert mode (i)
	Shift+G - to reach EOF
	/searchstring - to find the string
	n - to find next search occurence
	:%s/searchstring/replacestring/g - find all and replace all
	:wq! - to save and quit
	dd - to delete the line (5d - to delete 5 lines from cursor point)
	x - to delete character (3x - to delete 3 characters from cursor point)

pwd
cd <path> , cd .. , cd - , cd /
date
whoami , w



free -m ( memory utilization)
sar (CPU utilization)
top (process-wise CPU , memory utilization)
ps -ef |grep search
grep  - to search
du -sk *|sort -nr|head
df -h

ls -lrta

chmod 775 filename
chmod -R 775 dirname

chown owner filename   (chown -R owner dirname)
chown owner:group filename
chgrp group filename

zip/unzip filename
gzip/gunzip filename

tar -cvf filename - to tar
tar -xvf filename.tar- to untar

find / -name filename
locate filename

/etc/passwd - user details
/etc/group - group details



755
rwx    r-x    r-x
owner  group  others

rwx   rwx   rwx
777
421


rwx rw- r--
764

---

