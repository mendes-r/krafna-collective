#!/bin/bash

# Creates a JSON with an array of object representations of the different projects and associated images
#
# Project name: XX-PROJECT-NAME

SOURCE='assets/images/'
SLIDE='/slideshow/'
LEFT='left'
RIGTH='right'
JSON="assets/projects.json"
DESCRIPTION="description.txt"
# All project's folders
PROJECTS=($(ls $SOURCE))
# https://stackoverflow.com/questions/12298261/how-to-know-if-file-in-a-loop-is-the-last-one
PROJECT_LENGTH=$(( ${#PROJECTS[*]} - 1 ))
LAST_PROJECT=${PROJECTS[$PROJECT_LENGTH]}

projects () {
	cat <<- _EOF_ >> $JSON
  {
    "id": "$(echo $1 | cut -d - -f1)",
    "name": "$(echo $1 | cut -d - -f2-)",
    "description": "$(cat $SOURCE$1/$DESCRIPTION)",
    "thumbnail": "$(find $SOURCE$1 -type f -depth 1 -name '*.jpg' -o -name '*.png' | head -n 1)",
	_EOF_
	return
}

slides () {
	# All images inside the folder "slideshow"
	SLIDES=($(find "$SOURCE$project$SLIDE$1" -type f -depth 1 -name '*.jpg' -o -name '*.png'))
	SLIDES_LENGTH=$(( ${#SLIDES[*]} - 1 ))
	LAST_SLIDE=${SLIDES[$SLIDES_LENGTH]}

	echo '    "'$1'_slides": [' >> $JSON

	for slide in "${SLIDES[@]}"
	do
		if [[ $slide == $LAST_SLIDE ]]; then
			echo '      "'$slide'"' >> $JSON
		else
			echo '      "'$slide'",' >> $JSON
		fi
	done

	if [[ $1 == $RIGTH ]]; then
		echo "    ]" >> $JSON
	else
		echo "    ]," >> $JSON
	fi

	return
}

if [ -f $JSON ]; then
	rm $JSON
fi

echo '[' >> $JSON

for project in "${PROJECTS[@]}"
do
  projects $project

	slides $LEFT
	slides $RIGTH

	# Don't enter a coma when it's the last object
	if [[ $project == $LAST_PROJECT ]]; then
		echo "  }" >> $JSON
	else
		echo "  }," >> $JSON
	fi

done
echo "]" >> $JSON
