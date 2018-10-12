---
sidebar: auto
---

# Configuring Your Ubuntu Server



## Configuring the Web Server

### Apache

### NGINX

## Useful System Administration Notes

### Creating a New Sudo User

It's bad practice to run system commands as the root user unless absolutely necessary. You should instead create a Sudo user that can execute commands on behalf of another user, by default the root user. To do so, you'll first create a new user (skip this step if you instead want to add sudo capabilities to an existing user:

	$ adduser wjgilmore
	Adding user `wjgilmore' ...
	Adding new group `wjgilmore' (1000) ...
	Adding new user `wjgilmore' (1000) with group `wjgilmore' ...
	Creating home directory `/home/wjgilmore' ...
	Copying files from `/etc/skel' ...
	Enter new UNIX password: 
	Retype new UNIX password: 
	passwd: password updated successfully
	Changing the user information for wjgilmore
	Enter the new value, or press ENTER for the default
		Full Name []: 
		Room Number []: 
		Work Phone []: 
		Home Phone []: 
		Other []: 
	Is the information correct? [Y/n] Y

Next, you'll add the user to the `sudo` group:

    $ usermod -aG sudo wjgilmore

Once done, you can 

See these resources for more information:

* https://linuxize.com/post/how-to-create-a-sudo-user-on-debian/