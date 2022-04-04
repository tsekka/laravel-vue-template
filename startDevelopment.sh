#!/bin/sh

APP='laravel-vue-template'

# This is required to get app path (PWD won't work if symlinking the script)
SCRIPT_PATH=`readlink -f "$0"`
APP_DIR=`dirname "$SCRIPT_PATH"`

# START PROCESSES IN GUAKE TERMINAL
guake --new-tab="$APP_DIR/resources/frontside-[tailwind-or-vuetify]"
guake --rename-current-tab="$APP vue" --execute-command="npm run dev"
guake --show

# OPEN VSCODE INSTANCES
cd "$APP_DIR"
code .
cd "$APP_DIR/resources/frontside-[tailwind-or-vuetify]"
code .

# cd "$APP_DIR/packages/Tsekka/Twill"
# code .
