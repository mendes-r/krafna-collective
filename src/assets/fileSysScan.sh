#!/bin/bash

# Creates a JSON with an array of object representations of the different projects and associated images
#
# Project name: XX-PROJECT-NAME

SOURCE='./images/'
SLIDE='/slide/'
JSON="./projects.json"

projects () {
	cat <<- _EOF_ >> $JSON
  {
    "name": "$(echo $1 | cut -d - -f2-)",
    "id": $(echo $1 | cut -d - -f1),
    "thumbnail": "$(find $SOURCE$1 -type f -depth 1 -name '*.jpg' -o -name '*.png' | head -n 1)",
    "slideshow": [
	_EOF_
	return
}

slides () {
	cat <<- _EOF_ >> $JSON
			# Know if is the last iteration to remove the coma
			# https://stackoverflow.com/questions/12298261/how-to-know-if-file-in-a-loop-is-the-last-one
      "$1",
	_EOF_
	return
}

if [ -f $JSON ]; then
	rm $JSON
fi

echo '[' >> $JSON
for project in $(ls $SOURCE)
do
  projects $project

	for slide in $(find $SOURCE$project$SLIDE -type f -depth 1 -name '*.jpg' -o -name '*.png')
	do
		slides $slide
	done

	echo "    ]" >> $JSON

	# Know if is the last iteration to remove the coma
	# https://stackoverflow.com/questions/12298261/how-to-know-if-file-in-a-loop-is-the-last-one
	echo "  }," >> $JSON
done
echo "]" >> $JSON
