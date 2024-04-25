# zsh常用插件和命令

## 介绍
`zsh` 的插件真的很爽啊, 记录一下个人日常使用的插件和命令，方便查找

## git
::: details 点我查看详情
| Alias                  | Command                                                                                                                         |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `grt`                  | `cd "$(git rev-parse --show-toplevel \|\| echo .)"`                                                                             |
| `ggpnp`                | `ggl && ggp`                                                                                                                    |
| `ggpur`                | `ggu`                                                                                                                           |
| `g`                    | `git`                                                                                                                           |
| `ga`                   | `git add`                                                                                                                       |
| `gaa`                  | `git add --all`                                                                                                                 |
| `gapa`                 | `git add --patch`                                                                                                               |
| `gau`                  | `git add --update`                                                                                                              |
| `gav`                  | `git add --verbose`                                                                                                             |
| `gwip`                 | `git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign --message "--wip-- [skip ci]"` |
| `gam`                  | `git am`                                                                                                                        |
| `gama`                 | `git am --abort`                                                                                                                |
| `gamc`                 | `git am --continue`                                                                                                             |
| `gamscp`               | `git am --show-current-patch`                                                                                                   |
| `gams`                 | `git am --skip`                                                                                                                 |
| `gap`                  | `git apply`                                                                                                                     |
| `gapt`                 | `git apply --3way`                                                                                                              |
| `gbs`                  | `git bisect`                                                                                                                    |
| `gbsb`                 | `git bisect bad`                                                                                                                |
| `gbsg`                 | `git bisect good`                                                                                                               |
| `gbsn`                 | `git bisect new`                                                                                                                |
| `gbso`                 | `git bisect old`                                                                                                                |
| `gbsr`                 | `git bisect reset`                                                                                                              |
| `gbss`                 | `git bisect start`                                                                                                              |
| `gbl`                  | `git blame -w`                                                                                                                  |
| `gb`                   | `git branch`                                                                                                                    |
| `gba`                  | `git branch --all`                                                                                                              |
| `gbd`                  | `git branch --delete`                                                                                                           |
| `gbD`                  | `git branch --delete --force`                                                                                                   |
| `gbgd`                 | `LANG=C git branch --no-color -vv \| grep ": gone\]" \| awk '"'"'{print $1}'"'"' \| xargs git branch -d`                        |
| `gbgD`                 | `LANG=C git branch --no-color -vv \| grep ": gone\]" \| awk '"'"'{print $1}'"'"' \| xargs git branch -D`                        |
| `gbm`                  | `git branch --move`                                                                                                             |
| `gbnm`                 | `git branch --no-merged`                                                                                                        |
| `gbr`                  | `git branch --remote`                                                                                                           |
| `ggsup`                | `git branch --set-upstream-to=origin/$(git_current_branch)`                                                                     |
| `gbg`                  | `LANG=C git branch -vv \| grep ": gone\]"`                                                                                      |
| `gco`                  | `git checkout`                                                                                                                  |
| `gcor`                 | `git checkout --recurse-submodules`                                                                                             |
| `gcb`                  | `git checkout -b`                                                                                                               |
| `gcB`                  | `git checkout -B`                                                                                                               |
| `gcd`                  | `git checkout $(git_develop_branch)`                                                                                            |
| `gcm`                  | `git checkout $(git_main_branch)`                                                                                               |
| `gcp`                  | `git cherry-pick`                                                                                                               |
| `gcpa`                 | `git cherry-pick --abort`                                                                                                       |
| `gcpc`                 | `git cherry-pick --continue`                                                                                                    |
| `gclean`               | `git clean --interactive -d`                                                                                                    |
| `gcl`                  | `git clone --recurse-submodules`                                                                                                |
| `gccd`                 | `git clone --recurse-submodules "$@" && cd "$(basename $\_ .git)"`                                                              |
| `gcam`                 | `git commit --all --message`                                                                                                    |
| `gcas`                 | `git commit --all --signoff`                                                                                                    |
| `gcasm`                | `git commit --all --signoff --message`                                                                                          |
| `gcmsg`                | `git commit --message`                                                                                                          |
| `gcsm`                 | `git commit --signoff --message`                                                                                                |
| `gc`                   | `git commit --verbose`                                                                                                          |
| `gca`                  | `git commit --verbose --all`                                                                                                    |
| `gca!`                 | `git commit --verbose --all --amend`                                                                                            |
| `gcan!`                | `git commit --verbose --all --no-edit --amend`                                                                                  |
| `gcans!`               | `git commit --verbose --all --signoff --no-edit --amend`                                                                        |
| `gcann!`               | `git commit --verbose --all --date=now --no-edit --amend`                                                                       |
| `gc!`                  | `git commit --verbose --amend`                                                                                                  |
| `gcn!`                 | `git commit --verbose --no-edit --amend`                                                                                        |
| `gcs`                  | `git commit -S`                                                                                                                 |
| `gcss`                 | `git commit -S -s`                                                                                                              |
| `gcssm`                | `git commit -S -s -m`                                                                                                           |
| `gcf`                  | `git config --list`                                                                                                             |
| `gdct`                 | `git describe --tags $(git rev-list --tags --max-count=1)`                                                                      |
| `gd`                   | `git diff`                                                                                                                      |
| `gdca`                 | `git diff --cached`                                                                                                             |
| `gdcw`                 | `git diff --cached --word-diff`                                                                                                 |
| `gds`                  | `git diff --staged`                                                                                                             |
| `gdw`                  | `git diff --word-diff`                                                                                                          |
| `gdv`                  | `git diff -w "$@" \| view -`                                                                                                    |
| `gdup`                 | `git diff @{upstream}`                                                                                                          |
| `gdnolock`             | `git diff $@ ":(exclude)package-lock.json" ":(exclude)\*.lock"`                                                                 |
| `gdt`                  | `git diff-tree --no-commit-id --name-only -r`                                                                                   |
| `gf`                   | `git fetch`                                                                                                                     |
| `gfa`                  | `git fetch --all --prune`                                                                                                       |
| `gfo`                  | `git fetch origin`                                                                                                              |
| `gg`                   | `git gui citool`                                                                                                                |
| `gga`                  | `git gui citool --amend`                                                                                                        |
| `ghh`                  | `git help`                                                                                                                      |
| `glgg`                 | `git log --graph`                                                                                                               |
| `glgga`                | `git log --graph --decorate --all`                                                                                              |
| `glgm`                 | `git log --graph --max-count=10`                                                                                                |
| `glod`                 | `git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'`                        |
| `glods`                | `git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short`           |
| `glol`                 | `git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'`                        |
| `glola`                | `git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all`                  |
| `glols`                | `git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --stat`                 |
| `glo`                  | `git log --oneline --decorate`                                                                                                  |
| `glog`                 | `git log --oneline --decorate --graph`                                                                                          |
| `gloga`                | `git log --oneline --decorate --graph --all`                                                                                    |
| `glp`                  | `git log --pretty=<format>`                                                                                                     |
| `glg`                  | `git log --stat`                                                                                                                |
| `glgp`                 | `git log --stat --patch`                                                                                                        |
| `gignored`             | `git ls-files -v \| grep "^[[:lower:]]"`                                                                                        |
| `gfg`                  | `git ls-files \| grep`                                                                                                          |
| `gm`                   | `git merge`                                                                                                                     |
| `gma`                  | `git merge --abort`                                                                                                             |
| `gmc`                  | `git merge --continue`                                                                                                             |
| `gms`                  | `git merge --squash`                                                                                                            |
| `gmom`                 | `git merge origin/$(git_main_branch)`                                                                                           |
| `gmum`                 | `git merge upstream/$(git_main_branch)`                                                                                         |
| `gmtl`                 | `git mergetool --no-prompt`                                                                                                     |
| `gmtlvim`              | `git mergetool --no-prompt --tool=vimdiff`                                                                                      |
| `gl`                   | `git pull`                                                                                                                      |
| `gpr`                  | `git pull --rebase`                                                                                                             |
| `gprv`                 | `git pull --rebase -v`                                                                                                          |
| `gpra`                 | `git pull --rebase --autostash`                                                                                                 |
| `gprav`                | `git pull --rebase --autostash -v`                                                                                              |
| `gprom`                | `git pull --rebase origin $(git_main_branch)`                                                                                   |
| `gpromi`               | `git pull --rebase=interactive origin $(git_main_branch)`                                                                       |
| `ggpull`               | `git pull origin "$(git_current_branch)"`                                                                                       |
| `ggl`                  | `git pull origin $(current_branch)`                                                                                             |
| `gluc`                 | `git pull upstream $(git_current_branch)`                                                                                       |
| `glum`                 | `git pull upstream $(git_main_branch)`                                                                                          |
| `gp`                   | `git push`                                                                                                                      |
| `gpd`                  | `git push --dry-run`                                                                                                            |
| `gpf!`                 | `git push --force`                                                                                                              |
| `ggf`                  | `git push --force origin $(current_branch)`                                                                                     |
| `gpf`                  | On Git >= 2.30: `git push --force-with-lease --force-if-includes`                                                               |
| `gpf`                  | On Git < 2.30: `git push --force-with-lease`                                                                                    |
| `ggfl`                 | `git push --force-with-lease origin $(current_branch)`                                                                          |
| `gpsup`                | `git push --set-upstream origin $(git_current_branch)`                                                                          |
| `gpsupf`               | On Git >= 2.30: `git push --set-upstream origin $(git_current_branch) --force-with-lease --force-if-includes`                   |
| `gpsupf`               | On Git < 2.30: `git push --set-upstream origin $(git_current_branch) --force-with-lease`                                        |
| `gpv`                  | `git push --verbose`                                                                                                            |
| `gpoat`                | `git push origin --all && git push origin --tags`                                                                               |
| `gpod`                 | `git push origin --delete`                                                                                                      |
| `ggpush`               | `git push origin "$(git_current_branch)"`                                                                                       |
| `ggp`                  | `git push origin $(current_branch)`                                                                                             |
| `gpu`                  | `git push upstream`                                                                                                             |
| `grb`                  | `git rebase`                                                                                                                    |
| `grba`                 | `git rebase --abort`                                                                                                            |
| `grbc`                 | `git rebase --continue`                                                                                                         |
| `grbi`                 | `git rebase --interactive`                                                                                                      |
| `grbo`                 | `git rebase --onto`                                                                                                             |
| `grbs`                 | `git rebase --skip`                                                                                                             |
| `grbd`                 | `git rebase $(git_develop_branch)`                                                                                              |
| `grbm`                 | `git rebase $(git_main_branch)`                                                                                                 |
| `grbom`                | `git rebase origin/$(git_main_branch)`                                                                                          |
| `grf`                  | `git reflog`                                                                                                                    |
| `gr`                   | `git remote`                                                                                                                    |
| `grv`                  | `git remote --verbose`                                                                                                          |
| `gra`                  | `git remote add`                                                                                                                |
| `grrm`                 | `git remote remove`                                                                                                             |
| `grmv`                 | `git remote rename`                                                                                                             |
| `grset`                | `git remote set-url`                                                                                                            |
| `grup`                 | `git remote update`                                                                                                             |
| `grh`                  | `git reset`                                                                                                                     |
| `gru`                  | `git reset --`                                                                                                                  |
| `grhh`                 | `git reset --hard`                                                                                                              |
| `grhk`                 | `git reset --keep`                                                                                                              |
| `grhs`                 | `git reset --soft`                                                                                                              |
| `gpristine`            | `git reset --hard && git clean --force -dfx`                                                                                    |
| `gwipe`                | `git reset --hard && git clean --force -df`                                                                                     |
| `groh`                 | `git reset origin/$(git_current_branch) --hard`                                                                                 |
| `grs`                  | `git restore`                                                                                                                   |
| `grss`                 | `git restore --source`                                                                                                          |
| `grst`                 | `git restore --staged`                                                                                                          |
| `gunwip`               | `git rev-list --max-count=1 --format="%s" HEAD \| grep -q "--wip--" && git reset HEAD~1`                                        |
| `grev`                 | `git revert`                                                                                                                    |
| `grm`                  | `git rm`                                                                                                                        |
| `grmc`                 | `git rm --cached`                                                                                                               |
| `gcount`               | `git shortlog --summary -n`                                                                                                     |
| `gsh`                  | `git show`                                                                                                                      |
| `gsps`                 | `git show --pretty=short --show-signature`                                                                                      |
| `gstall`               | `git stash --all`                                                                                                               |
| `gstu`                 | `git stash --include-untracked`                                                                                                 |
| `gstaa`                | `git stash apply`                                                                                                               |
| `gstc`                 | `git stash clear`                                                                                                               |
| `gstd`                 | `git stash drop`                                                                                                                |
| `gstl`                 | `git stash list`                                                                                                                |
| `gstp`                 | `git stash pop`                                                                                                                 |
| `gsta`                 | On Git >= 2.13: `git stash push`                                                                                                |
| `gsta`                 | On Git < 2.13: `git stash save`                                                                                                 |
| `gsts`                 | `git stash show --patch`                                                                                                        |
| `gst`                  | `git status`                                                                                                                    |
| `gss`                  | `git status --short`                                                                                                            |
| `gsb`                  | `git status --short -b`                                                                                                         |
| `gsi`                  | `git submodule init`                                                                                                            |
| `gsu`                  | `git submodule update`                                                                                                          |
| `gsd`                  | `git svn dcommit`                                                                                                               |
| `git-svn-dcommit-push` | `git svn dcommit && git push github $(git_main_branch):svntrunk`                                                                |
| `gsr`                  | `git svn rebase`                                                                                                                |
| `gsw`                  | `git switch`                                                                                                                    |
| `gswc`                 | `git switch -c`                                                                                                                 |
| `gswd`                 | `git switch $(git_develop_branch)`                                                                                              |
| `gswm`                 | `git switch $(git_main_branch)`                                                                                                 |
| `gta`                  | `git tag --annotate`                                                                                                            |
| `gts`                  | `git tag -s`                                                                                                                    |
| `gtv`                  | `git tag \| sort -V`                                                                                                            |
| `gignore`              | `git update-index --assume-unchanged`                                                                                           |
| `gunignore`            | `git update-index --no-assume-unchanged`                                                                                        |
| `gwch`                 | `git whatchanged -p --abbrev-commit --pretty=medium`                                                                            |
| `gwt`                  | `git worktree`                                                                                                                  |
| `gwtls`                | `git worktree list`                                                                                                             |
| `gwtmv`                | `git worktree move`                                                                                                             |
| `gwtrm`                | `git worktree remove`                                                                                                           |
| `gk`                   | `gitk --all --branches &!`                                                                                                      |
| `gke`                  | `gitk --all $(git log --walk-reflogs --pretty=%h) &!`                                                                           |
| `gtl`                  | `gtl(){ git tag --sort=-v:refname -n --list ${1}\* }; noglob gtl`                                                               |
:::

## 参考
1. [Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
