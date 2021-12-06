#!/bin/bash

SOURCE='./images/'
LIST_OF_PROJECTS=''
JSON="./projects.json"

projects () {
	cat <<- _EOF_
{
  "name": $(echo $1 | cut -d - -f2-)
  "id": $(echo $1 | cut -d - -f1)
	_EOF_
	return
}

thumbnail () {
  cat <<- _EOF_
  "thumbnail": $(find $SOURCE$1 -type f -depth 1 -name '*.jpg' -o -name '*.png' | head -n 1)
	_EOF_
	return
}

slideshow () {
  cat <<- _EOF_
  "slideshow": {

  }
},
	_EOF_
	return
}

for project in $(ls $SOURCE)
do
  projects $project
  thumbnail $project
  slideshow
done
