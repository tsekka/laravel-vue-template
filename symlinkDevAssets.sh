#!/bin/sh
APP='frontside-[tailwind-or-vuetify]'

FROM="$PWD/resources/$APP/node_modules"
TO="$PWD/public"
ln -sf $FROM $TO
printf "Symlink created:\nfrom [$FROM] \n\nto [$TO]\n"

# This is also required for fetching assets during development
FROM="$PWD/resources/$APP/src"
TO="$PWD/public"
ln -sf $FROM $TO
printf "Symlink created:\nfrom [$FROM] \n\nto [$TO]\n"
