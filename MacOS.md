# MacOS

### Upgrade PHP to 7.3

```sh
curl -s https://php-osx.liip.ch/install.sh | bash -s 7.3
export PATH=/usr/local/php5/bin:$PATH
```
<br />

### Display the file extensions in Finder

```sh
defaults write NSGlobalDomain AppleShowAllExtensions -bool true
killall Finder
```
> Revert to the default setting

```sh
defaults write NSGlobalDomain AppleShowAllExtensions -bool false
killall Finder
```
