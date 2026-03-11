# @@ GIT

Edited By Deeep

- git is a Open Source Distributed Version Control system.
- git helps Devs to track their Code, Collabrate With Others And Manage Multiple Versons of The Project.
- There Are Multiple Platforms uses Git VCS Like Github, GitLab, BitBucket

### `**Features**`

- Distributed System(No Server Needed)
- Version Tracking
- Collaboration
- Branching
- Merging
- Remote Repositoriesgi
- Extensive Tooling
- Staging Area(Stashing, index or cache)

- > After Installtion You Need to initial Config(name, email)
  > Name : `git config --global user.name ["Dev Patel"]`
  > Email : `git config --global user.email ["Hridaym@Dev.in"]`
  > Main Brach : `git config --global init.defaultBranch [main/master]`

### `**Commands**`

- To initialize a new (empty) Repository in PWD : `git init`
- To check Status(shows current branch, modified Files, staged files, untracked files, commit status, guidence & suggestions) : `git status`
- Add files To Staging Area : `git add  .(All) or filename(Specific)`
- Commit Files to Local Repository on MAchine : `git commit -m 'What Did You Did On Project Short Message'`
- Show All Git Commit (Commit Hash, Author, Date & Message) : `git log`
- Establish Connection b/w Local git Repo & Remote Repo. This Connection Allows Local Repository To "Push Chnages" & "Pull Changes" : `git remote add origin <repository Url>`
- Create New Branch : `git branch dev`
- To Rename The Current Branch : `git branch -M dev`
- to switch (& Create New) to existing branch : `git checkout main`
- Push Local Repo TO Remote Repository(GtHUb, GitLab, BitBucket) : `git push -u origin main` or `git push`
- to pull any changes from the server : `git pull origin main`

init status add log commit add stash

git pop reset pull push

> > Extra Commands

- Add Remote Repo To lOcal Machine : `git clone [Remote Repo Url]`
- WHen Want to change to differnt Branch and you want to store changes that are not be commited :- `git stash`

- > if you Don't want to include Some Files Like `.env` file Or Some Other Ones And Create `.gitignore` file And add what wwhat files you dont want to push in remote repository and but stays on local repository

### `**git reset**`

- Undo Changes in the repository by moving current branch HEAD pointer to specified commit. it also Affect The Staging Area(index) AND PWD depending on Option
- all options will Moves HEAD to SPecified Commit.
- > options :-

  - `--soft` : Keeps the Changes B/W Original HEAD and New HEAD in Staging Area(index). keeps tHe Changes in PWD. Useful When Multiple Commuts into one Commit WIth DIffrent Message. `git reset HEAD~1 --soft`
  - `--mixed` : unstaged chnages b/w HEAD and new HEAD moving them PWD. keeps the chnages in PWD. `git reset HEAD~1`
  - `--hard` : Discard All Changes(b/w original HEAD & new HEAD) in Staging & The PWD.This Permanently removes uncommited Chnages(Use WHen Necessary). `git reset HEAD~1 --hard`

- > when to use it
- to undo local commits before pushed to a Shared Repository
- To clean up your commits history by combining or removing commits
- to unstage files or revert changes in PWD
  eg.

### `**Branching & Merging**`

- Branching Alllows to Work on New Features or Bug Fixes Without Affectig the Main Codebase(Main Branch) by creating New Branch and when Feature is ready You can Merge the New Code into Main Branch
- Always Ensure What Currnt Branch is When You Create New Branch
- to Create New Branch : `git branch feature/payment_module`
- To Switch to existing Branch (or create new Branch): `git checkout -b feature/payment_module`
- to see current Branch : `git Branch`
- then When Push You have to add Branch name : `git push -U origin feature/payment_module`
- To Integrate Changes From Specific Branch(feature/payment_module) To Currently Checkout Branch(main) (But First Switch To Other Than Specified Branch(feature/payment_module) using Checkout):
  1. `git checkout main`
  2. `git merge feature/payment_module`
- to delete Branch : `git branch -d feature/payment_module`
- To Create New-Branch(Hridayam) From Another(Dev) Besides Working on Main Branch : `git branch Hridayam Dev`

### `**git Merge**`

- This command integrates changes from specified branch into the currently checked out branch. the use of to combine distinct lines of devlopemnt int single unified history.
  > - how it works
- - Identifies Common Base : determines most rexent ancestor commit between two branches being merged.
- - combine changes : git than applies changes from the source branch(current checked out branch) starting from that common base.
- - creates a merge commit
    - Fast forword Merge : when the branch merging into has no new commits since the branch you are merging was created. then git simply moves the branch pointe to latest commit of source branch. the commit history remains single, liner lineas if the chnages were made dfirecly to target brach.
    - Three way merge : when both branches have new, diverged commmits that need to be integrated, then git identifies the common ancestor commit of both branches then comnbines the changes from the ancestor to each branches tip resolvig any conflicts. reult a new dedicated merge commit is created which has two parent commits.it preserves the history of both branche, showing that thay diverges and were later combined.
- - handles conflicts :if git encounters conflicting changes(the same lines modified diffrently in both branches), it cannot automatically resolve them. when this happens the merge Process pauses and the user must manually resolve these conflicts before committing the merge

diff

init
remote
addd
coomit
fetch all
pull (same branch) if diff branch then merge
if conflict then resolve & add commit then onlly then
push

Existing

clone

see one more time
git reset
git stasj & pop

> > Merge Conflict

### `Advance`

> > **git revert** > > **git reset** > > **git stash**

# Notes

- In Git Command `Origin` refers to `Repository Link`. When You Add Connection You CAn Chnage `origin` To Whatever specified(Dev) you want `git remote add dev <Repository Link>`

- What Is GitHub

  - Web Based Platform used for Veersion Control System & Collabration. It Hosts Repositories & Provides an Interface to manage code & Do Additional Things.

- VS Code File Status Indicators

  - `U` : Untracked means file is new & not been add to git repository or stagged yet.
  - `A` : Added means file is new but stagged but not commited
  - `M` : Mofied means file is alredy in tracked by Git but Modified Since Last Commit
  - `D` : Deleted means File Was Tracked by Git But delted from PWD
  - `C` : Conflict means file contains Merge Conflict
  - `R` : Renamed meand Tracked File Has Been Renamed

- Dev
  - `git init`
  - `git remote add origin <repository link>`
  - `git fetch --all`
  - `git checkout main`
  - `git add .`
  - `git commit -m "message"`
  - `git push origin main`
