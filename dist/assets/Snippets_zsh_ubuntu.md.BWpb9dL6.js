import{_ as t,o as d,c as e,a7 as a}from"./chunks/framework.CgLK9O2D.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Snippets/zsh/ubuntu.md","filePath":"Snippets/zsh/ubuntu.md","lastUpdated":1719404103000}'),o={name:"Snippets/zsh/ubuntu.md"},r=a('<table tabindex="0"><thead><tr><th>Alias</th><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>age</td><td><code>sudo $APT</code></td><td>Run apt-get with sudo</td></tr><tr><td>acs</td><td><code>apt-cache search</code></td><td>Search the apt-cache with the specified criteria</td></tr><tr><td>acsp</td><td><code>apt-cache showpkg</code></td><td>Shows information about the listed packages</td></tr><tr><td>acp</td><td><code>apt-cache policy</code></td><td>Display the package source priorities</td></tr><tr><td>afs</td><td><code>apt-file search --regexp</code></td><td>Perform a regular expression apt-file search</td></tr><tr><td>afu</td><td><code>sudo apt-file update</code></td><td>Generates or updates the apt-file package database</td></tr><tr><td>aga</td><td><code>sudo $APT autoclean</code></td><td>Clears out the local repository of retrieved package files that can no longer be downloaded</td></tr><tr><td>agb</td><td><code>sudo $APT build-dep &lt;source_pkg&gt;</code></td><td>Installs/Removes packages to satisfy the dependencies of a specified build pkg</td></tr><tr><td>agc</td><td><code>sudo $APT clean</code></td><td>Clears out the local repository of retrieved package files leaving everything from the lock files</td></tr><tr><td>agd</td><td><code>sudo $APT dselect-upgrade</code></td><td>Follows dselect choices for package installation</td></tr><tr><td>agi</td><td><code>sudo $APT install &lt;pkg&gt;</code></td><td>Install the specified package</td></tr><tr><td>agli</td><td><code>apt list --installed</code></td><td>List the installed packages</td></tr><tr><td>aglu</td><td><code>sudo apt-get -u upgrade --assume-no</code></td><td>Run an apt-get upgrade assuming no to all prompts</td></tr><tr><td>agp</td><td><code>sudo $APT purge &lt;pkg&gt;</code></td><td>Remove a package including any configuration files</td></tr><tr><td>agr</td><td><code>sudo $APT remove &lt;pkg&gt;</code></td><td>Remove a package</td></tr><tr><td>ags</td><td><code>$APT source &lt;pkg&gt;</code></td><td>Fetch the source for the specified package</td></tr><tr><td>agu</td><td><code>sudo $APT update</code></td><td>Update package list</td></tr><tr><td>agud</td><td><code>sudo $APT update &amp;&amp; sudo $APT dist-upgrade</code></td><td>Update packages list and perform a distribution upgrade</td></tr><tr><td>agug</td><td><code>sudo $APT upgrade</code></td><td>Upgrade available packages</td></tr><tr><td>agar</td><td><code>sudo $APT autoremove</code></td><td>Remove automatically installed packages no longer needed</td></tr><tr><td>aguu</td><td><code>sudo $APT update &amp;&amp; sudo $APT upgrade</code></td><td>Update packages list and upgrade available packages</td></tr><tr><td>allpkgs</td><td><code>dpkg --get-selections | grep -v deinstall</code></td><td>Print all installed packages</td></tr><tr><td>kclean</td><td><code>sudo aptitude remove -P ?and(~i~nlinux-(ima|hea) ?not(~n$(uname -r)))</code></td><td>Remove ALL kernel images and headers EXCEPT the one in use</td></tr><tr><td>mydeb</td><td><code>time dpkg-buildpackage -rfakeroot -us -uc</code></td><td>Create a basic .deb package</td></tr><tr><td>ppap</td><td><code>sudo ppa-purge &lt;ppa&gt;</code></td><td>Remove the specified PPA</td></tr></tbody></table><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyZGF0ZSUyMiUzQTE3MTk0MDQxMDMwMDAlN0Q="></div>',2),c=[r];function s(p,i,l,u,n,g){return d(),e("div",null,c)}const m=t(o,[["render",s]]);export{k as __pageData,m as default};
