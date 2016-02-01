# Steven Abbott Website

This is the README.md file.

You can use this to make any notes you want.

##Git commands

###Status

Git status shows files that have changed since last commit.
```
git status
```

---

###Pull and Merge

Git pull gets latest from Github repository
```
git pull
```

Git merge is used to sync another branch to the currently checked out branch (so after a pull, merge master to sa-edit) (may be some conflicts to resolve manually)
```
git merge branch-name
```

---

###Add, Commit and Push

Git add is used to add modifications and new files  (use . to add everything)
```
git add .
```
or
```
git add file/name.ext
```

Git commit to add any changes you make (a message is required (-m "text" = message="text"))
```
git commit -m "my commit"
```

Git push to upload changes
```
git push
```

---

###Creating and checking out branches and files

Git create new branch and checkout (replace branch name with the name you want to use) n.b. Could use this if you have trouble pushing to your branch, just create a new branch and push that instead.
```
git checkout -b branch-name
```

Git checkout branch-name to switch between branches
```
git checkout branch-name
```

To revert a file this should work (untested)
```
git checkout branch-name file/name.ext
```

---

###Remove file from tracking

Git remove will remove a file from tracking
```
git remove file/name.ext
```
Can be shortened to 
```
git rm file/name.ext
```
to remove file and it's entire history (especially useful if you accidently commit a file with a password in it)
```
git rm --cached file/name.ext
```

---

###Stash and removing unwanted changes

Git stash can be used to set all files to last commit
```
git stash
```

Git unstash can be used to retrieve stashed files (you will need to fix any conflicts manually if any changes were made since last stash)
```
git unstash
```

Git stash clear will delete the stash from gits history
```
git stash clear
```