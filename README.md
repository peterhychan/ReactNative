
#React-Native Application


<Pre>
1. Install required parts on OSX
  a. Install XCode and make sure it is now at the most up-to-date version
  b. Install Homebrew
  c. Install Node by brew
    ==> brew install node
  d. Install watchman (to watch file changes on hard-drive)
    ==> brew install watchman
  e. Install React-Native cli
    ==> npm install -g react-native-cli
  f. cd to the target directory, then install React-Native(RN)
    ==> react-native init <project-name>
  g. Once the project is installed, check if the iPhone simulator works
    ==> react-native run-ios


<Post>
2. The size of node_modules and iOS folders are large. To retrive them, type the following command:
	==>cd <target_folder> 
	==>react-native upgrade
	==>react-native run-ios 